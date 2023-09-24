import MealTime from "../MealTime/MealTime";
import mealItems from "../../MealData";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import MealCard from "../MealCard/MealCard";
function DayMeals(props) {
  const mealItemsToday = mealItems.filter(
    (mealItem) => mealItem.date.toString() == props.today
  );

  const today = props.today;

  console.log("asdf", props.today);

  const breakfastMealItems = mealItemsToday.filter(
    (mealItem) => mealItem.mealTime === "Breakfast"
  );

  console.log("breakfastMealItems", breakfastMealItems);

  const lunchMealItems = mealItemsToday.filter(
    (mealItem) => mealItem.mealTime === "Lunch"
  );
  const dinnerMealItems = mealItemsToday.filter(
    (mealItem) => mealItem.mealTime === "Dinner"
  );
  return (
    <>
      <Row className="mealTimeRow">
        <Col>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {today &&
                  today
                    .toString()
                    .replace(" 00:00:00 GMT-0700 (Pacific Daylight Time)", "")}
              </Accordion.Header>
              <Accordion.Body>
                {mealItemsToday &&
                  mealItemsToday.map((mealItem, index) => {
                    return (
                      <Row key={index} xs={1} md={2} className="g-4">
                        <Col>
                          <MealCard mealItem={mealItem} />
                        </Col>
                      </Row>
                    );
                  })}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </>
  );
}

export default DayMeals;
