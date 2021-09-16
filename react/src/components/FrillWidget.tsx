import React from 'react';

const FrillWidget: React.FC = React.memo(() => {
  React.useEffect(() => {
    let widget: FrillWidget;

    const config: FrillConfig = {
      key: 'e0ceb593-2c29-48a6-9d66-78bca8008a4f', // <-- Add Widget key here
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
      window.Frill_Config = window.Frill_Config.filter((c) => c !== config);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button type="button" className="frill-container btn">
      Click here to show the Widget
    </button>
  );
});

export default FrillWidget;
