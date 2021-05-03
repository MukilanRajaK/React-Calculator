import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./Calculator";

ReactDOM.render(
	<div
		style={{
			position: "absolute",
			left: "50%",
			top: "50%",
			transform: "translate(-50%,-50%)",
		}}
	>
		<Calculator />
	</div>,
	document.getElementById("root")
);

export default Calculator;
