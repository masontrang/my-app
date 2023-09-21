import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import DayView from "./components/DayView/DayView";

import Accordion from "react-bootstrap/Accordion";

function App() {
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
      <Container>
        <Row>
          <Col className="titleBar">My App Title</Col>
        </Row>
        <DayView />
      </Container>
    </>
  );
}

export default App;
