import { useEffect } from "react";
import { Link } from "react-router-dom";

import { InputGroup, FormControl, Button } from "react-bootstrap";

const CartTableRow = (props) => {
  const {
    deleteItemFromCart,
    item,
    product,
    quantity,
    inventory,
    onChangeQuantity,
    quantities,
  } = props;

  return (
    <tr>
      <td>
        <Link to={`/catalogue/CART/${item.productId}/${item.itemId}`}>
          {item.itemId}
        </Link>
      </td>
      <td>
        <Link to={`/catalogue/CART/${item.productId}`}>{item.productId}</Link>
      </td>
      <td>
        {item.attr1} {item.attr2} {item.attr3} {item.attr4} {item.attr5}
      </td>
      <td>{inventory[item.itemId] > 0 ? "True" : "False"}</td>

      <td>
        <InputGroup size="sm" className="mb-3">
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            id={item.itemId}
            type="number"
            onChange={(e) =>
              onChangeQuantity({
                ...quantities,
                [item.itemId]: e.target.value,
              })
            }
            defaultValue={quantity[item.itemId]}
          />
        </InputGroup>
      </td>
      <td>{item.listPrice}</td>
      <td>{item.listPrice * quantity[item.itemId]}</td>
      <td>
        <Button
          className="btn btn-danger"
          size="sm"
          onClick={() => deleteItemFromCart(item.itemId)}
        >
          remove
        </Button>
      </td>
    </tr>
  );
};

export default CartTableRow;
