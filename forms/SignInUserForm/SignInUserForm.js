import { Form, Field, ErrorMessage } from 'formik';

import {
  Button,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
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
        </InputGroup>
        <ErrorMessage name="email" />
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
        </InputGroup>
        <ErrorMessage name="password" />
      </FormGroup>
      <div className="custom-control custom-control-alternative custom-checkbox">
        <Field
          name="rememberMe"
          type="checkbox"
          className="custom-control-input"
          id="customCheckLogin"
        />
        <label
          className="custom-control-label"
          htmlFor="customCheckLogin"
        >
          <span className="text-muted">Remember me</span>
        </label>
      </div>
      <div className="text-center">
        <Button className="my-4" color="primary" type="submit" disabled={props.isSubmitting}>
          Sign in
        </Button>
      </div>
    </Form>
  );
}