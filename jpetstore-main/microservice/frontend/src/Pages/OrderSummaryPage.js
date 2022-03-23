import { useState } from "react";
import { CheckoutForm, LineItemTable, PaymentDetails } from "../Components";
import { Col, Alert } from "react-bootstrap";

const OrderSummaryPage = () => {
  const [billingDetails, setBillingDetails] = useState({
    cardType: "test data",
    cardNumber: "test data",
    expiryDate: "test data",
    fName: "test data",
    lName: "test data",
    addr1: "test data",
    addr2: "test data",
    city: "test data",
    state: "test data",
    zip: "test data",
    country: "test data",
  });

  return (
    <div>
      <h5 className="mb-2 mt-2"> Thank you, your order has been submitted.</h5>
      <Col md="6" className="mx-auto">
        <Alert variant="primary" className="text-dark">
          Order #12997 2021/12/12 09:20:00
        </Alert>

        <PaymentDetails
          title="Payment Details"
          formData={billingDetails}
          readOnly={true}
        />

        <CheckoutForm
          title="Billing Address"
          formData={billingDetails}
          readOnly={true}
        />

        <CheckoutForm
          title="Shipping Address"
          formData={billingDetails}
          readOnly={true}
        />

        <LineItemTable />
        <p>
          <strong>Total: $</strong>
        </p>
      </Col>
    </div>
  );
};

export default OrderSummaryPage;
