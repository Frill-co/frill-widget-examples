import React from 'react';

import FrillWidget from './components/FrillWidget';
import FrillEmbeddedWidget from './components/FrillEmbeddedWidget';
import FrillNotificationBadge from './components/FrillNotificationBadge';

import './App.css';

const App: React.FC = () => {
  const [view, setView] = React.useState('popover');

  if (view === 'popover') {
    return (
      <div>
        <h1>Popover Widget</h1>
        <button type='button' className='btn' onClick={() => setView('embed')}>
          Switch to Embed
        </button>
        <br />
        <br />
        <FrillWidget />
        <br />
        <br />
        <FrillNotificationBadge />
      </div>
    );
  }

  return (
    <div>
      <h1>Embedded Widget</h1>
      <button type='button' className='btn' onClick={() => setView('popover')}>
        Switch to Popover
      </button>
      <br />
      <br />
      <FrillEmbeddedWidget />
      <br />
      <br />
      <FrillNotificationBadge />
    </div>
  );
};

export default App;
