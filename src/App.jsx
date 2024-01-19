import React, { useState } from "react";
import "./assets/Components/Style/App.css";

export default function App() {
  let btn = document.getElementsByClassName("number");
  let prevbtn = document.querySelector(".prevbtn");
  let nextbtn = document.querySelector(".nxtbtn");
  let currentnum = 1;
  const updateContent = (number) => {
    let headerContent = document.getElementsByClassName("content-header");
    for (let head of headerContent) {
      head.textContent = `Header ${number}`;
    }
  };

  const handleClick = (buttonID) => {
    for (let number of btn) {
      let activebtn = document.getElementById(buttonID);
      number.classList.remove("active");
      activebtn.classList.add("active");
    }
    updateContent(buttonID);
  };
  const back = () => {
    let activebtn = document.getElementById(currentnum);
    if (currentnum > 1) {
      for (let number of btn) {
        activebtn.classList.remove("active");
      }
      currentnum--;
      let newActive = document.getElementById(currentnum);
      newActive.classList.add("active");
      console.log(currentnum);
      updateContent(currentnum);
    }
  };

  const next = () => {
    let activebtn = document.getElementById(currentnum);
    if (currentnum < 4) {
      for (let number of btn) {
        activebtn.classList.remove("active");
      }
      currentnum++;
      let newActive = document.getElementById(currentnum);
      newActive.classList.add("active");
      console.log(currentnum);
      updateContent(currentnum);
    }
  };

  return (
    <body>
      <div className="pagination-card">
        <div className="card-content">
          <ul id="pag-num">
            <li id="1" className="number active" onClick={() => handleClick(1)}>
              1
            </li>
            <li id="2" className="number" onClick={() => handleClick(2)}>
              2
            </li>
            <li id="3" className="number" onClick={() => handleClick(3)}>
              3
            </li>
            <li id="4" className="number" onClick={() => handleClick(4)}>
              4
            </li>
          </ul>
          <div className="article">
            <h3 className="content-header">Header 1</h3>
            <div className="content-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              voluptas? Iure, excepturi! Qui tempora dolor impedit atque
              pariatur quae dolores, a officiis voluptate quo nam vel nesciunt
              illum. Numquam, doloribus!
            </div>
          </div>
          <div className="action-control">
            <button className="prevbtn" onClick={back}>
              Prev
            </button>
            <button className="nxtbtn active" onClick={next}>
              next
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}
