import NavBar from "../NavBar/NavBar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import allRecipes from "../../RecipeData";
import RecipeCard from "../RecipeCard/RecipeCard";

function ViewRecipes() {
  const recipes = allRecipes;
  return (
    <div>
      <NavBar />
      <Container>
        <Row xs={1} md={2} className="g-4">
          {recipes.map((recipe, index) => {
            return (
              <Col key={index}>
                <RecipeCard recipe={recipe} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default ViewRecipes;
