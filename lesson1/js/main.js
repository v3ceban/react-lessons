var root = document.querySelector("#root");

//Composable code: we can create components (building blocks) to use in the program

//Component 1
function TopContent() {
	return (
		<section>
			<h1>Lorem ipsum dolor sit amet.</h1>
			<h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, qui.</h2>
			<ul>
				<li>Lorem, ipsum dolor.</li>
				<li>Veniam, enim. Ea?</li>
				<li>Expedita, magnam architecto.</li>
			</ul>
		</section>
	);
}

//Component 2
function BottomContent() {
	return (
		<section>
			<h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, deserunt?</h2>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo nobis explicabo maiores aliquam sunt illo,
				recusandae, distinctio laborum veniam doloribus esse quod quis eum quo voluptates delectus quam numquam deserunt
				nam! Asperiores vitae natus a magnam earum odit ex placeat unde debitis. Voluptatem quod pariatur nulla
				exercitationem officiis magnam praesentium?
			</p>
		</section>
	);
}

ReactDOM.render(
	<div>
		<TopContent />
		<BottomContent />
	</div>,
	root
);
