/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  interface Window {
    Frill: Frill;
    Frill_Config: FrillConfig[];
  }

  class Frill {
    widget(config: FrillConfig): FrillWidget;
  }

  class FrillWidget {
    open(): void;
    close(): void;
    destroy(): void;
    markAsRead(): void;
  }

  interface FrillConfig {
    key: string;
    container?: HTMLElement;
    settings?: any;
    ssoToken?: string;
    callbacks?: {
      onReady?(frillWidget: FrillWidget): void;
      onBadgeCount?(event: { count: number }): void;
    };
  }
}
