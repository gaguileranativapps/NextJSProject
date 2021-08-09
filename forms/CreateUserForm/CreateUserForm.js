import { Form, Field, ErrorMessage } from 'formik';

// reactstrap components
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

export default function CreateUserForm(props) {
  return (
    <Form>
      <FormGroup>
        <InputGroup className="input-group-alternative mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-hat-3" />
            </InputGroupText>
          </InputGroupAddon>
          <Field 
            type="text"
            name="displayName"
            as={Input}
            placeholder="Full name"
          />
        </InputGroup>
        <ErrorMessage name="displayName" />
      </FormGroup>
      <FormGroup>
        <InputGroup className="input-group-alternative mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-email-83" />
            </InputGroupText>
          </InputGroupAddon>
          <Field 
            type="email"
            name="email"
            as={Input}
            autoComplete="new-email"
            placeholder="Email"
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
            type="password"
            name="password"
            as={Input}
            autoComplete="new-password"
            placeholder="Password"
          />
        </InputGroup>
        <ErrorMessage name="password" />
      </FormGroup>
      <div className="text-muted font-italic">
        <small>
          password strength:{" "}
          <span className="text-success font-weight-700">strong</span>
        </small>
      </div>
      <Row className="my-4">
        <Col xs="12">
          <div className="custom-control custom-control-alternative custom-checkbox">
            <Field 
              className="custom-control-input"
              name="acceptedTerms"
              type="checkbox"
              id="customCheckRegister"
            />
            <label
              className="custom-control-label"
              htmlFor="customCheckRegister"
            >
              <span className="text-muted">
                I agree with the{" "}
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Privacy Policy
                </a>
              </span>
              <ErrorMessage name="acceptedTerms" component="div" />
            </label>
          </div>
        </Col>
      </Row>
      <div className="text-center">
        <Button className="mt-4" color="primary" type="submit" disabled={props.isSubmitting}>
          Create account
        </Button>
      </div>
    </Form>
  );
}