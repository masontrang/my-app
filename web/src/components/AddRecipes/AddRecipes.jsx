import NavBar from "../NavBar/NavBar";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import CuisineSelect from "../CuisineSelect/CuisineSelect";
import RecipeTypeSelect from "../RecipeTypeSelect/RecipeTypeSelect";
function AddRecipes() {
  const checkbox = false;
  console.log("checkbox", checkbox);
  return (
    <div>
      <NavBar />
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="recipeName">
                <Form.Label>Recipe Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Detroit Deep Dish Pizza"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="Cuisine Type">
                <Form.Label>Cuisine Type</Form.Label>
                <CuisineSelect />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="Cuisine Type">
                <Form.Label>Recipe Type</Form.Label>
                <RecipeTypeSelect />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Yield</Form.Label>
                <Form.Control type="text" placeholder="8 servings" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Prep Time</Form.Label>
                <Form.Control type="text" placeholder="30 min" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Cook Time</Form.Label>
                <Form.Control type="text" placeholder="15 min" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control type="text" placeholder="asd" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Directions</Form.Label>
            <Form.Control type="text" placeholder="asd" />
          </Form.Group>
          <Row>
            <Col>
              {" "}
              <Form.Group className="mb-3" controlId="recipeURL">
                <Form.Label>Recipe URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="www.recipes.com/recipes/detroit-pizza"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="imageURL">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="www.recipes.com/recipes/detroit-pizza/yummy.jpg"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Recipe Notes</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Add notes about the recipe here!"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AddRecipes;
