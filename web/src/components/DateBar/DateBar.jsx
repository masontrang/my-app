import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./DateBar.css";

function DateBar(props) {
  return (
    <>
      <Row>
        <div className="dateBar">
          {props.today &&
            props.today
              .toString()
              .replace(" 00:00:00 GMT-0700 (Pacific Daylight Time)", "")}
          {props.day7 &&
            " to " +
              props.day7
                .toString()
                .replace(" 00:00:00 GMT-0700 (Pacific Daylight Time)", "")}
        </div>
      </Row>
      <Row className="centeredRow">
        <Col className="centeredCol">
          <Button
            onClick={() => props.setDateIncrement(props.dateIncrement - 1)}
          >
            Back
          </Button>
        </Col>
        <Col className="centeredCol">
          <Button onClick={() => props.setDateIncrement(0)}>Today</Button>
        </Col>
        <Col className="centeredCol">
          <Button
            onClick={() => props.setDateIncrement(props.dateIncrement + 1)}
          >
            Forward
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default DateBar;
