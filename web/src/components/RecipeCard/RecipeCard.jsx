import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import RecipeInfo from "../RecipeInfo/RecipeInfo";
import Image from "react-bootstrap/Image";
import "./RecipeCard.css";

function RecipeCard(props) {
  const recipe = props.recipe;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className="recipeCard">
        <Card.Body>
          <Row className="recipeCardImageContainer">
            <Col>
              <Image className="recipeCardImage" src={recipe.imageURL} fluid />
            </Col>
            <Col>
              <Card.Title>Recipe Name : {recipe.recipeName}</Card.Title>
              <Card.Text>
                Recipe Type :{recipe.recipeType}
                <br />
                Cuisine Type : {recipe.cuisineType}
              </Card.Text>
              <Button variant="primary" onClick={handleShow}>
                View Recipe
              </Button>

              <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
              >
                <Modal.Header closeButton>
                  <Modal.Title>{recipe.recipeName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <RecipeInfo recipe={recipe} />
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
export default RecipeCard;
