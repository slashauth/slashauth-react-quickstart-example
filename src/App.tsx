import { useEffect, useMemo, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import './App.css';
import { SlashAuthProvider, useSlashAuth } from '@navvi/slashauth-react';


function App() {
  return (
    <SlashAuthProvider domain="https://api.slashauth.xyz" clientID="z8dE0YKKnTic5cFf">
      <div className="App">
        <Toaster position="top-center" />
        <Content />
      </div>
    </SlashAuthProvider>
  );
}

function Content() {
  const [accessToken, setAccessToken] = useState('');

  const {
    connectedWallet,
    isAuthenticated,
    isLoading,
    error,
    connect,
    checkSession,
    initialized,
    getAccessTokenSilently,
  } = useSlashAuth();

  useEffect(() => {
    connect().then(() => {
      checkSession();
    });
  }, [connect, checkSession]);

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then((at) => {
        setAccessToken(at);
      });
    } else {
      setAccessToken('');
    }
  }, [getAccessTokenSilently, isAuthenticated]);

  useEffect(() => {
    if (error) {
      toast.error('Error logging in. Check the console for more information', {
        duration: 3000,
        id: 'login-error',
      });
      console.error(error);
    }
  }, [error]);

  let contents: JSX.Element | null = null;
  if (isLoading || !initialized) {
    contents = <span>'Loading...'</span>;
  }

  if (contents) {
    return (
      <div className="App-header">
        {contents}
      </div>
    );
  }

  return (
    <div className="App-header">
      <AccountButton />
      <div className="grid-content">
        <span className="label grid-elem ">Is Wallet Connected?</span>
        <span className="grid-elem">{connectedWallet ? 'Yes' : 'No'}</span>
        <span className="label grid-elem ">Wallet address</span>
        <span className="grid-elem">{connectedWallet}</span>
        <span className="label grid-elem ">Is Logged In?</span>
        <span className="grid-elem">{isAuthenticated ? 'Yes' : 'No'}</span>
        <span className="label grid-elem ">Access Token</span>
        <span className="grid-elem access-token">{isAuthenticated ? accessToken : ''}</span>
      </div>
    </div>
  );
}

export const AccountButton = () => {
  const { loginNoRedirectNoPopup, isLoading, isLoggingIn, isAuthenticated, logout } = useSlashAuth();

  const contents = useMemo(() => {
    if (isAuthenticated) {
      return <button className="login-button" onClick={() => logout()}>Logout</button>;
    }

    if (isLoading) {
      return <span>Loading...</span>;
    }

    if (isLoggingIn) {
      return (
        <div className="flex flex-col items-center justify-center">
          <p className="my-4 text-xl font-bold text-purple-700">
            Waiting for signed wallet transaction. Check your web3 wallet (e.g.
            metamask)
          </p>
          <span>Loading...</span>
        </div>
      );
    }

    const activate = async () => {
      await loginNoRedirectNoPopup();
    };

    return <button className="login-button" onClick={activate}>Login With Wallet</button>;
  }, [isAuthenticated, isLoading, isLoggingIn, loginNoRedirectNoPopup, logout]);

  return <div className="flex items-center justify-start">{contents}</div>;
};


export default App;
