import React from "react";
import { categories } from "../../helper/data";
import "./card.css";
import reactlogo from "../../assets/react.svg";

function Card() {
  return (
    <div className="main-container">
      <div className="logo-container">
        <img src={reactlogo} style={{ height: "15%", width: "15%",marginBottom:"2rem" }} />
      </div>
      <div className="lang-container">
        <h3 style={{color:"white",fontSize:"1.5rem",margin:".5rem"}}>Languages</h3>
        <div className="card-container">
          {categories.map((card) => {
            return (
              <div className="cards" key={card.name}>
                <img src={card.img} style={{ width: "3em", height: "3em" }} />
                <div className="title">
                  <h2 style={{fontSize:"1rem"}}>{card.name}</h2>
                </div>
                {/* <div className="card-over">
                <p>{card.desc}</p>
              </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
