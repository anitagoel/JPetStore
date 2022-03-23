import { Link } from "react-router-dom";

import { Table } from "react-bootstrap";

const LineItemTable = ({ itemList = [], descFlag = true }) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Item ID</th>
          {descFlag === true && <th>Description</th>}

          <th>Quantity</th>
          <th>Price</th>
          <th>Total Cost</th>
        </tr>
      </thead>
      <tbody>
        {itemList.map((item, idx) => {
          return (
            <tr key={idx}>
              <td>
                <Link to={item.itemId} className="text-dark">
                  {item.itemId}
                </Link>
              </td>

              {descFlag === true && <td>{item.desc}</td>}
              <td>{item.quantity}</td>
              <td>{item.price === undefined ? item.unitprice : item.price}</td>
              <td>
                {item.price === undefined
                  ? item.unitprice * item.quantity
                  : item.quantity * item.price}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default LineItemTable;
