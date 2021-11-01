import "./App.css";
import Ad from "./components/Ad";
import AdDesigner from "./components/AdDesigner";
import Header from "./components/Header";
import Votes from "./components/Votes";

function App() {
  return (
    <div className="App">
      <Header user="Lisa Lull" />
      <div className="ads">
        <Ad flavor={"Chocolate"} fontSize={24} darkTheme={false} />
        <Ad flavor={"Vanilla"} fontSize={24} darkTheme={true} />
        <Ad flavor={"Strawberry"} fontSize={24} darkTheme={false} />
      </div>
      <main className="main">
        <AdDesigner />
        <Votes />
      </main>
    </div>
  );
}

export default App;
