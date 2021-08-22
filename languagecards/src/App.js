import "./App.css";
// import Card from "./component/Card/Card";
import Item from "./component/Item/Item";
import { categories } from "./helper/data";
import reactlogo from "./assets/react.svg";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="logo-container">
          <img
            src={reactlogo}
            style={{ height: "15%", width: "15%", marginBottom: "2rem" }}
          />
        </div>
        <div className="lang-container">
          <h3 style={{ color: "white", fontSize: "1.5rem", margin: ".5rem" }}>
            Languages
          </h3>
          <div className="card-container">
{/*               
              <Item title="x" card={categories[0]} />
              <Item  card={categories[1]} />
              <Item  card={categories[2]} /> */}
            
            {categories.map((card) => (
              <Item key={card.name} card={card} name={card.name} />
            ))}
          </div>
        </div>
      </div>
      {/* <Card /> */}
    </div>
  );
}
export default App;
