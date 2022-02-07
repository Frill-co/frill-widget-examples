import React from 'react';

const FrillWidget: React.FC = React.memo(() => {
  // This effect will run once when the component has mounted
  React.useEffect(() => {
    // We need to keep a reference to the widget instance so we can cleanup
    // when the component unmounts
    let widget: FrillWidget;

    // Define our config. You can get the key from the Widget code snippet
    const config: FrillConfig = {
      key: 'e0ceb593-2c29-48a6-9d66-78bca8008a4f', // <-- Add Widget key here
      callbacks: {
        // This will be called when the widget is loaded
        onReady: (frillWidget) => {
          widget = frillWidget;
        },
      },
    };

    // Let's check if the Frill script has already loaded
    if ('Frill' in window) {
      // If the Frill api is already available we can create the widget now
      widget = window.Frill.widget(config);
    } else {
      // If the Frill api hasn't been loaded, we need to add our config to the list.
      // When the api loads, it will create all widgets in the Frill_Config list and dispatch the
      // config.callbacks.onReady event for each
      window.Frill_Config = window.Frill_Config || [];
      window.Frill_Config.push(config);
    }

    // Return a cleanup method so we can remove the widget when the component unmounts
    return () => {
      // Check if there is an active widget
      if (widget) {
        // If there is a widget, destroy it, this will remove all event listeners and nodes added
        // to the DOM by the widget
        widget.destroy();
      }
      // We also need to remove our config from the list so it doesn't get initialised.
      // This would only happen if the had component mounted/unmounted before the Frill api
      // had a chance to load.
      if (window.Frill_Config) {
        window.Frill_Config = window.Frill_Config.filter((c) => c !== config);
      }
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
