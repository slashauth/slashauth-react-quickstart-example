import { useSlashAuth } from "@slashauth/slashauth-react-beta";

export const LogoutButton = () => {
  const { logout } = useSlashAuth();

  return <button onClick={() => logout()}>Logout</button>;
};