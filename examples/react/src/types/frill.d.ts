declare global {
  interface Window {
    Frill: FrillContainerApi;
  }
}

/**
 * A user identity
 */
export interface GuestUser {
  name: string;
  email: string;
  avatar?: string;
}

export interface RegisteredUser {
  idx: string;
  name: string;
  email: string;
  avatar?: string;
  meta?: UserMeta;
}

export interface FrillUserTokens {
  idx?: string;
  isAnonymous: boolean;
  frillToken: string;
  frillRefreshToken: string;
}

export interface FrillIdentity {
  tokens?: FrillUserTokens & {
    scope: FrillAcessTokenScope;
  };
  userMeta: UserMeta;
}

export type FrillIdentityWithTokens = Required<FrillIdentity>;

export type FrillAcessTokenScope = 'basic' | 'frill';

export interface SSOUserToken {
  ssoToken: string;
}

export type UserIdentificationInput = GuestUser | FrillUserTokens | SSOUserToken;

export interface FrillWidget {
  open(): void;
  close(): void;
  toggle(): void;
  destroy(): void;
  identify(user: UserIdentificationInput): void;
  unidentify(): void;
  updateSettings(settings: WidgetSettings, replace?: boolean): void;
  createIdea(defaultValues?: CreateIdeaDefaultValues): void;
  viewIdea(ideaSlug: string, section?: Section): void;
  viewSection(section: Section): void;
  setBadgeCount(count: number): void;
}

export interface FrillSurvey {
  open(): void;
  close(): void;
  toggle(): void;
  destroy(): void;
  identify(user: UserIdentificationInput): void;
  unidentify(): void;
  type: SurveyType;
}

export type SurveyType = 'nps' | 'csat' | 'idea-poll' | 'open-feedback' | 'poll';

export interface FrillContainer {
  destroy(): void;
}

export type CancelablePromise<T> = Promise<T> & { destroy(): void };

export type FrillApiInit = {
  (method: 'widget', config: WidgetConfiguration): CancelablePromise<FrillWidget>;
  (method: 'survey', config: SurveyConfiguration): CancelablePromise<FrillSurvey>;
  (method: 'container', config: ContainerConfiguration): CancelablePromise<FrillContainer>;
  (method: 'identify', input: FrillIdentityWithTokens | UserIdentificationInput): Promise<void>;
  (method: 'unidentify'): Promise<void>;
};

export type FrillContainerApiQueue = Record<
  string,
  { params: Parameters<FrillApiInit>; resolve(): void; reject(err: Error): void }
>;

export type FrillContainerApi = FrillApiInit & {
  q: FrillContainerApiQueue;
  containers: Record<string, FrillContainer>;
  surveys: Record<string, FrillSurvey>;
  widgets: Record<string, FrillWidget>;
};

export type WidgetConfigurations = WidgetConfiguration | WidgetConfiguration[];

/**
 * The configuration that is used to initialize the container
 */
export interface WidgetContainerConfiguration {
  /**
   * Your container key
   * @required
   */
  key: string;
  /**
   * Your SSO (JWT) Frill token, used to authenticate users inside widgets loaded in this container
   */
  ssoToken?: string;
  /**
   * Optional callback functions for container lifecycle events
   */
  callbacks?: WidgetContainerCallbacks;
  /**
   * Disable analytics
   */
  disableAnalytics?: boolean;
  /**
   * Disable cookies
   */
  disableCookies?: boolean;
  /**
   * Frill refresh token
   */
  frillToken?: string;
  /**
   * Custom Widget configrations to override existing widgets
   */
  widgets?: WidgetConfiguration[];
}

/**
 * The configuration that is used to initialize the widget
 */
export interface WidgetConfiguration {
  /**
   * Your widget key
   * @required
   */
  key: string;
  /**
   * Your SSO (JWT) Frill token, used to authenticate users inside the widget
   */
  ssoToken?: string;
  /**
   * Optional callback functions for widget lifecycle events
   */
  callbacks?: WidgetCallbacks;
  /**
   * Container node where the widget will be rendered
   * @default document.body
   */
  container?: HTMLElement;
  /**
   * Load CSS styles
   * @default true
   */
  loadStyles?: boolean;
  /**
   * Disable analytics
   * @default false
   */
  disableAnalytics?: boolean;
  /**
   * Disable cookies
   * @default false
   */
  disableCookies?: boolean;
  /**
   * Widget settings override
   */
  settings?: Partial<WidgetSettings>;
  /**
   * Frill refresh token
   */
  frillToken?: string;
}

export interface WidgetContainerCallbacks {
  /**
   * Fired after container has loaded all widgets, but not necessarily ready
   */
  onCreate?(container: FrillContainer): void;
  /**
   * Fired when the container is destroyed
   */
  onDestroy?(): void;
}

export type WidgetSettings = any;

export interface WidgetCallbacks extends FrameCallbacks<FrillWidget> {
  /**
   * Fired after the badge count changes
   */
  onBadgeCount(event: {
    announcements: Pick<RestAPI.AnnouncementArticle, 'idx' | 'slug' | 'published_at'>[];
    count: number;
  }): void;
  /**
   * Fired after a boosted announcement notification has been opened
   */
  onNotificationOpen(): void;
  /**
   * Fired after a boosted announcement notification has been closed
   */
  onNotificationClose(): void;
}

/**
 * The configuration that is used to initialize the survey
 */
export interface SurveyConfiguration {
  /**
   * Your survey key
   * @required
   */
  key: string;
  /**
   * A unique identifier for you survey, used to create multiple instances of the same survey
   * Defaults to the survey key
   */
  id?: string;
  /**
   * Your SSO (JWT) Frill token, used to authenticate users inside the survey
   */
  ssoToken?: string;
  /**
   * Frill user tokens
   */
  frillTokens?: FrillUserTokens;
  /**
   * Guest user identification
   */
  user?: GuestUser;
  /**
   * Optional callback functions for survey lifecycle events
   */
  callbacks?: Partial<SurveyCallbacks>;
  /**
   * Container node where the survey will be rendered
   * @default document.body
   */
  container?: HTMLElement;
  /**
   * Load CSS styles
   * @default true
   */
  loadStyles?: boolean;
  /**
   * Disable analytics
   * @default false
   */
  disableAnalytics?: boolean;
  /**
   * Disable cookies
   * @default false
   */
  disableCookies?: boolean;
  /**
   * When true survey submissions will not be saved
   */
  previewMode?: boolean;
  /**
   * Survey settings override
   */
  settings?: DeepPartial<SurveySettings>;
}

export type SurveySettings = any;

export interface SurveyCallbacks extends FrameCallbacks<FrillSurvey> {}

export type FrameCallbacks<TApp> = {
  /**
   * Fired when app is ready and announcements have loaded
   */
  onReady(app: TApp): void;
  /**
   * Fired after the app has been opened
   */
  onOpen(): void;
  /**
   * Fired after the app has been closed
   */
  onClose(): void;
  /**
   * Fired when the app is destroyed
   */
  onDestroy(): void;
  /**
   * Fired when a user logs in
   */
  onLogin(event: { user: RegisteredUser }): void;
  /**
   * Fired when a user logs out
   */
  onLogout(): void;
};
