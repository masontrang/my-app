import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import MealTime from "../MealTime/MealTime";

function DayView() {
  const createDateArray = function (increment) {
    let todaysDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    );
    const newTodaysDate = new Date(todaysDate);
    newTodaysDate.setDate(newTodaysDate.getDate() + increment);
    todaysDate = newTodaysDate;
    const dateArray = [todaysDate];
    for (let i = 0; i < 6; i++) {
      const tomorrowsDate = new Date(todaysDate);
      tomorrowsDate.setDate(tomorrowsDate.getDate() + i);
      dateArray.push(tomorrowsDate);
    }
    console.log("dateArray", dateArray);
    return dateArray;
  };

  const [dateIncrement, setDateIncrement] = useState(0);

  useEffect(() => {
    setDates(createDateArray(dateIncrement));
  }, [dateIncrement]);

  let [dates, setDates] = useState([]);
  const mealTimes = ["Breakfast", "Lunch", "Dinner"];

  return (
    <>
      <Row className="centeredRow">
        <Col className="centeredCol">
          <Button onClick={() => setDateIncrement(dateIncrement - 1)}>
            Back
          </Button>
        </Col>
        <Col className="dateBar">
          {dates[0] &&
            dates[0]
              .toString()
              .replace(" 00:00:00 GMT-0700 (Pacific Daylight Time)", "")}
        </Col>
        <Col className="centeredCol">
          <Button onClick={() => setDateIncrement(dateIncrement + 1)}>
            Forward
          </Button>
        </Col>
      </Row>

      {mealTimes.map((mealTimeIndex) => {
        return <MealTime mealTimeIndex={mealTimeIndex} />;
      })}
    </>
  );
}

export default DayView;
