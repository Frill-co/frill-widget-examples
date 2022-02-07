import React from 'react';

class FrillWidget extends React.Component {
  // Define our config. You can get the key from the Widget code snippet
  config = {
    key: 'e0ceb593-2c29-48a6-9d66-78bca8008a4f', // <-- Add Widget key here
    callbacks: {
      // This will be called once the widget is ready. We have to use this incase the
      // Frill api is not available on the window yet
      onReady: this.onWidgetReady,
    },
  };
  // We need to keep a reference to the widget instance so we can cleanup
  // when the component unmounts
  widget = null;

  // Once the component has mounted we will initialize the widget
  componentDidMount() {
    // Let's check if the Frill script has already loaded
    if ('Frill' in window) {
      // If the Frill api is already available we can create the widget now
      this.widget = window.Frill.widget(this.config);
    } else {
      // If the Frill api hasn't been loaded, we need to add our config to the list.
      // When the api loads, it will create all widgets in the Frill_Config list and dispatch the
      // config.callbacks.onReady event for each
      window.Frill_Config = window.Frill_Config || [];
      window.Frill_Config.push(this.config);
    }
  }

  // When the component unmounts we need to do some cleanup
  componentWillUnmount() {
    // Check if there is an active widget
    if (this.widget) {
      // If there is a widget, destroy it, this will remove all event listeners and nodes added
      // to the DOM by the widget
      this.widget.destroy();
      this.widget = null;
    }
    // We also need to remove our config from the list so it doesn't get initialised.
    // This would only happen if the had component mounted/unmounted before the Frill api
    // had a chance to load.
    if (window.Frill_Config) {
      window.Frill_Config = window.Frill_Config.filter((c) => c !== this.config);
    }
  }

  onWidgetReady = (frillWidget) => {
    // This will be called when the widget is loaded
    this.widget = frillWidget;
  };

  render() {
    // We are going to render a button that will be used to open the widget. This is because
    // the example widget is using a "CSS selector" for the "Launcher".
    // If your widget does not use this launcher, you can return null.
    return (
      <button type='button' className='frill-container btn'>
        Click here to show the Widget
      </button>
    );
  }
}

export default FrillWidget;
