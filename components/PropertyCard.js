import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.css";
import "./styling.css";

function PropertyCard(props) {
  const month = props.movein_date.toLocaleString("en-US", { month: "2-digit" });
  const day = props.movein_date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.movein_date.getFullYear();
  return (
    <Card style={{ width: "300px" }}>
      <Card.Img variant="top" src={props.image} className="image-size" />
      <Card.Body>
        <Card.Title>Rs. {props.rent}/month</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.bhk} BHK</ListGroup.Item>
        <ListGroup.Item>
          Move In Date: {day}-{month}-{year}
        </ListGroup.Item>
        <ListGroup.Item>City: {props.city}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default PropertyCard;
