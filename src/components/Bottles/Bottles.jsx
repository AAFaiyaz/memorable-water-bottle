import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
// import Bottle from "../Bottle/Bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  return (
    <div>
      <h2>Bottle Here: {bottles.length} </h2>
      {bottles.map((bottle) => {
        <Bottle bottle={bottle}></Bottle>;
      })}
    </div>
  );
};

export default Bottles;
