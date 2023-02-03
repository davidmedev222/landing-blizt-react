import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './context/theme/ThemeProvider';
import { App } from './routes/App';
import './styles/App.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
