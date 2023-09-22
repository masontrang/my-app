import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DayView from "../DayView/DayView";
import NavBar from "../NavBar/NavBar";
import ViewSelector from "../ViewSelector/ViewSelector";

function Home() {
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
      <NavBar />
      <br />
      <Container>
        <ViewSelector />
      </Container>

      {/* <DayView /> */}
    </>
  );
}

export default Home;
