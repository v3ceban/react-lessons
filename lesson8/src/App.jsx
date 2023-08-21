// import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

//regualar function can be exported as default without being set to a file type
export default function App() {
	return (
		<>
			<Navbar />
			<Main />
		</>
	);
}
