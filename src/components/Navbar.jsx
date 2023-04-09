import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import Aos from 'aos'
import 'aos/dist/aos.css'

function Navbar(props) {
  const BigNav= 'cursor-pointer text-[16px] m-10 mx-5 rounded-xl px-4 py-2 hover:font-extrabold hover:my-9 hover:mx-[19px] hover:border mr-10}'
  const BigNavStyle= props.mode==="black"?{backgroundColor: "rgba(169, 87, 217, 0.3)", borderColor: "white"}:{backgroundColor: "rgba(222, 91, 159,0.3)", borderColor: "rgb(222, 91, 159)"}
  const TinyNav= 'font-medium cursor-pointer text-[16px] m-10 mb-0'
  useEffect (()=>{
    Aos.init({duration: 700, offset: 200});
  },[]);
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div id="home">
      <nav className={`w-full flex py-2 justify-between items-center navbar sm:mx-5`}>
        <img data-aos="zoom-in" src="./assets/icon.png" alt="Open Query" className="cursor-pointer h-[60px]" />{" "}
        <p data-aos="zoom-in" className="cursor-pointer text-[20px]">OpenQuery</p>
{/* Navbar for Large Screen */}
        <ul data-aos="fade-down"
          className={`list-none sm:flex hidden justify-end items-center flex-1`}
        >
          <LinkScroll to="home">
            <li
              className={BigNav}
              style={BigNavStyle}
            >
              Home
            </li>
          </LinkScroll>
          <Link to="/app">
            <li
              className={BigNav}
              style={BigNavStyle}
            >
              Get Started
            </li>
          </Link>
          <LinkScroll to="features">
            <li
              className={BigNav}
              style={BigNavStyle}
            >
              Features
            </li>
          </LinkScroll>
          <LinkScroll to="feedback" offset={-200}>
            <li
              className={BigNav}
              style={BigNavStyle}
            >
              Feedback
            </li>
          </LinkScroll>
          <li className={`cursor-pointer text-[16px] mx-5 w-10 h-10 align-center`}>
            <button
              onClick={() => {
                props.toggleMode();
              }}
            >
              <img
                src={
                  props.mode === "black"
                    ? "/assets/light_mode.png"
                    : "/assets/dark_mode.png"
                }
                alt="change mode"
              />
            </button>
          </li>
        </ul>

{/* NavLinks for Small Screen Devices */}

        <div className="sm:hidden flex flex-1 justify-end items-center z-40">
          <img
            src={
              menuToggle
                ? props.mode === "black"
                  ? "/assets/close_white.png"
                  : "/assets/close_pink.png"
                : props.mode === "black"
                ? "/assets/menu_white.png"
                : "/assets/menu_pink.png"
            }
            className="w-10 object-contain"
            onClick={() => setMenuToggle((prev) => !prev)}
            alt="Menu"
          />
          <div
            className={`${
              menuToggle ? "flex" : "hidden"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            style={
              props.mode === "black"
                ? {
                    background: "rgba(152, 86, 141, 0.3)",
                    border: "solid white",
                    backdropFilter: "blur(8px)",
                  }
                : {
                    background: "rgba(130, 7, 71,0.6)",
                    color: "white",
                    backdropFilter: "blur(8px)",
                  }
            }
          >
            <ul
              className={`list-none flex flex-col justify-end items-center flex-1`}
            >
              <li className={`font-medium cursor-pointer text-[16px] m-2`}>
                <button
                  onClick={() => {
                    props.toggleMode();
                  }}
                >
                  {props.mode === "black" ? "Light" : "Dark"} Mode
                </button>
              </li>
              <Link to={`/`}>
                <li
                  className={TinyNav}
                  onClick={()=> setMenuToggle((prev) => !prev)}
                > Home </li>
              </Link>
              <Link to={`/app`}>
                <li
                  className={TinyNav}
                  onClick={()=> setMenuToggle((prev) => !prev)}
                > Get Started </li>
              </Link>
              <LinkScroll to={`features`}>
                <li
                  className={TinyNav}
                  onClick={()=> setMenuToggle((prev) => !prev)}
                > Features </li>
              </LinkScroll>
              <LinkScroll to={`feedback`}>
                <li
                  className={TinyNav}
                  onClick={()=> setMenuToggle((prev) => !prev)}
                > Feedback </li>
              </LinkScroll>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
