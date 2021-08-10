import React from 'react';

import Logo from './components/Logo';
import FrillWidget from './components/FrillWidget';

import './App.css';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <div className='App'>
      <Logo />
      <h1>Welcome to the Frill Widget Example App</h1>
      <p>
        This component contains example code showing of how to dynamically load the Frill JS file
        and create a widget when it's loaded.
      </p>
      <p>
        <button className='btn' onClick={() => setIsVisible((v) => !v)}>
          {isVisible ? 'Hide widget component' : 'Show widget component'}
        </button>
      </p>
      {isVisible && <FrillWidget />}
    </div>
  );
};

export default App;
