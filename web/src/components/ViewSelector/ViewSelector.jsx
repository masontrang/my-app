import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DayView from "../DayView/DayView";
import WeekView from "../WeekView/WeekView";

function ViewSelector() {
  return (
    <Tabs
      defaultActiveKey="dayView"
      id="uncontrolled-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="dayView" title="Day View">
        <DayView />
      </Tab>
      <Tab eventKey="weekView" title="Week View">
        <WeekView />
      </Tab>
    </Tabs>
  );
}

export default ViewSelector;
