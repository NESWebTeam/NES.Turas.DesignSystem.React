import "./App.css";
import Card from "./TurasComponents/Card";
import AlertSuccess from "./TurasComponents/Alerts/AlertSuccess";
import AlertInfo from "./TurasComponents/Alerts/AlertInfo";
import AlertWarning from "./TurasComponents/Alerts/AlertWarning";
import AlertDanger from "./TurasComponents/Alerts/AlertDanger";

function App() {
  return (
    <>
      <AlertSuccess
        alertTitle="Alert Success Title"
        alertMessage="This is the alert message"
      />

      <AlertInfo
        alertTitle={"Alert Info Title"}
        alertMessage={"This is the alert message"}
      />

      <AlertWarning
        alertTitle={"Alert Warning Title"}
        alertMessage={"This is the alert message"}
      />

      <AlertDanger
        alertTitle={"Alert Danger Title"}
        alertMessage={"This is the alert message"}
      />

      <Card cardHeading="My title" cardLink="/" />
    </>
  );
}

export default App;
