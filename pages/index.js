import React, { Component } from "react";
import Router from "next/router";

import useAuth from "../hooks/useAuth";

export default function Index() {
  const { user } = useAuth();

  React.useEffect(() => {
    if (user) {
      Router.push("/admin/dashboard");
    } else {
      Router.push("/auth/login");
    }
  });

  return <div />;
}
