import ReactDOM from 'react-dom/client';
import { useContainer, useWidget } from '@frillco/script/react';

// Put your keys here (find them in your Frill dashboard).
const CONTAINER_KEY = 'a809b4ac-5976-4444-8684-15f7a3a20b4c';
const WIDGET_KEY = '639e39ad-86e4-459b-b8fd-867369329c59';

const rootNode = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootNode);

root.render(<App />);

function App() {
  // Loads the widgets, surveys and boosted announcements configured in your
  // Frill dashboard. Optionally identify the current user, e.g.
  // useContainer({ key: CONTAINER_KEY, user: { email, name } });
  useContainer({ key: CONTAINER_KEY });

  // A controllable widget instance — `null` until it's ready, then re-renders.
  const widget = useWidget({ key: WIDGET_KEY });

  return (
    <div className='app'>
      <p>React & Frill are up and running!</p>
      <button type='button' onClick={() => widget?.open()}>
        Open the Frill widget
      </button>
      <button
        type='button'
        onClick={() => {
          widget?.viewSection('ideas');
          widget?.open();
        }}
      >
        View Ideas
      </button>
      <button
        type='button'
        onClick={() => {
          widget?.viewSection('announcements');
          widget?.open();
        }}
      >
        View Announcements
      </button>
      <button
        type='button'
        onClick={() => {
          widget?.viewSection('roadmap');
          widget?.open();
        }}
      >
        View Roadmap
      </button>
    </div>
  );
}
