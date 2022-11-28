import { ThemeProvider } from 'styled-components';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { theme } from 'components/constans/theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);

