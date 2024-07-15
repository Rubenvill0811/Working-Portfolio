import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

function Cards() {
  const nodeIcon = "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg";
  const jsIcon = "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg";
  const mongoIcon = "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg";
  const reactIcon = "https://cdn.worldvectorlogo.com/logos/react-2.svg";
  const expressIcon =
    "https://www.etatvasoft.com/public/images/express-main-logo-hexa.svg";

  return (
    <div className="cards">
      <Card style={{ width: "18rem" }} className="card">
        <Card.Img
          variant="top"
          src={nodeIcon}
          style={{ width: "322", height: "322" }}
        />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>- 6mo</Card.Text>
        </Card.Body>

        <Card.Body></Card.Body>
      </Card>

      <Card style={{ width: "18rem" }} className="card">
        <Card.Img
          variant="top"
          src={jsIcon}
          style={{ width: "322", height: "322" }}
        />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>- 6mo</Card.Text>
        </Card.Body>

        <Card.Body></Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="card">
        <Card.Img
          variant="top"
          src={mongoIcon}
          style={{ width: "322", height: "322" }}
        />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>- 6mo</Card.Text>
        </Card.Body>

        <Card.Body></Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="card">
        <Card.Img
          variant="top"
          src={reactIcon}
          style={{ width: "322", height: "322" }}
        />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>- 6mo</Card.Text>
        </Card.Body>

        <Card.Body></Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="card">
        <Card.Img
          variant="top"
          src={expressIcon}
          style={{ width: "322", height: "322" }}
        />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>- 6mo</Card.Text>
        </Card.Body>

        <Card.Body></Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
