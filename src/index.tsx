import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SlashAuthProvider } from '@slashauth/slashauth-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const providerOptions = {
  walletconnect: {
    infuraId: '3fd4907115b84c7eb48e95514768a4e8',
    bridge: 'https://bridge.walletconnect.org',
  },
  coinbasewallet: {
    appName: 'Web 3 Modal Demo',
    infuraId: '3fd4907115b84c7eb48e95514768a4e8',
  },
};
root.render(
  <SlashAuthProvider clientID="z8dE0YKKnTic5cFf" providers={providerOptions}>
    <App />
  </SlashAuthProvider>
);