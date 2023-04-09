import Nav from "./components/Nav.jsx";
import Card from "./components/Card.jsx";
import data from "./data.js";
import "./App.css";

function App() {
  const items = data.map((item) => {
    return (
      <Card 
        key= {item.id}
        {...item}
      />
    );
  });
  return (
    <div className="app-wrapper">
      <Nav />
      {items}
    </div>
  )
}

export default App;
