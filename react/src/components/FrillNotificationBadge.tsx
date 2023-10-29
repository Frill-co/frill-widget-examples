import React from 'react';

const FrillNotificationBadge: React.FC = React.memo(() => {
  // Use component state to show the number of unread announcements
  const [count, setCount] = React.useState(0);
  // We need to keep a reference to the widget instance so we interact with it
  const widgetRef = React.useRef<FrillWidget>();

  function handleLinkClick() {
    // First check that there is a widget
    if (widgetRef.current) {
      // Mark all announcements as read so the notification badge won't appear again
      // until there are new announcements
      widgetRef.current.markAsRead();
    }
  }

  // This effect will run once when the component has mounted
  React.useEffect(() => {
    // Define our config. You can get the key from the Widget code snippet
    const config: FrillConfig = {
      key: 'e0ceb593-2c29-48a6-9d66-78bca8008a4f', // <-- Add Widget key here
      settings: {
        // In this example we are going to override some settings and remove the widget launcher.
        // You can skip this if your widget is already using the "None" Launcher
        launcher: { type: 'null' },
      },
      callbacks: {
        // This will be called when the widget is loaded
        onReady: (frillWidget) => {
          widgetRef.current = frillWidget;
        },
        // This function will be called whenever the notification count changes. The count
        // variable will be the number of NEW (unread) announcements.
        onBadgeCount: ({ announcements, count }) => {
          setCount(count);
          // The event also includes the unread announcements. Each object in the list includes
          // the announcement idx, slug & published_at properties.
          // console.log(announcements);
        },
      },
    };

    // Let's check if the Frill script has already loaded
    if ('Frill' in window) {
      // If the Frill api is already available we can create the widget now
      widgetRef.current = window.Frill.widget(config);
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
      if (widgetRef.current) {
        // If there is a widgetRef.current, destroy it, this will remove all event listeners and nodes added
        // to the DOM by the widget
        widgetRef.current.destroy();
      }
      // We also need to remove our config from the list so it doesn't get initialised.
      // This would only happen if the had component mounted/unmounted before the Frill api
      // had a chance to load.
      if (window.Frill_Config) {
        window.Frill_Config = window.Frill_Config.filter((c) => c !== config);
      }
    };
  }, []);

  // This is a link to view all announcements on the frill platform
  return (
    <a
      href='https://feedback.frill.co/announcements'
      className='link'
      onClick={handleLinkClick}
      target='_blank'
      rel='noopener noreferrer'
    >
      {count > 0 && <span className='Frill_Badge Frill_Badge--count'>{count}</span>}
      Open Announcements in Frill
    </a>
  );
});

export default FrillNotificationBadge;
