import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { FeedbackProvider } from './state/FeedbackContext';
import './styles/index.css';
import { StyleProvider } from './styles';
import { DefaultStyle } from './components/DefaultStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FeedbackProvider>
      <BrowserRouter>
        <StyleProvider>
          <DefaultStyle>
            <App />
          </DefaultStyle>
        </StyleProvider>
      </BrowserRouter>
    </FeedbackProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
