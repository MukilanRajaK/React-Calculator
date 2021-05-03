import React from "react";

function RenderingOperation(props) {
	return (
		<div>
			<label htmlFor="result" id="output">
				Output:
			</label>{" "}
			&emsp;
			<input type="text" id="result" value={props.result} readOnly />
		</div>
	);
}

export default RenderingOperation;
