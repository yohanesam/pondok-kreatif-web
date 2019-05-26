import React from 'react';
import ReactDOM from 'react-dom';

// Service worker
import * as serviceWorker from './common/serviceWorker';

// App
import App from './App.jsx';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
