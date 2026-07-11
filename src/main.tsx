import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';
import { App } from './App';

if (typescaleStyles.styleSheet) {
  document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
}

const root = document.getElementById('app');

if (!root) {
  throw new Error('Root element #app not found');
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
