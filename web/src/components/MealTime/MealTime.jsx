import { useContext, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

import MealCard from "../MealCard/MealCard";

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

export default MealTime;
