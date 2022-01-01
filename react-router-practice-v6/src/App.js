import { Route, Routes, Navigate } from 'react-router-dom'

import Welcome from './pages/Welcome';
import Product from './pages/Product';
import Header from './components/Header/Header';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome />}>
            <Route path=":new-user" element={<p>Welcome new user!!</p>} />
          </Route>
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
