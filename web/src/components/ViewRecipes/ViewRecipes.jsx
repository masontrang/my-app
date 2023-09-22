import NavBar from "../NavBar/NavBar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import allRecipes from "../../RecipeData";
import RecipeCard from "../RecipeCard/RecipeCard";

function ViewRecipes() {
  const recipes = allRecipes;
  return (
    <div>
      <NavBar />
      <Container>
        {recipes.map((recipe) => {
          return (
            <Col>
              <RecipeCard recipe={recipe} />
            </Col>
          );
        })}
      </Container>
    </div>
  );
}

export default ViewRecipes;
