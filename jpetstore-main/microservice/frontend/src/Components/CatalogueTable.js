import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const CatalogueTable = (props) => {
  const { items, descFlag = false } = props;
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          {descFlag === true ? <th></th> : null}
          <th>Product ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {items &&
          items.map((item, idx) => {
            return (
              <tr key={idx}>
                {descFlag === true ? (
                  <td
                    dangerouslySetInnerHTML={{
                      __html: item.descn,
                    }}
                  />
                ) : null}
                <td>
                  <Link
                    to={`/catalogue/${item.category}/${item.productId}`}
                    className="text-dark"
                  >
                    {item.productId}
                  </Link>
                </td>
                <td>{item.name}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default CatalogueTable;
