import { useEffect } from "react";
import { useParams } from "react-router";

import { Col } from "react-bootstrap";

import { CatalogueTable } from "../Components/index";
import { useDispatch, useSelector } from "react-redux";
import { getProductBySearchKeyword } from "../Store/Actions/search.actions";

const SearchResultPage = () => {
  const { keywords } = useParams();
  const search = useSelector((state) => state.search);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductBySearchKeyword.request(keywords));
    console.log("search: " + search.keyword);
  }, []);

  return (
    <Col className="mx-auto" md={8}>
      <h1>{keywords}</h1>
      <CatalogueTable items={search.products.data} descFlag={true} />
    </Col>
  );
};

export default SearchResultPage;
