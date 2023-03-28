import React from "react";
import { useState } from "react";
import { navLinks } from "./constants/NavLink";

function Navbar(props) {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div>
      <nav className={`w-full flex py-6 justify-between items-center navbar`}>
        <img src="./assets/icon.png" alt="Open Query" className="h-[40px]" />{" "}
        OpenQuery
        <ul
          className={`list-none sm:flex hidden justify-end items-center flex-1`}
        >
          {navLinks.map((nav, index) => (
            <li
              className={`cursor-pointer text-[16px] m-10 ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
              key={nav.id}
            >
              <a herf={`/${nav.id}`}> {nav.title}</a>
            </li>
          ))}
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
        <div className="sm:hidden flex flex-1 justify-end items-center">
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
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
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

              {navLinks.map((nav, index) => (
                <li
                  className={`font-medium cursor-pointer text-[16px] m-10 ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-4"
                  }`}
                  key={nav.id}
                >
                  <a herf={`/${nav.id}`}> {nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
