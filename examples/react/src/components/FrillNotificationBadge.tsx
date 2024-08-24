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
    const widget = window.Frill('widget', {
      key: 'YOUR_WIDGET_KEY', // <-- Add Widget key here
      callbacks: {
        onReady(widget) {
          widgetRef.current = widget;
        },
        onBadgeCount({ announcements, count }) {
          setCount(count);
          // The event also includes the unread announcements. Each object in the list includes
          // the announcement idx, slug & published_at properties.
          console.log(announcements);
        },
      },
    });

    return () => {
      widget.destroy();
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
