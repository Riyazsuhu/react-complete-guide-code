import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  return (
    <section>
      <h1>Product Detatails Page</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetails;
