import { useContext, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

function MealTime(props) {
  return (
    <>
      <Row className="mealTimeRow">
        <Col>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>{props.mealTime}</Accordion.Header>
              <Accordion.Body>
                {props.mealItems &&
                  props.mealItems.map((mealItem, index) => {
                    return (
                      <Row key={index}>
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
                                    Date :
                                    {mealItem.date &&
                                      mealItem.date
                                        .toString()
                                        .replace(
                                          " 00:00:00 GMT-0700 (Pacific Daylight Time)",
                                          ""
                                        )}
                                    <br />
                                    MealTime : {mealItem.mealTime}
                                    <br />
                                    RecipeId : {mealItem.recipeId}
                                  </Card.Text>
                                  <Button variant="primary">
                                    Go somewhere
                                  </Button>
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
