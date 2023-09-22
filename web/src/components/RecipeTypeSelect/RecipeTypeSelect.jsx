import Form from "react-bootstrap/Form";
function RecipeTypeSelect() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Select Recipe Type</option>
      <option value="1">Main Course</option>
      <option value="2">Side Dish</option>
      <option value="3">Salad</option>
      <option value="4">Soup</option>
      <option value="5">Baked Goods</option>
      <option value="6">Dessert</option>
      <option value="7">Snack</option>
      <option value="8">Drinks</option>
    </Form.Select>
  );
}

export default RecipeTypeSelect;
