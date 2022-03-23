import { useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Col, Button } from "react-bootstrap";

import { CheckoutForm } from "../Components";

import { setShippingDetails } from "../Store/Actions/order.actions";

const ShippingDetailsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [shippingDetails, setShippingDetail] = useState({
    fName: "ABC",
    lName: "XYX",
    addr1: "901 San Antonio Road",
    addr2: "MS UCUP02-206",
    city: "Palo Alto",
    state: "CA",
    zip: "94303",
    country: "USA",
  });

  const handleInputField = (name) => (e) => {
    e.preventDefault();

    setShippingDetail({
      ...shippingDetails,
      [name]: e.target.value,
    });
  };

  const handleContinue = () => {
    dispatch(setShippingDetails.request(shippingDetails));
    navigate("/order/confirmation");
  };

  return (
    <Col className="mx-auto" md={6}>
      <CheckoutForm
        formData={shippingDetails}
        handleInputField={handleInputField}
      />

      <Col className="mx-auto mb-3" md={6}>
        <Button className="btn btn-success mx-auto" onClick={handleContinue}>
          Continue
        </Button>
      </Col>
    </Col>
  );
};

export default ShippingDetailsPage;
