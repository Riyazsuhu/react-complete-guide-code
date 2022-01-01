import { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/authContext';

function App() {
  const authCtxt = useContext(AuthContext)
  return (
    <>
      <MainHeader/>
      <main>
        {!authCtxt.isLoggedIn && <Login/>}
        {authCtxt.isLoggedIn && <Home/>}
      </main>
    </>
  )
}

export default App;
