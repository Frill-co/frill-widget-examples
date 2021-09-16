import React from 'react';

const FrillWidget: React.FC = React.memo(() => {
  React.useEffect(() => {
    // We need to keep a reference to the widget instance so we can cleanup
    // when the component unmounts
    let widget: FrillWidget;

    // Define our config. You can get the key from the Widget code snippet
    const config: FrillConfig = {
      key: 'e0ceb593-2c29-48a6-9d66-78bca8008a4f', // <-- Add Widget key here
      callbacks: {
        // This will be called once the widget is ready. We have to use this incase the
        // Frill api is not available on thw window yet
        onReady: (frillWidget) => {
          widget = frillWidget;
        },
      },
    };

    // Push the config to the list so the Frill api can auto-init the widget once it's loaded.
    // When the api loads, it will create all widgets in the Frill_Config list and dispatch the
    // config.callbacks.onReady event for each
    window.Frill_Config = window.Frill_Config || [];
    window.Frill_Config.push(config);

    if ('Frill' in window) {
      // If the Frill api is already available we can create the widget
      widget = window.Frill.widget(config);
    }

    // Return a cleanup method so we can remove the widget when the component unmounts
    return () => {
      // Destroy the widget instance. This will remove all event listeners and nodes added
      // to the DOM by the widget
      widget?.destroy();
      // We also need to remove our config from the list so it doesn't get initialised.
      // This would only happen if the had component mounted/unmounted before the Frill api
      // had a chance to load.
      window.Frill_Config = window.Frill_Config.filter((c) => c !== config);
    };
  }, []);

  return (
    <button type="button" className="frill-container btn">
      Click here to show the Widget
    </button>
  );
});

export default FrillWidget;
