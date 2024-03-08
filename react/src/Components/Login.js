import React from 'react';
import './Login.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        try {
            const res = await axios.post('http://localhost:5000/login', {
                email: values.email,
                password: values.password,
            });

            if (res.data.success === true) {
                localStorage.setItem('isLoggedIn', true);
                localStorage.setItem('token', res.data.token);
                navigate('/home');
                toast.success('Login Successfully!', {
                    position: 'top-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                });
            } else {
                toast.error('Wrong credentials entered.', {
                    position: 'top-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                });
            }
        } catch (error) {
            if (error.response) {
                // Handle error
            }
        }
    };

    // login button

    const handleSingupClick = () => {
        navigate('/');
    };




    return (

        <div className="login-container">
            <div className="login-background-image"></div>

            <Container className="login-form-container">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h2>Login</h2>
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            validationSchema={LoginSchema}
                            onSubmit={handleSubmit}
                        >
                            <Form className='input'>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        
                                    </label>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        
                                    </label>
                                    <Field
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Password"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>

                                {<div style={{ marginTop: '15px' }}></div>}
                                <p>Don't have an account ?</p>
                                <Button variant="primary" onClick={handleSingupClick}>
                                    Singup
                                </Button>


                            </Form>
                        </Formik>
                    </Col>
                </Row>
                <ToastContainer />
            </Container>
        </div>
    );
};

export default Login;
