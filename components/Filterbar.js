import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./styling.css";
import { Container } from "react-bootstrap";

function Filterbar(props) {
  const [inputLocation, setLocation] = useState("");
  const [inputRent, setRent] = useState("");
  const [inputDate, setDate] = useState(new Date());
  const [inputType, setType] = useState("");
  function locationHandler(event) {
    setLocation(event.target.value);
  }
  function rentHandler(event) {
    setRent(event.target.value);
  }
  function typeHandler(event) {
    setType(event.target.value);
  }
  function dateHandler(event) {
    const movein_date = new Date(event);
    setDate(movein_date);
  }
  function submitHandler(event) {
    event.preventDefault();
    const filterInput = {
      location: inputLocation,
      date: inputDate,
      rent: inputRent,
      type: inputType,
    };
    props.onSubmitFilterForm(filterInput);
  }
  return (
    <Container className="container-style">
      <Form onSubmit={submitHandler}>
        <Row className="centered">
          <Col xs lg="2">
            <Form.Select
              onChange={locationHandler}
              aria-label="Default select example"
            >
              <option>Location</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
            </Form.Select>
          </Col>
          <Col xs lg="2">
            <DatePicker selected={inputDate} onChange={dateHandler} />
          </Col>
          <Col xs lg="2">
            <Form.Select
              onChange={rentHandler}
              aria-label="Default select example"
            >
              <option>Rent price range</option>
              <option value="1">0-10,000</option>
              <option value="2">10,000-20,000</option>
              <option value="3">20,000-40,000</option>
            </Form.Select>
          </Col>
          <Col xs lg="2">
            <Form.Select
              onChange={typeHandler}
              aria-label="Default select example"
            >
              <option>Property Type</option>
              <option value="1">One BHK</option>
              <option value="2">Two BHK</option>
              <option value="3">Three BHK</option>
            </Form.Select>
          </Col>
          <Col xs lg="2">
            <Button variant="outline-success" type="submit">
              Filter Properties
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Filterbar;
