import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";

// import { setCartItem } from "../Store/Actions/cart.actions";

const ProductTable = (props) => {
  const { products, addItem } = props;

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Item ID</th>
          <th>Product ID</th>
          <th>Description</th>
          <th>List Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, idx) => {
          return (
            <tr key={idx}>
              <td>
                <Link className="text-dark" to={product.itemId}>
                  {product.itemId}
                </Link>
              </td>
              <td>{product.productId}</td>
              <td>
                {product.description == undefined
                  ? product.attr1
                  : product.description}
              </td>
              <td>{product.listPrice}</td>
              <td>
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => addItem(product)}
                >
                  Add to cart
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ProductTable;
