import Header from "./components/Header";
import KPICards from "./components/KPICards";
import Charts from "./components/Charts";
import Tables from "./components/Tables";
import Alerts from "./components/Alerts";

function App() {
  return (
    <div>
      <Header />

      <KPICards />

      <hr />

      <Charts />

      <hr />

      <Tables />

      <hr />

      <Alerts />
    </div>
  );
}

export default App;