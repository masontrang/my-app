import { useContext, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

function MealTime(props) {
  function MealItem(date, mealTime, recipeId, recipeName, recipeDescription) {
    this.date = date;
    this.mealTime = mealTime;
    this.recipeId = recipeId;
    this.recipeName = recipeName;
    this.recipeDescription = recipeDescription;
  }

  const myMeal = new MealItem(
    new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    ),
    "Breakfast",
    123,
    "MyRecipeName",
    "MyRecipeDescription"
  );
  console.log("mymeal", myMeal);
  const mealItems = [myMeal, myMeal];

  return (
    <>
      <Row className="mealTimeRow">
        <Col>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>{props.mealTimeIndex}</Accordion.Header>
              <Accordion.Body>
                {mealItems.map((mealItem) => {
                  return (
                    <Row>
                      <Col>
                        <Card className="mealCard">
                          <Card.Body>
                            <Row className="mealCardImageContainer">
                              <Col xs={1}>
                                <img
                                  className="mealCardImage"
                                  src="../../foodicon_temp.png"
                                />
                              </Col>
                              <Col xs={10}>
                                <Card.Title>
                                  Recipe Name : {mealItem.recipeName}
                                </Card.Title>
                                <Card.Text>
                                  <p>
                                    Date :
                                    {mealItem.date
                                      .toString()
                                      .replace(
                                        " 00:00:00 GMT-0700 (Pacific Daylight Time)",
                                        ""
                                      )}
                                  </p>
                                  <p> MealTime : {mealItem.mealTime}</p>
                                  <p>RecipeId : {mealItem.recipeId}</p>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
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

export default MealTime;
