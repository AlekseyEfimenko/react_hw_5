import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "../node_modules/modern-normalize/modern-normalize.css";
import './index.css';
import App from './components/App.tsx';
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
