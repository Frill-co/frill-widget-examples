/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  interface Window {
    Frill: Frill;
    Frill_Config: FrillConfig;
  }

  declare class Frill {
    widget(config: FrillConfig): FrillWidget;
  }

  declare class FrillWidget {
    show(): void;
    hide(): void;
    destroy(): void;
  }

  interface FrillConfig {
    selector: string;
    token: string;
    position: string;
    offset: number[];
    callbacks: {
      onReady(frillWidget: FrillWidget): void;
    };
  }
}
