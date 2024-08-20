import React from 'react';

const FrillWidget: React.FC = React.memo(() => {
  // This effect will run once when the component has mounted
  React.useEffect(() => {
    const widget = window.Frill('widget', {
      key: 'YOUR_WIDGET_KEY', // <-- Add Widget key here
    });

    return () => {
      widget.destroy();
    };
  }, []);

  // We are going to render a button that will be used to open the widget. This is because
  // the example widget is using a "CSS selector" for the "Launcher".
  // If your widget does not use this launcher, you can return null.
  return (
    <button type='button' className='frill-container btn'>
      Click here to show the Widget
    </button>
  );
});

export default FrillWidget;
