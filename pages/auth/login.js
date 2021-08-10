import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Auth from "layouts/Auth.js";
import { SignInUserForm, SignInUserFormSchema } from "../../forms/SignInUserForm";
import userFirebaseAuth from "../../hooks/useFirebaseAuth";

import Firebase from '../../firebase';

import { Formik } from 'formik';

function Login() {
  const { 
    signInWithEmailAndPassword,
    setPersistence,
  } = userFirebaseAuth();

  const handleSubmit = async (userData) => {
    try {
      if (userData.rememberMe) {
        await setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
      } else {
        await setPersistence(Firebase.auth.Auth.Persistence.SESSION)
      }
      await signInWithEmailAndPassword(userData.email, userData.password);
    } catch(e) {
      console.error(e);
    }
  }

  return (
    <Col lg="5" md="7">
      <Card className="bg-secondary shadow border-0">
        <CardHeader className="bg-transparent pb-5">
          <div className="text-muted text-center mt-2 mb-3">
            <small>Sign in with</small>
          </div>
          <div className="btn-wrapper text-center">
            <Button
              className="btn-neutral btn-icon"
              color="default"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <span className="btn-inner--icon">
                <img
                  alt="..."
                  src={require("assets/img/icons/common/github.svg")}
                />
              </span>
              <span className="btn-inner--text">Github</span>
            </Button>
            <Button
              className="btn-neutral btn-icon"
              color="default"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <span className="btn-inner--icon">
                <img
                  alt="..."
                  src={require("assets/img/icons/common/google.svg")}
                />
              </span>
              <span className="btn-inner--text">Google</span>
            </Button>
          </div>
        </CardHeader>
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <small>Or sign in with credentials</small>
          </div>
          <Formik 
            component={SignInUserForm}
            validationSchema={SignInUserFormSchema}
            initialValues={{
              email: '',
              password: '',
              rememberMe: false,
            }}
            onSubmit={handleSubmit}
          />
        </CardBody>
      </Card>
      <Row className="mt-3">
        <Col xs="6">
          <a
            className="text-light"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            <small>Forgot password?</small>
          </a>
        </Col>
        <Col className="text-right" xs="6">
          <a
            className="text-light"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            <small>Create new account</small>
          </a>
        </Col>
      </Row>
    </Col>
  );
}

Login.layout = Auth;

export default Login;
