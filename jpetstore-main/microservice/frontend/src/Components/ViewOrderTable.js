import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const ViewOrderTable = ({ orders = [] }) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Date</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        {orders &&
          orders.map((order, idx) => {
            return (
              <tr key={idx}>
                <td>
                  {/* redirect to order summary page */}
                  <Link
                    to={`/order/view/${order.orderId}`}
                    className="text-dark"
                  >
                    {order.orderId}
                  </Link>
                </td>
                <td>{order.orderDate}</td>
                <td>{order.totalPrice}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default ViewOrderTable;
