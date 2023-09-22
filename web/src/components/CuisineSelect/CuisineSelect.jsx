import Form from "react-bootstrap/Form";
function CuisineSelect() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Select Cuisine Type</option>
      <option value="1">American</option>
      <option value="2">Chinese</option>
      <option value="3">Japanese</option>
      <option value="4">Korean</option>
      <option value="5">Mexican</option>
      <option value="6">Thai</option>
    </Form.Select>
  );
}

export default CuisineSelect;
