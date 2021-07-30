import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useHistory, useLocation} from 'react-router-dom';
import {toast} from "react-toastify";
import Select from "react-select/base";


const Login: React.FC = () => {

  const history = useHistory();
  const location = useLocation();

  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [validated, setValidated] = useState<boolean>(false);

  const handleOnSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (username && password) {
      if (username === 'admin' && password === 'admin') {
        history.push('/dashboard');
      } else {
        toast.warn('Username or Password is not valid',
          {position: toast.POSITION.TOP_CENTER, autoClose: 3000}
        );
        setUsername(null);
        setPassword(null);
      }
    }

    setValidated(true);
  }

  const handleUsernameOnChange = (username: string | null) => {
    if (username) {
      setUsername(username.trimLeft());
    } else {
      setUsername(null)
    }
  }

  const handlePasswordOnChange = (password: string | null) => {
    if (password) {
      setPassword(password);
    }
  }


  const renderLoginForm = () => {
    return (
      <Form noValidate validated={validated} onSubmit={handleOnSubmit}>
        {location.pathname === '/register' &&
        <Form.Group controlId='formUserType' className='pb-2'>
          <Form.Label>User Type</Form.Label>
          <Select required placeholder='select user type' isClearable={true}
                  options={userTypeOptions}/>
          <small className='validation'>
            {validated ? 'Select user type.' : ''}
          </small>
        </Form.Group>}
        <Form.Group controlId="formUserName" className={'mb-4'}>
          <Form.Label>Username</Form.Label>
          <Form.Control required type="text" placeholder="" value={username ? username : ''}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleUsernameOnChange(e.target.value)}/>
          <Form.Control.Feedback>Valid username</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Username cannot be empty!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" placeholder="" value={password ? password : ''}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handlePasswordOnChange(e.target.value)}/>
          <Form.Control.Feedback>Valid password</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Password cannot be empty!</Form.Control.Feedback>
        </Form.Group>
        <Button variant={'login-button'} type={'submit'} className={'mt-3 float-right'}>
          {location.pathname === '/register' ? 'Register ' : 'Login '}
        </Button>
      </Form>
    );
  }

  return (
    <Container fluid={true} className={'login'}>
      <Row>
        <Col xs={12} className={'text-center mb-2 login-text'}>
          LOGO
        </Col>
        <Col>
          {renderLoginForm()}
        </Col>
        <Col xs={12} className={'text-center mt-4 fp-text'}>
          Forget Password
        </Col>
      </Row>
    </Container>
  );
};

const userTypeOptions = [
  { value: 0, label: 'Admin' },
  { value: 1, label: 'Customer' }
  ];

export default Login;