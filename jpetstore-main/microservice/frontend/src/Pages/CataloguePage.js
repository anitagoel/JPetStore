import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

import { Col } from "react-bootstrap";

import { CatalogueTable } from "../Components";

import { getProductByCategory } from "../Store/Actions/catalogue.actions";

const CataloguePage = () => {
  const params = useParams();
  const { id } = params;
  console.log("id: " + id);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("id: " + id);
    dispatch(getProductByCategory.request(id));
    return () => {
      console.log("inside return : id: " + id);
    };
  }, [params]);

  const items = useSelector((state) => state.catalogue.products);
  // const [items, setItems] = useState([
  //   {
  //     id: "abc123",
  //     name: "Amazon Parrot",
  //   },
  // ]);
  return (
    <div>
      <h1 className="text-center">{id}</h1>
      <Col md={4} className="mx-auto">
        <CatalogueTable items={items} />
      </Col>
    </div>
  );
};

export default CataloguePage;
