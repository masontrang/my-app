import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function DateBar(props) {
  console.log("today", props.dates[0]);
  return (
    <>
      <Col className="centeredCol">
        <Button onClick={() => props.setDateIncrement(props.dateIncrement - 1)}>
          Back
        </Button>
      </Col>
      <Col className="dateBar">
        {props.dates[0] &&
          props.dates[0]
            .toString()
            .replace(" 00:00:00 GMT-0700 (Pacific Daylight Time)", "")}
      </Col>
      <Col className="centeredCol">
        <Button onClick={() => props.setDateIncrement(props.dateIncrement + 1)}>
          Forward
        </Button>
      </Col>
    </>
  );
}

export default DateBar;
