import { useSlashAuth } from "@slashauth/slashauth-react-beta";

export const LoginButton = () => {
  const { loginNoRedirectNoPopup } = useSlashAuth();

  return <button onClick={() => loginNoRedirectNoPopup()}>Login With Wallet</button>;
};