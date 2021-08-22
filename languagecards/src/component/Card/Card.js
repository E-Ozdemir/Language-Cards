import React, { useState } from "react";
import { categories } from "../../helper/data";
import "./card.css";
import reactlogo from "../../assets/react.svg";

function Card() {
  const [showList, setShowList] = useState(categories.map(c => true));
  const hideImage = (index)=>{
    const list = showList.map((item,i)=> !item ? true : (i !== index) ) 
    setShowList(list);
  }
  return (
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
          {categories.map((card,index) => {
            return (
              <div
                className="cards"
                key={card.name}
                onClick={() => hideImage(index)}
              >
                {showList[index] ? (
                  <>
                    <img src={card.img} />
                    <div className="title">
                      <h2 style={{ fontSize: "1rem" }}>{card.name}</h2>
                    </div>
                  </>
                ) : (
                  <ul>
                    <li>{card.options[0]}</li>
                    <li>{card.options[1]}</li>
                    <li>{card.options[2]}</li>
                  </ul>
                )}

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
