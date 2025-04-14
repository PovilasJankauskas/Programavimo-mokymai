import "./Product.css";
import Button from "../Button";

const Porduct = (props) => {
  let product = props.product;
  const data = props.data;

  const onDeleteButtonClick = () => {
    props.onDeleteAction(product.id);
  };
  return (
    <div className="main_container">
      <div className="product_container">
        <h4>{product.name}</h4>
        <p> Price: {product.price}</p>
        <p>amount: {product.amount}</p>
      </div>
      <Button title="Delete" action={onDeleteButtonClick} />
    </div>
  );
};
export default Porduct;
