import React from "react";
import RenderingOperation from "./RenderOperation";

function getResult(input1, input2, operator) {
	let result = parseFloat(input1) + " " + operator + " " + parseFloat(input2);
	const answer = eval(result);
	if (isNaN(answer)) {
		return "";
	}
	result = result + " = " + answer;
	return result;
}

function PerformingOperation(props) {
	let result = "";
	if (!(props.input1 && props.input2)) {
		return <RenderingOperation result={result} />;
	} else if (props.operatorSelection === "add") {
		let result = getResult(props.input1, props.input2, "+");
		return <RenderingOperation result={result} />;
	} else if (props.operatorSelection === "sub") {
		let result = getResult(props.input1, props.input2, "-");
		return <RenderingOperation result={result} />;
	} else if (props.operatorSelection === "mul") {
		let result = getResult(props.input1, props.input2, "*");
		return <RenderingOperation result={result} />;
	} else if (props.operatorSelection === "div") {
		let result = getResult(props.input1, props.input2, "/");
		return <RenderingOperation result={result} />;
	}
	return <RenderingOperation result={result} />;
}

export default PerformingOperation;
