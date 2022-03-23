import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { Table, Col, Button } from "react-bootstrap";

import {
  removeItemFromCart,
  updateQuantityOfItem,
} from "../Store/Actions/cart.actions";

import { setLineItems } from "../Store/Actions/order.actions";

import { CartTableRow } from "../Components";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useSelector((state) => state.auth.cred);
  const { products, quantity, inventory } = useSelector((state) => state.cart);
  const items = useSelector((state) => state.cart.items);

  const [quantities, setQuantities] = useState(quantity);

  const [cartTotal, setCartTotal] = useState(0);

  const calculateCartTotal = () => {
    const itemKeys = Object.keys(items);
    let total = 0;
    for (let i = 0; i < itemKeys.length; i = i + 1) {
      total = total + quantity[itemKeys[i]] * items[itemKeys[i]].listPrice;
    }
    setCartTotal(total);
  };

  const deleteItemFromCart = (itemId) => {
    setQuantities({
      ...quantities,
      [itemId]: undefined,
    });
    dispatch(removeItemFromCart.request(itemId));
  };

  const handleUpdateCart = () => {
    console.log("cart updated");
    dispatch(updateQuantityOfItem.request(quantities));
    calculateCartTotal();
  };

  // TODO:
  const handleCheckout = () => {
    //create lineitem array and add that to redux store

    if (username === undefined) {
      alert("You Need to Signin before checkout.");
    } else {
      const lineItems = [];
      const itemKeys = Object.keys(items);

      for (let i = 0; i < itemKeys.length; i = i + 1) {
        const lineItem = {
          orderId: 100,
          linenum: i,
          itemId: items[itemKeys[i]].itemId,
          quantity: quantity[itemKeys[i]],
          unitprice: items[itemKeys[i]].unitCost,
        };
        lineItems.push(lineItem);
      }

      dispatch(setLineItems.request(lineItems));
      navigate("/order/checkout");
    }
  };

  useEffect(() => {
    calculateCartTotal();
  }, [items, quantity]);

  return (
    <div>
      <h2 className="text-center">Shopping Cart </h2>

      <Col md={8} className="mx-auto">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Product ID</th>
              <th>Description</th>
              <th>In Stock?</th>
              <th>Quantity</th>
              <th>List Price (in $)</th>
              <th>Total Cost (in $)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(items).map(([itemId, item], index) => {
              return (
                <CartTableRow
                  key={itemId}
                  item={item}
                  inventory={inventory}
                  quantity={quantity}
                  quantities={quantities}
                  onChangeQuantity={setQuantities}
                  deleteItemFromCart={deleteItemFromCart}
                />
              );
            })}

            <tr>
              <td colSpan="2">Sub-Total: </td>
              <td>{cartTotal}</td>
              <td colSpan="5">
                <Button
                  className="btn btn-success"
                  size="sm"
                  onClick={handleUpdateCart}
                >
                  update cart
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
        {items && Object.keys(items).length > 0 && (
          <Button
            className="btn btn-success mb-4 mt-4"
            size="sm"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </Button>
        )}
      </Col>
    </div>
  );
};

export default CartPage;
