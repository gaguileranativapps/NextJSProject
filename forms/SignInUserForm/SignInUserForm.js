import { Form, Field, ErrorMessage } from 'formik';

import {
  Button,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

export default function SignInUserForm(props) {
  return (
    <Form>
      <FormGroup className="mb-3">
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-email-83" />
            </InputGroupText>
          </InputGroupAddon>
          <Field 
            name="email"
            placeholder="Email"
            type="email"
            as={Input}
          />
          <ErrorMessage name="email" />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-lock-circle-open" />
            </InputGroupText>
          </InputGroupAddon>
          <Field 
            name="password"
            placeholder="Password"
            type="password"
            as={Input}
          />
          <ErrorMessage name="password" />
        </InputGroup>
      </FormGroup>
      <div className="custom-control custom-control-alternative custom-checkbox">
        <input
          className="custom-control-input"
          id=" customCheckLogin"
          type="checkbox"
        />
        <label
          className="custom-control-label"
          htmlFor=" customCheckLogin"
        >
          <span className="text-muted">Remember me</span>
        </label>
      </div>
      <div className="text-center">
        <Button className="my-4" color="primary" type="submit">
          Sign in
        </Button>
      </div>
    </Form>
  );
}