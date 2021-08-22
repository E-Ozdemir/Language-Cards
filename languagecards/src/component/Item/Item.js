import React,{useState} from "react";
import "../Card/card.css";


function Item(props) {
    // const{card}=props;
    const card = props.card;
    const [showImage, setShowImage] = useState(true);
  return (
    <div className="cards" key={card.name} onClick={() => setShowImage(!showImage)}>
      {showImage ? (
        <>
          <img src={card.img} />
          <div className="title">
            <h2 style={{ fontSize: "1rem" }}>{props.name}</h2>
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
}

export default Item;
