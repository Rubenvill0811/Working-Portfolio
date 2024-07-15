import React from "react";

export default function About() {
  return (
    <div className="bg-light w-100">
      <Container className="p-5">
        <h1 className="display-4">About me</h1>
        <p className="lead">
          This is a jumbotron that occupies the entire horizontal space of its
          parent.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
      </Container>
    </div>
  );
}
