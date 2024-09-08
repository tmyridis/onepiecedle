import Header from "./Header";
import RopeBar from "./RopeBar";
import { useState, useEffect } from "react";

function Navbar(props) {
  const [infiniteMode, setInfiniteMode] = useState(
    localStorage.getItem("infinite") !== null
      ? JSON.parse(localStorage.getItem("infinite"))
      : false
  );

  useEffect(() => {
    const infiniteCheck = JSON.parse(localStorage.getItem("infinite"));
    console.log(infiniteCheck);
    if (infiniteCheck === null) {
      localStorage.setItem("infinite", false);
      console.log("not set infinite => setting infinite mode");
    }
  }, []);

  return (
    <div>
      <Header
        infiniteMode={props.infiniteMode}
        setInfiniteMode={props.setInfiniteMode}
      />
      {props.infiniteMode && (
        <div className="flex justify-center items-center pb-10 uppercase text-xl underline">
          <div>Infinite Mode</div>
        </div>
      )}
      {!props.main ? <RopeBar /> : <></>}
      {props.children}
    </div>
  );
}

export default Navbar;
