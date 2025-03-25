import ReactDOM from 'react-dom/client';
import { useFrillWidget } from './use-frill-widget';

const rootNode = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootNode);

root.render(<App />);

function App() {
  const widgetRef = useFrillWidget();

  return (
    <div className='app'>
      <p>React & Frill are up and running!</p>
      <button type='button' className='my-frill-widget'>
        Open the Frill widget
      </button>
      <button
        type='button'
        onClick={() => {
          widgetRef.current?.viewSection('ideas');
          widgetRef.current?.open();
        }}
      >
        View Ideas
      </button>
      <button
        type='button'
        onClick={() => {
          widgetRef.current?.viewSection('announcements');
          widgetRef.current?.open();
        }}
      >
        View Announcements
      </button>
      <button
        type='button'
        onClick={() => {
          widgetRef.current?.viewSection('roadmap');
          widgetRef.current?.open();
        }}
      >
        View Roadmap
      </button>
    </div>
  );
}
