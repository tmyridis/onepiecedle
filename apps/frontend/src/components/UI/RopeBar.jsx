import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
function RopeBar() {
  const [foundChars, setFoundChars] = useState({});

  useEffect(() => {
    const obj = {};
    if (localStorage.getItem('classic_found')) {
      obj['classic_found'] = JSON.parse(localStorage.getItem('classic_found'));
    }
    if (localStorage.getItem('fruit_found')) {
      obj['fruit_found'] = JSON.parse(localStorage.getItem('fruit_found'));
    }
    if (localStorage.getItem('wanted_found')) {
      obj['wanted_found'] = JSON.parse(localStorage.getItem('wanted_found'));
    }
    if (localStorage.getItem('laugh_found')) {
      obj['laugh_found'] = JSON.parse(localStorage.getItem('laugh_found'));
    }
    setFoundChars(obj);
  }, []);

  return (
    <div className="relative max-w-sm mx-auto">
      <div className="pt-9 absolute">
        <img src="src\assets\ropeIcon.png"></img>
      </div>
      <div className="flex justify-center absolute">
        <div
          className="relative transition ease-in-out delay-50 hover:traslate-y-1 hover:scale-110 duration-150 tooltip tooltip-top"
          data-tip="Classic"
        >
          <NavLink
            to="/classic"
            style={({ isActive }) => {
              return {
                filter: isActive ? `drop-shadow(0 0 10px #faf9f3)` : '',
              };
            }}
          >
            <img src="src\assets\gameIconClassic.png"></img>
            {foundChars.classic_found === true && (
              <span className="absolute bottom-2 right-1">
                <img className="w-7" src="src\assets\completedIcon.png"></img>
              </span>
            )}
          </NavLink>
        </div>
        <div
          className="relative transition ease-in-out delay-50 hover:traslate-y-1 hover:scale-110 duration-150 tooltip tooltip-top"
          data-tip="Devil fruit"
        >
          <NavLink
            to="/devilfruit"
            style={({ isActive }) => {
              return {
                filter: isActive ? `drop-shadow(0 0 10px #faf9f3)` : '',
              };
            }}
          >
            <img src="src\assets\gameIconFruit.png"></img>
            {foundChars.fruit_found === true && (
              <span className="absolute bottom-2 right-1">
                <img className="w-7" src="src\assets\completedIcon.png"></img>
              </span>
            )}
          </NavLink>
        </div>
        <div
          className="transition relative ease-in-out delay-50 hover:traslate-y-1 hover:scale-110 duration-150 tooltip tooltip-top"
          data-tip="Wanted"
        >
          <NavLink
            to="/wanted"
            style={({ isActive }) => {
              return {
                filter: isActive ? `drop-shadow(0 0 10px #faf9f3)` : '',
              };
            }}
          >
            <img src="src\assets\gameIconWanted.png"></img>
            {foundChars.wanted_found === true && (
              <span className="absolute bottom-2 right-1">
                <img className="w-7" src="src\assets\completedIcon.png"></img>
              </span>
            )}
          </NavLink>
        </div>
        <div
          className="transition relative ease-in-out delay-50 hover:traslate-y-1 hover:scale-110 duration-150 tooltip tooltip-top"
          data-tip="Laugh"
        >
          <NavLink
            to="/laugh"
            style={({ isActive }) => {
              return {
                filter: isActive ? `drop-shadow(0 0 10px #faf9f3)` : '',
              };
            }}
          >
            <img src="src\assets\gameIconLaugh.png"></img>
            {foundChars.laugh_found === true && (
              <span className="absolute bottom-2 right-1">
                <img className="w-7" src="src\assets\completedIcon.png"></img>
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default RopeBar;
