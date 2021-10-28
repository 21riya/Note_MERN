import React, { useState } from "react";
import MainScreen from "../../Component/MainScreen";
import { Form, Button } from "react-bootstrap";
import ErrorHandle from "../../Component/ErrorHandle";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmailData] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [message, setMessage] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        // setLoading(true);
        const { data } = await axios.post(
          "api/users/register",
          { name, email, password, pic },
          config
        );
        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        // setLoading(false);
      } catch (error) {
        setMessage(error.response.data.message);
        // setLoading(false);
      }
    }
  };

  return (
    <MainScreen title="Register">
      <div>
        {message && <ErrorHandle variant="danger">{message}</ErrorHandle>}
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmailData(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="pic">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              type="file"
              id="custom-file"
              onChange={(e) => setPic(e.target.files[0])}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </MainScreen>
  );
};

export default Register;
