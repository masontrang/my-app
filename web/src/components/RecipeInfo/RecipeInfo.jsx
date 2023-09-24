import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./RecipeInfo.css";
import Image from "react-bootstrap/Image";
function RecipeInfo(props) {
  return (
    <>
      <Container className="RecipeInfo">
        {/* <Row> Recipe Id: {props.recipe.recipeId}</Row> */}
        <Image src={props.recipe.imageURL} thumbnail />
        <Row className="RecipeInfoRow">
          <Col>Cuisine Type: {props.recipe.cuisineType}</Col>
          <Col>Recipe Type: {props.recipe.recipeType}</Col>
        </Row>
        <Row className="RecipeInfoRow">
          <Col> Yield: {props.recipe.recipeYield}</Col>
          <Col> Prep Time: {props.recipe.prepTime}</Col>
          <Col> Cook Time: {props.recipe.cookTime}</Col>
        </Row>
        <Row className="RecipeInfoRow">
          Ingredients: {props.recipe.ingredients}
        </Row>
        <Row> Directions: {props.recipe.directions}</Row>

        <Row className="RecipeInfoRow">
          <Col> Recipe URL: {props.recipe.recipeURL}</Col>
        </Row>
      </Container>
    </>
  );
}
export default RecipeInfo;
