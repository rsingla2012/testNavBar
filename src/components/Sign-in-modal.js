import React, { useState } from "react";
import { Modal, Row, Col, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SignModal(props) {
  const [Email, setEmail] = useState("");
  const [Age, setAge] = useState();
  const [startDate, setDate] = useState(new Date());
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);
  const today = new Date();

  // handleChange
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // handleChange
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  // handleChange
  const handleDateChange = (e) => {
    setDate(e);
  };

  // handleChange
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Succesfully signed");
    setEmail("");
    setPassword("");
  };

  const { show, hide } = props;
  return (
    <Modal
      size="sm"
      show={show}
      onHide={hide}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <span>Email address</span>
            <input
              name="Email"
              type="email"
              size="sm"
              className="form-control"
              onChange={handleEmailChange}
              value={Email}
            />
          </Col>
          <Col xs={12} md={12}>
            <span>Age</span>
            <input
              name="Age"
              type="number"
              size="sm"
              className="form-control"
              onChange={handleAgeChange}
              value={Age}
            />
          </Col>
          <Col xs={12} md={12}>
            <span>Subscribe on </span>
            <DatePicker
              dateFormat="yyyy/MM/dd"
              selected={startDate}
              onChange={handleDateChange}
              minDate={today}
            />
          </Col>

          <Col xs={12} md={12}>
            <span style={{ marginRight: "160px" }}>Password</span>
            <span
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
            <input
              name="Password"
              type={showPassword ? "text" : "password"}
              className="form-control"
              onChange={handlePasswordChange}
              value={Password}
            />
          </Col>
          <Col xs={8} md={8}>
            <input
              style={{ marginRight: "2px" }}
              type="checkbox"
              value=""
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <span style={{ marginRight: "10px" }}>Remember me </span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://google.com"
            >
              <span>Forget Password?</span>
            </a>
          </Col>
        </Row>
        <Button onClick={handleSubmit} style={{ margin: "5px", width: "100%" }}>
          {" "}
          Sign In{" "}
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default SignModal;
