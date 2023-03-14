import React from "react";
import data from "../../data.json";
import "./statistics.css";

function Statistcs({ id, label, percentage }) {
  return (
    <div className="wrapper">
      <h1 className="title">Upload stats</h1>
      <ul className="list">
        {data.map((item) => (
          <li className="itemm" key={item.id}>
            <span className="text1">{item.label}</span>
            <span className="text2">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Statistcs;
