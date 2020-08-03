import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();

/*
This Component -> <BrowserRouter> 
wraps the history object in browsers and passes it down to the component tree.
So anywhere in the component tree we will be able to use the history object. That's
what this component does.
*/
