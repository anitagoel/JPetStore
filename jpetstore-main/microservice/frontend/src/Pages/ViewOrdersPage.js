import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Col } from "react-bootstrap";
import { ViewOrderTable } from "../Components";

import { getOrdersByUserId } from "../Store/Actions/order.actions";

const ViewOrdersPage = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.auth.cred);

  const { orders } = useSelector((state) => state.order);

  useEffect(() => {
    if (username !== undefined || username !== null) {
      dispatch(getOrdersByUserId.request(username));
    }
  }, [username]);

  if (username == undefined || username == null) {
    return (
      <h1 className="text-center mt-4 mb-4">
        Please login to view your orders.
      </h1>
    );
  } else {
    return (
      <Col md="6" className="mx-auto">
        {orders && orders.length < 1 ? (
          <h3 className="text-center mt-4 mb-4">
            No Orders placed by this user
          </h3>
        ) : (
          <ViewOrderTable orders={orders} />
        )}
      </Col>
    );
  }
};

export default ViewOrdersPage;
