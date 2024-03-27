import React, { useState } from "react";
import "../styles/Representatives.css";

const Representatives = ({
  name,
  img,
  price,
  medal,
  premium,
  product,
  remove,
  
}) => {
  const [showRemove, setShowRemove] = useState(false);
  return (
    <div className="representativeWrap padding"  >
      <div className="flexRepresentative">
        <div className="flexImgAndName">
          <div>
            <img src={img} alt={name} />
          </div>
          <p className="name">{name}</p>
        </div>

        <div>
          <b>${price}</b>
        </div>

        <div>
          <p>{product}</p>
        </div>

        <div>
          <p>{premium}</p>
        </div>

        {medal == "gold" ? (
          <div>
            <li className="medal1">+{medal}</li>
          </div>
        ) : (
          <div>
            <li className="medal2">+{medal}</li>
          </div>
        )}

        <div
          className="flexRemove"
          onClick={() => {
            setShowRemove(!showRemove);
          }}>
          <div className="buttonWrap">
            <b></b>
            <b></b>
            <b></b>
          </div>




          {showRemove && (
            <small className="small" onClick={remove}>
              remove
            </small>
          )}
        </div>
      </div>
    </div>
  );
};

export default Representatives;
