import dataJson from "./data.json";
import "./App.css";
import Section from "./components/Section";

function App() {
  const data = dataJson;

  return (
    <div className="App">
      <header className="header"></header>
      <main className="main">
        {data.map((item) => (
          <Section item={item} key={item.id}/>
        ))}
      </main>
    </div>
  );
}

export default App;
