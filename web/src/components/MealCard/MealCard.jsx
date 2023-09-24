import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import RecipeInfo from "../RecipeInfo/RecipeInfo";
import "./MealCard.css";

function MealCard(props) {
  const mealItem = props.mealItem;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className="mealCard">
        <Card.Body>
          <Row className="mealCardImageContainer">
            <Col>
              <img className="mealCardImage" src="../../foodicon_temp.png" />
            </Col>
            <Col>
              <Card.Title>Recipe Name : {mealItem.recipeName}</Card.Title>
              <Card.Text>
                Date :
                {mealItem.date &&
                  mealItem.date
                    .toString()
                    .replace(" 00:00:00 GMT-0700 (Pacific Daylight Time)", "")}
                <br />
                MealTime : {mealItem.mealTime}
              </Card.Text>
              <Button variant="primary" onClick={handleShow}>
                View Recipe
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Recipe Name : {mealItem.recipeName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <RecipeInfo recipeId={mealItem.recipeId} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
export default MealCard;
