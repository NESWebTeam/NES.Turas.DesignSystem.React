import "./App.css";
import Card from "./TurasComponents/Card";
import AlertSuccess from "./TurasComponents/Alerts/AlertSuccess";
import AlertInfo from "./TurasComponents/Alerts/AlertInfo";
import AlertWarning from "./TurasComponents/Alerts/AlertWarning";
import AlertDanger from "./TurasComponents/Alerts/AlertDanger";
import LoremIpsum from "./TurasComponents/Utiliites/LoremIpsum";
import Layout from "./TurasLayout/Layout";

function App() {
  return (
    <>
      <Layout>
        <h2 className="mt-0">Alerts</h2>
        <AlertInfo
          alertTitle={"Alert Info Title"}
          alertMessage={"This is the alert message"}
        >
          <LoremIpsum />
        </AlertInfo>

        <AlertSuccess
          alertTitle="Alert Success Title"
          alertMessage="This is the alert message"
        >
          <LoremIpsum />
        </AlertSuccess>

        <AlertWarning
          alertTitle={"Alert Warning Title"}
          alertMessage={"This is the alert message"}
        >
          <LoremIpsum />
        </AlertWarning>

        <AlertDanger
          alertTitle={"Alert Danger Title"}
          alertMessage={"This is the alert message"}
        >
          <LoremIpsum />
        </AlertDanger>

        <h2>Cards</h2>

        <div className="row">
          <Card cardHeading="My title" cardLink="/">
            <LoremIpsum />
          </Card>

          <Card cardHeading="My title" cardLink="/">
            <LoremIpsum />
          </Card>

          <Card cardHeading="My title" cardLink="/">
            <LoremIpsum />
          </Card>
        </div>
      </Layout>
    </>
  );
}

export default App;
