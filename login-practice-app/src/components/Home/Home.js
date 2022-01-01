import {useContext} from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button'
import AuthContext from '../../store/authContext'

const Home = () => {
  const authCtxt = useContext(AuthContext)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCtxt.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
