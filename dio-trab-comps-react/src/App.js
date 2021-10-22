import "./App.css";
import Card from "./components/Card";
import Item from "./components/Item";

function App() {
  return (
    <div className="App">
      <h1>Primeiro app com React</h1>
      <ul>
        <Item>0</Item>
        <Item>1</Item>
        <li>Primeiro</li>
      </ul>
      <Card />
    </div>
  );
}

export default App;
