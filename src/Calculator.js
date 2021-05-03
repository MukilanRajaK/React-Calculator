import React from "react";
import PerformingOperation from "./PerformingOperation";

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			input1: "",
			input2: "",
			operatorSelection: "",
			validInput: 0,
		};
	}

	handleChange(e) {
		let input1 = this.state.input1;
		let input2 = this.state.input2;
		if (e.target.id === "inp1") {
			this.setState({ input1: e.target.value });
			input1 = e.target.value;
		}
		if (e.target.id === "inp2") {
			this.setState({ input2: e.target.value });
			input2 = e.target.value;
		}
		if (input1 !== "") {
			input1 = String(input1);
		}
		if (input2 !== "") {
			input2 = String(input2);
		}
		if (input1 !== "" && input2 !== "") {
			this.setState({ validInput: 1 });
		} else {
			this.setState({ validInput: 0 });
		}
	}

	handleClick(e) {
		if (e.target.name === "add") {
			this.setState({ operatorSelection: "add" });
		}
		if (e.target.name === "sub") {
			this.setState({ operatorSelection: "sub" });
		}
		if (e.target.name === "mul") {
			this.setState({ operatorSelection: "mul" });
		}
		if (e.target.name === "div") {
			this.setState({ operatorSelection: "div" });
		}
	}

	render() {
		const input1 = this.state.input1;
		const input2 = this.state.input2;
		const operatorSelection = this.state.operatorSelection;
		const PASCALGREEN = "#98FB98";
		const LIGHTGREY = "#B0C4DE";
		return (
			<div style={{ textAlign: "center" }}>
				<h1 style={{ color: "red", fontWeight: "bold" }}>Calculator</h1>
				<label htmlFor="inp1">Enter input 1:</label> &emsp;
				<input
					id="inp1"
					value={input1}
					type="number"
					onChange={this.handleChange}
				/>
				<br />
				<br />
				<label htmlFor="inp2">Enter input 2:</label>&emsp;
				<input
					id="inp2"
					value={input2}
					type="number"
					onChange={this.handleChange}
				/>
				<br />
				<br />
				<button
					name="add"
					disabled={!this.state.validInput}
					onClick={this.handleClick}
					style={
						this.state.operatorSelection === "add" &&
						this.state.validInput === 1
							? { backgroundColor: PASCALGREEN }
							: { backgroundColor: LIGHTGREY }
					}
				>
					+
				</button>
				&ensp;
				<button
					name="sub"
					disabled={!this.state.validInput}
					onClick={this.handleClick}
					style={
						this.state.operatorSelection === "sub" &&
						this.state.validInput === 1
							? { backgroundColor: PASCALGREEN }
							: { backgroundColor: LIGHTGREY }
					}
				>
					-
				</button>
				&ensp;
				<button
					name="mul"
					disabled={!this.state.validInput}
					onClick={this.handleClick}
					style={
						this.state.operatorSelection === "mul" &&
						this.state.validInput === 1
							? { backgroundColor: PASCALGREEN }
							: { backgroundColor: LIGHTGREY }
					}
				>
					*
				</button>
				&ensp;
				<button
					name="div"
					disabled={!this.state.validInput}
					onClick={this.handleClick}
					style={
						this.state.operatorSelection === "div" &&
						this.state.validInput === 1
							? { backgroundColor: PASCALGREEN }
							: { backgroundColor: LIGHTGREY }
					}
				>
					/
				</button>
				<br />
				<br />
				<PerformingOperation
					input1={input1}
					input2={input2}
					operatorSelection={operatorSelection}
				/>
			</div>
		);
	}
}

export default Calculator;
