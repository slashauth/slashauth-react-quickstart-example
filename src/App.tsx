import { useSlashAuth } from '@slashauth/slashauth-react';
import { LoginStatus } from './LoginStatus';
import { LoginButton } from './LoginButton';
import { LogoutButton } from './LogoutButton';


function App() {
  console.log("Are we running this?");
  console.log(useSlashAuth)
  const { isAuthenticated } = useSlashAuth();

  return (
    <div>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <LoginStatus />
    </div>
  );
}

export default App;
