import React from "react";
import { Alert } from "react-bootstrap";

const AlertComp = ({ variant, msg }) => {
  return (
    <div>
      <Alert variant={variant}>{msg}</Alert>
    </div>
  );
};

export default AlertComp;
