/**
 * NOTE: These types are only partially defined, there are more options available.
 * Please see other examples for what's available, or reach out if you need more refined types.
 */

declare global {
  interface Window {
    Frill(method: 'widget', config: FrillWidgetConfig): CancelablePromise<FrillWidget>;
  }
}

export interface FrillWidget {
  open(): void;
  close(): void;
  destroy(): void;
  viewSection(section: 'ideas' | 'roadmap' | 'announcements'): void;
  events: {
    on<K extends keyof FrillWidgetEvents>(
      event: K,
      callback: (payload: FrillWidgetEvents[K]) => any
    ): Unsubscribe;
  };
}

interface FrillWidgetEvents {
  ready: void;
  open: void;
  close: void;
  badgeCount: { announcements: Object[]; count: number };
}

type Unsubscribe = () => {};

interface FrillWidgetConfig {
  key: string;
  callbacks?: { onReady?(widget: FrillWidget): void };
}

type CancelablePromise<T> = Promise<T> & { destroy(): void };
