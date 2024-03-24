/* eslint-disable react/prop-types */
import planets from "./planets.json";
import { GasPlanets, NonGasPlanets } from "./homework/Planets.jsx";

export default function Homework() {
  return (
    <>
      <GasPlanets planets={planets} />
      <NonGasPlanets planets={planets} />
    </>
  );
}
