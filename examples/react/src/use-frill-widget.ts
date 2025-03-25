import React from 'react';
import type { FrillWidget } from './frill-types';

export function useFrillWidget() {
  const widgetRef = React.useRef<FrillWidget>(null);

  React.useEffect(() => {
    // This is an async function, but we're not going to use the resolved result directly,
    // instead we assign the promise to a variable so we can destroy it in the hook cleanup.
    const widget = window.Frill('widget', {
      // Put your Widget key here
      key: '639e39ad-86e4-459b-b8fd-867369329c59',
      callbacks: {
        onReady(widget) {
          widgetRef.current = widget;

          // You can subscribe to widget events like so, don't forget to unsubscribe though.
          // const unsubscribe = widgetRef.current.events.on('badgeCount', console.log)
        },
      },
    });

    return () => {
      widgetRef.current = null;
      // Calling destroy will also remove the widget from the DOM
      widget.destroy();
    };
  }, []);

  return widgetRef;
}
