import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import DayMeals from "../DayMeals/DayMeals";
import DateBar from "../DateBar/DateBar";

function WeekView() {
  const createDateArray = function (increment) {
    let todaysDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    );
    const newTodaysDate = new Date(todaysDate);
    newTodaysDate.setDate(newTodaysDate.getDate() + increment);
    todaysDate = newTodaysDate;
    const dateArray = [];

    for (let i = 0; i < 7; i++) {
      const tomorrowsDate = new Date(todaysDate);
      tomorrowsDate.setDate(tomorrowsDate.getDate() + i);
      dateArray.push(tomorrowsDate);
    }

    console.log("dateArray", dateArray);
    return dateArray;
  };

  const [dateIncrement, setDateIncrement] = useState(0);
  const [todaysDatePlusSix, setTodaysDatePlusSix] = useState(0);

  useEffect(() => {
    setDates(createDateArray(dateIncrement));
    setTodaysDatePlusSix(createDateArray(dateIncrement)[6]);
  }, [dateIncrement]);

  let [dates, setDates] = useState([]);
  const mealTimes = ["Breakfast", "Lunch", "Dinner"];

  return (
    <>
      <Row className="centeredRow">
        <DateBar
          today={dates[0]}
          day7={dates[6]}
          dateIncrement={dateIncrement}
          setDateIncrement={setDateIncrement}
        />
      </Row>
      {dates.map((date, index) => {
        return <DayMeals today={dates[index]} key={index} />;
      })}
    </>
  );
}

export default WeekView;
