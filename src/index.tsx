import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SlashAuthProvider } from '@slashauth/slashauth-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const providerOptions = {
  walletconnect: {
    infuraId: '5f33013cac72474db85f8f603c842d92',
    bridge: 'https://bridge.walletconnect.org',
  },
  coinbasewallet: {
    appName: 'Slashauth Demo',
    infuraId: '5f33013cac72474db85f8f603c842d92',
  },
};
root.render(
  <SlashAuthProvider clientID="z8dE0YKKnTic5cFf" providers={providerOptions}>
    <App />
  </SlashAuthProvider>
);
