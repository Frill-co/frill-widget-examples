import React from 'react';

const FrillEmbeddedWidget: React.FC = React.memo(() => {
  // This is where the widget will be embedded
  const widgetRef = React.useRef<HTMLDivElement>(null);

  // See ./FrillWidget.tsx for a detailed explanation of the hook
  React.useEffect(() => {
    const widget = window.Frill('widget', {
      key: 'YOUR_WIDGET_KEY', // <-- Add Widget key here
      container: widgetRef.current!,
    });

    return () => {
      widget.destroy();
    };
  }, []);

  return <div ref={widgetRef} className='frill-embedded' />;
});

export default FrillEmbeddedWidget;
