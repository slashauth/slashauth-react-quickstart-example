import { useSlashAuth } from '@slashauth/slashauth-react-beta';
import { LoginStatus } from './LoginStatus';
import { LoginButton } from './LoginButton';
import { LogoutButton } from './LogoutButton';


function App() {
  const { isAuthenticated } = useSlashAuth();

  return (
    <div>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <LoginStatus />
    </div>
  );
}

export default App;
