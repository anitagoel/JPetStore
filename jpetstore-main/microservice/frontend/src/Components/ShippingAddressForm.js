import { Row, Col, Form, Button } from "react-bootstrap";

const ShippingAddressForm = () => {
  const {
    cardType,
    cardNumber,
    expiryDate,
    fName,
    lName,
    addr1,
    addr2,
    city,
    state,
    zip,
    country,
  } = formData;
  return (
    <Row xs={1} md={12} className="g-2 mt-2 mb-2">
      <h3 className="text-center">Account Information</h3>
      <Row className="mb-2">
        <Form.Label column="sm" lg={3}>
          First Name
        </Form.Label>
        <Col>
          <Form.Control
            size="sm"
            type="text"
            value={fName}
            onChange={handleInputField("fName")}
            placeholder="First Name"
          />
        </Col>
      </Row>
      <Row className="mb-2">
        <Form.Label column="sm" lg={3}>
          Last Name
        </Form.Label>
        <Col>
          <Form.Control
            size="sm"
            type="text"
            value={lName}
            onChange={handleInputField("lName")}
            placeholder="Last Name"
          />
        </Col>
      </Row>

      <Row className="mb-2">
        <Form.Label column="sm" lg={3}>
          Address 1
        </Form.Label>
        <Col>
          <Form.Control
            size="sm"
            type="text"
            value={addr1}
            onChange={handleInputField("addr1")}
            placeholder="Address 1"
          />
        </Col>
      </Row>
      <Row className="mb-2">
        <Form.Label column="sm" lg={3}>
          Address 2
        </Form.Label>
        <Col>
          <Form.Control
            size="sm"
            type="text"
            value={addr2}
            onChange={handleInputField("addr2")}
            placeholder="Address 2"
          />
        </Col>
      </Row>
      <Row className="mb-2">
        <Form.Label column="sm" lg={3}>
          City
        </Form.Label>
        <Col>
          <Form.Control
            size="sm"
            type="text"
            value={city}
            onChange={handleInputField("city")}
            placeholder="City"
          />
        </Col>
      </Row>
      <Row className="mb-2">
        <Form.Label column="sm" lg={3}>
          State
        </Form.Label>
        <Col>
          <Form.Control
            size="sm"
            type="text"
            value={state}
            onChange={handleInputField("state")}
            placeholder="State"
          />
        </Col>
      </Row>
      <Row className="mb-2">
        <Form.Label column="sm" lg={3}>
          Zip
        </Form.Label>
        <Col>
          <Form.Control
            size="sm"
            type="text"
            value={zip}
            onChange={handleInputField("zip")}
            placeholder="Zip"
          />
        </Col>
      </Row>
      <Row className="mb-2">
        <Form.Label column="sm" lg={3}>
          Country
        </Form.Label>
        <Col>
          <Form.Control
            size="sm"
            type="text"
            value={country}
            onChange={handleInputField("country")}
            placeholder="Country"
          />
        </Col>
      </Row>
    </Row>
  );
};

export default ShippingAddressForm;
