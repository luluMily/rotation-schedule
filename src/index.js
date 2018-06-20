import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Rotation from './rotation';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Rotation />, document.getElementById('root'));
registerServiceWorker();
