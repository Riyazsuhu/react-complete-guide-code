import Counter from './components/Counter'
import Auth from './components/Auth'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import { useSelector } from 'react-redux'

function App() {
  const { isAuthenticated } = useSelector(state => state.auth)
  return (
    <>
      <Header />
      {isAuthenticated ? <UserProfile/> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
