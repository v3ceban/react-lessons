import React from "react";
import Hamburger from "./Hamburger.jsx";

export default function App() {
  const [navMenuState, setNavMenuState] = React.useState(false);
  return <Hamburger menuState={navMenuState} setMenuState={setNavMenuState} />;
}
