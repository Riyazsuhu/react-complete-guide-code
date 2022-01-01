import { Link, useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate()
  function productClickHandler(){
    navigate("/product/p1")
  }
  return (
    <section>
      <h1>Product Page</h1>
      <ul>
        <li>
          <a onClick={productClickHandler}>Book</a>
        </li>
        <li>
          <Link to="/product/p2">Shoe</Link>
        </li>
        <li>
          <Link to="/product/p3">Mobile</Link>
        </li>
      </ul>
    </section>
  );
};

export default Product;
