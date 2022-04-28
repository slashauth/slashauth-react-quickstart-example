import { useSlashAuth } from "@slashauth/slashauth-react";

export const LogoutButton = () => {
  const { logout } = useSlashAuth();

  return <button onClick={() => logout()}>Logout</button>;
};