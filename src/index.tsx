import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SlashAuthProvider } from '@navvi/slashauth-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <SlashAuthProvider clientID="z8dE0YKKnTic5cFf">
    <App />
  </SlashAuthProvider>
);