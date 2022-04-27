import { useSlashAuth } from "@navvi/slashauth-react";

export const LogoutButton = () => {
  const { logout } = useSlashAuth();

  return <button onClick={() => logout()}>Logout</button>;
};