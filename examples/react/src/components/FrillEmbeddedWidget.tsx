import React from 'react';

const FrillEmbeddedWidget: React.FC = React.memo(() => {
  // This is where the widget will be embedded
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const widget = window.Frill('widget', {
      key: 'YOUR_WIDGET_KEY', // <-- Add Widget key here
      // Pass the element so it knows where to render the embedded widget
      container: containerRef.current!,
    });

    return () => {
      widget.destroy();
    };
  }, []);

  return <div ref={containerRef} className='frill-embedded' />;
});

export default FrillEmbeddedWidget;
