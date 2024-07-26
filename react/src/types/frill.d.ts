declare global {
  interface Window {
    Frill: FrillContainerApi;
    Frill_Containers: Record<string, FrillContainer>;
  }
}

/**
 * Widget
 */
export interface FrillWidget {
  open(): void;
  close(): void;
  toggle(): void;
  destroy(): void;
  identify(user: WidgetGuestUser): void;
  unidentify(): void;
  updateSettings(settings: WidgetSettings, replace?: boolean): void;
  createIdea(defaultValues?: CreateIdeaDefaultValues): void;
  viewIdea(ideaSlug: string, section?: Section): void;
  viewSection(section: Section): void;
  setBadgeCount(count: number): void;
}

export interface FrillContainer {
  widgets: Record<string, FrillWidget>;
  destroy(): void;
}

export type CancelablePromise<T> = Promise<T> & { destroy(): void };

export type FrillApiInit = {
  (method: 'widget', config: WidgetConfiguration): CancelablePromise<FrillWidget>;
  (method: 'container', config: WidgetContainerConfiguration): CancelablePromise<FrillContainer>;
};

export type FrillContainerApiQueue = Record<
  string,
  { params: Parameters<FrillApiInit>; resolve(): void; reject(err: Error): void }
>;

export type FrillContainerApi = FrillApiInit & {
  q: FrillContainerApiQueue;
  containers: Record<string, FrillContainer>;
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

export interface WidgetCallbacks {
  /**
   * Fired when widget is ready and announcements have loaded
   */
  onReady?(widget: FrillWidget): void;
  /**
   * Fired after the widget has been opened
   */
  onOpen?(): void;
  /**
   * Fired after the widget has been closed
   */
  onClose?(): void;
  /**
   * Fired when the widget is destroyed
   */
  onDestroy?(): void;
  /**
   * Fired after the badge count changes
   */
  onBadgeCount?(event: { announcements: any[]; count: number }): void;
  /**
   * Fired after a boosted announcement notification has been opened
   */
  onNotificationOpen?(): void;
  /**
   * Fired after a boosted announcement notification has been closed
   */
  onNotificationClose?(): void;
  /**
   * Fired when a user logs in
   */
  onLogin?(event: { user: WidgetUser }): void;
  /**
   * Fired when a user logs out
   */
  onLogout?(): void;
}

export type WidgetSettings = any;

/**
 * A widget user identity
 */
export interface WidgetGuestUser {
  name: string;
  email: string;
  avatar?: string;
}

export interface WidgetUser {
  idx: string;
  name: string;
  email: string;
  avatar?: string;
}
