const header = document.querySelector("header");
const headerContent = (
	<div>
		<nav>
			<h1>JSX Navigation</h1>
			<ul>
				<li>Pricing</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
		<h2>Header</h2>
	</div>
);

ReactDOM.render(headerContent, header);
