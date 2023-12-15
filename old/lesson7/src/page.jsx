import React from "react";
//Import more than one component from a single file at the same time
import { Header, Main, Footer } from "./parts.jsx";

function Page() {
	//React components can have other react components inside!
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
}

export default Page;
