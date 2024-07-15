import React from "react";
import Button from "react-bootstrap/Button";

function PageNotFound() {
  return (
    <div className="bg-light p-5 rounded-lg m-3">
      <h1 className="display-4">404 Page not found</h1>
      <p className="lead">
        It looks like the page that you're looking for either doesn't exist or
        has been removed.
      </p>
      <hr className="my-4" />
      <p>
        Click
        <Button variant="primary">me</Button>
        to go back!
      </p>
    </div>
  );
}

export default PageNotFound;
