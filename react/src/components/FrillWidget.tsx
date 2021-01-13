import React from 'react';

const FrillWidget: React.FC = () => {
  React.useEffect(() => {
    let widget: FrillWidget;

    window.Frill_Config = {
      selector: '.frill-container',
      token: '393da219-be59-47e9-8973-1828b9f0dd0d', // <-- Add Widget ID here
      position: 'fixed',
      offset: [0, 10],
      callbacks: {
        onReady(frillWidget) {
          widget = frillWidget;
        },
      },
    };

    if ('Frill' in window) {
      widget = window.Frill.widget(window.Frill_Config);
    }

    return () => {
      widget?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='frill-component'>
      <p>
        <span className='frill-container btn'>Click here to show the widget</span>
      </p>
    </div>
  );
};

export default FrillWidget;
