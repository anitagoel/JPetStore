import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

import { ItemCard } from "../Components";

import {
  getItemByItemId,
  getInventoryByItemId,
  getProductByProductId,
} from "../Store/Actions/catalogue.actions";

import { setCartItem } from "../Store/Actions/cart.actions";

import { getItemsByProductId } from "../Store/Actions/catalogue.actions";

const ItemPage = () => {
  const { itemId, productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { item, stock, product } = useSelector((state) => state.catalogue);

  useEffect(() => {
    dispatch(getItemByItemId.request(itemId));
    dispatch(getProductByProductId.request(productId));
    dispatch(getInventoryByItemId.request(itemId));
  }, []);

  const addItem = (product) => {
    dispatch(setCartItem.request(product));
    dispatch(getInventoryByItemId.request(product.itemId));
    navigate("/cart");
  };

  return (
    <div className="col-md-12 row">
      <ItemCard addItem={addItem} product={product} stock={stock} item={item} />
    </div>
  );
};

export default ItemPage;
