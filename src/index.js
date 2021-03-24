import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './context'
import { BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <AppProvider>
      <App />
    </AppProvider>
  </Router>
  ,
  document.getElementById('root')
);

reportWebVitals();
