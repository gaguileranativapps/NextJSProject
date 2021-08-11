import React from "react";
import ReactDOM from "react-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

import PageChange from "components/PageChange/PageChange.js";

import useAuth from '../hooks/useAuth';

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";

import { useRouter } from "next/router";

import routes from "routes.js";

function Auth(props) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    document.body.classList.add("bg-default");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.remove("bg-default");
    };
  }, []);

  React.useEffect(() => {
    if (user && !isLoading) {
      router.push('/admin/dashboard');
    }
  }, [user, isLoading]);

  React.useEffect(() => {
    if (isLoading) {
      document.body.classList.add("body-page-transition");
      ReactDOM.render(
        <PageChange url={router.pathname} />,
        document.getElementById("page-transition")
      );
    } else {
      ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
      document.body.classList.remove("body-page-transition");
    }
  }, [isLoading]);

  return !user && !isLoading && (
    <>
      <div className="main-content">
        <AuthNavbar />
        <div className="header bg-gradient-info py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-light">
                    Use these awesome forms to login or create new account in
                    your project for free.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
        {/* Page content */}
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">{props.children}</Row>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
}

export default Auth;
