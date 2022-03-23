import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

import { Col } from "react-bootstrap";

import { ProductTable } from "../Components";

import {
  setCartItem,
  getInventoryByItemId,
} from "../Store/Actions/cart.actions";
import { getItemsByProductId } from "../Store/Actions/catalogue.actions";

const ProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();

  useEffect(() => {
    dispatch(getItemsByProductId.request(productId));
  }, []);

  const { items } = useSelector((state) => state.catalogue);

  const addItem = (product) => {
    dispatch(setCartItem.request(product));
    dispatch(getInventoryByItemId.request(product.itemId));
    navigate("/cart");
  };

  // const [products, setProducts] = useState([
  //   {
  //     itemId: "i1",
  //     productId: "abc123",
  //     description: "Amazon Parrot",
  //     listPrice: "123",
  //     quantity: "1",
  //   },
  // ]);
  return (
    <div>
      <h1 className="text-center">{productId}</h1>
      <Col md={6} className="mx-auto">
        <ProductTable products={items} addItem={addItem} />
      </Col>
    </div>
  );
};

export default ProductPage;
