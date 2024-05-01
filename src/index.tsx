import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import ThemeProvider from "./providers/ThemeContext";
import { Provider } from 'react-redux';
import store from './redux/store/store'
import { fetchCards } from './redux/slice/cardStateSlice';

store.dispatch(fetchCards());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);