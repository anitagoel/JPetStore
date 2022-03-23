import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";

import {
  setPaymentDetails,
  setBillingDetails,
  setShippingDetails,
} from "../Store/Actions/order.actions";

import { CheckoutForm, PaymentDetails } from "../Components";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const [paymentDetails, setPaymentDetail] = useState({
    cardType: "Visa",
    cardNumber: "999 9999 9999 9999",
    expiryDate: "12/03",
  });

  const [billingDetails, setBillingDetail] = useState({
    fName: "ABC",
    lName: "XYX",
    addr1: "901 San Antonio Road",
    addr2: "MS UCUP02-206",
    city: "Palo Alto",
    state: "CA",
    zip: "94303",
    country: "USA",
  });

  const handlePaymentDetailsField = (name) => (e) => {
    e.preventDefault();

    setPaymentDetail({
      ...paymentDetails,
      [name]: e.target.value,
    });
  };

  const handleInputField = (name) => (e) => {
    e.preventDefault();

    setBillingDetail({
      ...billingDetails,
      [name]: e.target.value,
    });
  };

  const handleContinue = () => {
    // dispatch action to setPaymentDetails
    dispatch(setPaymentDetails.request(paymentDetails));
    if (isChecked) {
      //setBillDetails only
      dispatch(setBillingDetails.request(billingDetails));
      //redirect to shipping details page
      navigate("/order/checkout/more");
    } else {
      //setBillDetails for both billing and shipping
      dispatch(setBillingDetails.request(billingDetails));
      dispatch(setShippingDetails.request(billingDetails));

      //redirect to confirm order page
      navigate("/order/confirmation");
    }
  };

  return (
    <Col className="mx-auto" md={6}>
      <PaymentDetails
        paymentDetails={paymentDetails}
        formData={paymentDetails}
        handleInputField={handlePaymentDetailsField}
        title="Payment details"
      />

      <CheckoutForm
        formData={billingDetails}
        handleInputField={handleInputField}
      />

      <Row className="mb-2">
        <Col md={1} className="row">
          <Form.Check
            type="checkbox"
            id="default-checkbox"
            onChange={() => setIsChecked(!isChecked)}
          />
        </Col>
        <Col md={5} className="mt-0">
          <Form.Label>Ship to different address...</Form.Label>
        </Col>
      </Row>

      <Col className="mx-auto mb-3" md={6}>
        <Button className="btn btn-success mx-auto" onClick={handleContinue}>
          Continue
        </Button>
      </Col>
    </Col>
  );
};

export default CheckoutPage;
