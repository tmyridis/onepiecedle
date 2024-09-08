import { useState } from "react";
import { NavLink } from "react-router-dom";

function RopeBar(props) {
  return (
    <div className="relative max-w-sm mx-auto">
      <div className="pt-9 absolute">
        <img src="src\assets\ropeIcon.png"></img>
      </div>
      <div className="flex justify-center absolute">
        <div
          className="transition ease-in-out delay-50 hover:traslate-y-1 hover:scale-110 duration-150 tooltip tooltip-top"
          data-tip="Classic"
        >
          <NavLink
            to="/classic"
            style={({ isActive }) => {
              return {
                filter: isActive ? `drop-shadow(0 0 10px #faf9f3)` : "",
              };
            }}
          >
            <img src="src\assets\gameIconClassic.png"></img>
            {/* {classicFound && (
              <span class="absolute top-16 left-4">
                <img src="src\assets\completedIcon.png"></img>
              </span>
            )} */}
          </NavLink>
        </div>
        <div
          className="transition ease-in-out delay-50 hover:traslate-y-1 hover:scale-110 duration-150 tooltip tooltip-top"
          data-tip="Devil fruit"
        >
          <NavLink
            to="/devilfruit"
            style={({ isActive }) => {
              return {
                filter: isActive ? `drop-shadow(0 0 10px #faf9f3)` : "",
              };
            }}
          >
            <img src="src\assets\gameIconFruit.png"></img>
            {/* {foundChar && (
              <span class="absolute top-16 left-40">
                <img src="src\assets\completedIcon.png"></img>
              </span>
            )} */}
          </NavLink>
        </div>
        <div
          className="transition ease-in-out delay-50 hover:traslate-y-1 hover:scale-110 duration-150 tooltip tooltip-top"
          data-tip="Wanted"
        >
          <NavLink
            to="/wanted"
            style={({ isActive }) => {
              return {
                filter: isActive ? `drop-shadow(0 0 10px #faf9f3)` : "",
              };
            }}
          >
            <img src="src\assets\gameIconWanted.png"></img>
            {/* {foundChar && (
              <span class="absolute top-16 left-64">
                <img src="src\assets\completedIcon.png"></img>
              </span>
            )} */}
          </NavLink>
        </div>
        <div
          className="transition ease-in-out delay-50 hover:traslate-y-1 hover:scale-110 duration-150 tooltip tooltip-top"
          data-tip="Laugh"
        >
          <NavLink
            to="/laugh"
            style={({ isActive }) => {
              return {
                filter: isActive ? `drop-shadow(0 0 10px #faf9f3)` : "",
              };
            }}
          >
            <img src="src\assets\gameIconLaugh.png"></img>
            {/* {foundChar && (
              <span class="absolute top-16 right-2">
                <img src="src\assets\completedIcon.png"></img>
              </span>
            )} */}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default RopeBar;
