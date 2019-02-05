//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";
import "./icons.js";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import BigCounter from "./component/home.jsx";

let counter = 0;

setInterval(function() {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;

	ReactDOM.render(
		<BigCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);

//render your react application
