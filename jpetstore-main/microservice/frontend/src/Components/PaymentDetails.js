import { Row, Col, Form } from "react-bootstrap";

const PaymentDetails = ({
  paymentDetails = {
    cardType: "",
    cardNumber: "",
    expiryDate: "",
  },
  handleInputField = () => {},
  title = "Payment Details",
  readOnly = false,
}) => {
  return (
    <div>
      <Row xs={1} md={12} className="g-2 mt-2 mb-2">
        <h3 className="text-center">{title}</h3>
        <Row className="mb-2">
          <Form.Label column="sm" lg={3}>
            Card Type
          </Form.Label>
          <Col>
            {readOnly ? (
              <Form.Control
                size="sm"
                type="text"
                value={paymentDetails.cardType}
                placeholder="Card Type"
                readOnly={readOnly}
              />
            ) : (
              <Form.Select
                size="sm"
                defaultValue="Visa"
                readOnly={readOnly}
                onChange={handleInputField("cardType")}
              >
                <option key="visa" value="Visa">
                  Visa
                </option>

                <option key="MasterCard" value="MasterCard">
                  MasterCard
                </option>

                <option key="AmericanExpress" value="AmericanExpress">
                  American Express
                </option>
              </Form.Select>
            )}
          </Col>
        </Row>
        <Row className="mb-2">
          <Form.Label column="sm" lg={3}>
            Card Number
          </Form.Label>
          <Col>
            <Form.Control
              size="sm"
              type="text"
              value={paymentDetails.cardNumber}
              onChange={handleInputField("cardNumber")}
              placeholder="Card Number"
              readOnly={readOnly}
            />
            <sup>⚠️ Use a fake number!</sup>
          </Col>
        </Row>

        <Row className="mb-2">
          <Form.Label column="sm" lg={3}>
            Expiry Date
          </Form.Label>
          <Col>
            <Form.Control
              size="sm"
              type="text"
              value={paymentDetails.expiryDate}
              onChange={handleInputField("expiryDate")}
              placeholder="Expiry Date"
              readOnly={readOnly}
            />
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default PaymentDetails;
