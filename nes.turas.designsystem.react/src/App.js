import "./App.css";
import Card from "./TurasComponents/Card";
import AlertSuccess from "./TurasComponents/Alerts/AlertSuccess";
import AlertInfo from "./TurasComponents/Alerts/AlertInfo";
import AlertWarning from "./TurasComponents/Alerts/AlertWarning";
import AlertDanger from "./TurasComponents/Alerts/AlertDanger";
import LoremIpsum from "./TurasComponents/Utiliites/LoremIpsum";

function App() {
  return (
    <>
      <h2>Alerts</h2>
      <AlertInfo
        alertTitle={"Alert Info Title"}
        alertMessage={"This is the alert message"}
      >
        <LoremIpsum />
      </AlertInfo>

      <hr />

      <AlertSuccess
        alertTitle="Alert Success Title"
        alertMessage="This is the alert message"
      >
        <LoremIpsum />
      </AlertSuccess>

      <hr />

      <AlertWarning
        alertTitle={"Alert Warning Title"}
        alertMessage={"This is the alert message"}
      >
        <LoremIpsum />
      </AlertWarning>

      <hr />

      <AlertDanger
        alertTitle={"Alert Danger Title"}
        alertMessage={"This is the alert message"}
      >
        <LoremIpsum />
      </AlertDanger>

      <hr />

      <h2>Cards</h2>

      <Card cardHeading="My title" cardLink="/">
        <LoremIpsum />
      </Card>
    </>
  );
}

export default App;
