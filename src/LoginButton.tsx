import { useSlashAuth } from "@navvi/slashauth-react";

export const LoginButton = () => {
  const { loginNoRedirectNoPopup } = useSlashAuth();

  return <button onClick={() => loginNoRedirectNoPopup()}>Login With Wallet</button>;
};