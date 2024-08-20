import React from 'react';

class FrillWidget extends React.Component {
  // Keep a reference to the widget instance so we can cleanup when the component unmounts
  widget = null;

  // Once the component has mounted we will initialize the widget
  componentDidMount() {
    // Check we are in the browser
    if (typeof window === 'undefined') {
      return;
    }

    this.widget = window.Frill('widget', {
      key: 'YOUR_WIDGET_KEY', // <-- Add Widget key here
    });
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
  }

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
