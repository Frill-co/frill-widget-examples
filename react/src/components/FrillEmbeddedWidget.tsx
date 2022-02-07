import React from 'react';

const FrillEmbeddedWidget: React.FC = React.memo(() => {
  // This is where the widget will be embedded
  const widgetRef = React.useRef<HTMLDivElement>(null);

  // See ./FrillWidget.tsx for a detailed explanation of the hook
  React.useEffect(() => {
    let widget: FrillWidget;

    const config: FrillConfig = {
      key: '11153d6c-cf12-4e26-ae28-4cda8848abf7', // <-- Add Widget key here
      container: widgetRef.current!,
      callbacks: {
        onReady: (frillWidget) => {
          widget = frillWidget;
        },
      },
    };

    window.Frill_Config = window.Frill_Config || [];
    window.Frill_Config.push(config);

    if ('Frill' in window) {
      widget = window.Frill.widget(config);
    }

    return () => {
      widget?.destroy();
      if (window.Frill_Config) {
        window.Frill_Config = window.Frill_Config.filter((c) => c !== config);
      }
    };
  }, []);

  return <div ref={widgetRef} className='frill-embedded' />;
});

export default FrillEmbeddedWidget;
