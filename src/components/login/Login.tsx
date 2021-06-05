import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const Login: React.FC = () => {
  return (
    <Container fluid={true} className={'login'}>
      <Row>
        <Col xs={12} className={'text-center mb-2 login-text '} >
          LOGO
        </Col>
        <Col>
          <Form>
            <Form.Group controlId="formUserName" className={'mb-4'}>
              <Form.Label>Username</Form.Label>
              <Form.Control required type="text" placeholder=""/>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control required type="password" placeholder=""/>
            </Form.Group>
            <Button type={'submit'} className={'mt-3 float-end login-button'}>Login</Button>
          </Form>
        </Col>
        <Col xs={12} className={'text-center mt-4 fp-text'} >
          Forget Password
        </Col>
      </Row>

    </Container>
  );
};

export default Login;