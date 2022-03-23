import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const AccountPageForm = (props) => {
  const { formData, handleInputField, readOnly, submitHandler } = props;

  const [categories, setCategories] = useState([
    "FISH",
    "DOGS",
    "CATS",
    "BIRDS",
    "REPTILES",
  ]);

  return (
    <div>
      <Col md={6} className="mx-auto mt-4">
        <Form>
          <Row xs={1} md={12} className="g-2 mt-2 mb-2">
            <h3 className="text-center">User Information</h3>
            <Row className="mb-2">
              <Form.Label column="sm" lg={3}>
                User Id
              </Form.Label>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  name="userId"
                  value={formData.userId}
                  onChange={handleInputField("userId")}
                  placeholder="User Id"
                  readOnly={readOnly}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Form.Label column="sm" lg={3}>
                New Password
              </Form.Label>
              <Col>
                <Form.Control
                  size="sm"
                  type="password"
                  value={formData.password}
                  onChange={handleInputField("password")}
                  placeholder="New Password"
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Form.Label column="sm" lg={3}>
                Repeat password
              </Form.Label>
              <Col>
                <Form.Control
                  size="sm"
                  type="password"
                  value={formData.repeatPassword}
                  onChange={handleInputField("repeatPassword")}
                  placeholder="Repeat password"
                />
              </Col>
            </Row>
          </Row>

          <hr />

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
                  value={formData.fName}
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
                  value={formData.lName}
                  onChange={handleInputField("lName")}
                  placeholder="Last Name"
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Form.Label column="sm" lg={3}>
                Email
              </Form.Label>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  value={formData.email}
                  onChange={handleInputField("email")}
                  placeholder="Email"
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Form.Label column="sm" lg={3}>
                Phone
              </Form.Label>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  value={formData.phone}
                  onChange={handleInputField("phone")}
                  placeholder="Phone"
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
                  value={formData.addr1}
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
                  value={formData.addr2}
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
                  value={formData.city}
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
                  value={formData.state}
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
                  value={formData.zip}
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
                  value={formData.country}
                  onChange={handleInputField("country")}
                  placeholder="Country"
                />
              </Col>
            </Row>
          </Row>

          <hr />

          <Row xs={1} md={12} className="g-2 mt-2 mb-2">
            <h3 className="text-center">Profile Information</h3>
            <Row>
              <Form.Label column="sm" lg={3}>
                Language Preference
              </Form.Label>
              <Col>
                <Form.Select
                  size="sm"
                  defaultValue={formData.languagePreference}
                  onChange={handleInputField("languagePreference")}
                >
                  <option value="english">english</option>
                  <option value="japanese">japanese</option>
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <Form.Label column="sm" lg={3}>
                Favourite Category
              </Form.Label>
              <Col>
                <Form.Select
                  size="sm"
                  defaultValue={formData.favcategory}
                  onChange={handleInputField("favcategory")}
                >
                  {categories.map((category, idx) => {
                    return (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <Form.Label column="sm" lg={3}>
                Enable My List
              </Form.Label>
              <Col>
                <Form.Check
                  type="checkbox"
                  id="default-checkbox"
                  checked={formData.listOption}
                  onChange={handleInputField("listOption")}
                />
              </Col>
            </Row>
            <Row>
              <Form.Label column="sm" lg={3}>
                Enable My Banner
              </Form.Label>
              <Col>
                <Form.Check
                  type="checkbox"
                  checked={formData.bannerOption}
                  onChange={handleInputField("bannerOption")}
                  id="default-checkbox"
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <Button
                  className="btn btn-success"
                  type="submit"
                  onClick={submitHandler}
                >
                  Save Account Information
                </Button>
              </Col>
            </Row>
          </Row>
        </Form>
      </Col>
    </div>
  );
};

export default AccountPageForm;
