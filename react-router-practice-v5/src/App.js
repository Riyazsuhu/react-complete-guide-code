import { Route, Switch, Redirect } from 'react-router-dom'

import Welcome from './pages/Welcome';
import Product from './pages/Product';
import Header from './components/Header/Header';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/product" exact>
            <Product />
          </Route>
          <Route path="/product/:productId">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
