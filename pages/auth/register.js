import React from "react";

import { Formik } from 'formik';
import { CreateUserForm, CreateUserFormSchema } from '../../forms/CreateUserForm';

import {
  Button,
  Col,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";

// layout for this page
import Auth from "layouts/Auth.js";

function Register() {
  const handleSubmit = async (userData) => {
    console.log(userData);
  }

  return (
    <Col lg="6" md="8">
      <Card className="bg-secondary shadow border-0">
        <CardHeader className="bg-transparent pb-5">
          <div className="text-muted text-center mt-2 mb-4">
            <small>Sign up with</small>
          </div>
          <div className="text-center">
            <Button
              className="btn-neutral btn-icon mr-4"
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
            <small>Or sign up with credentials</small>
          </div>
          <Formik 
            initialValues={{
              displayName: '',
              email: '',
              password: '',
              acceptedTerms: false,
            }}
            component={CreateUserForm}
            validationSchema={CreateUserFormSchema}
            onSubmit={handleSubmit}
          />
        </CardBody>
      </Card>
    </Col>
  );
}

Register.layout = Auth;

export default Register;
