import { fireEvent, render } from "@testing-library/react";
import Calculator from "./Calculator";

describe("Calculator test", () => {
	test("should render two input box whose type is number with four buttons and an output box which is of text type", () => {
		const { getByLabelText, getByRole } = render(<Calculator />);
		const input1 = getByLabelText("Enter input 1:");
		const input1Type = input1.getAttribute("type");
		const input2 = getByLabelText("Enter input 2:");
		const input2Type = input2.getAttribute("type");
		const output = getByLabelText("Output:");
		const outputType = output.getAttribute("type");

		expect(input1).toBeTruthy();
		expect(input1Type).toBe("number");
		expect(input2).toBeTruthy();
		expect(input2Type).toBe("number");
		expect(getByRole("button", { name: "+" })).toBeTruthy();
		expect(getByRole("button", { name: "-" })).toBeTruthy();
		expect(getByRole("button", { name: "*" })).toBeTruthy();
		expect(getByRole("button", { name: "/" })).toBeTruthy();
		expect(output).toBeTruthy();
		expect(outputType).toBe("text");
	});

	test("The buttons must be disabled when no input is given", () => {
		const { getByRole } = render(<Calculator />);

		expect(getByRole("button", { name: "+" })).toBeDisabled();
		expect(getByRole("button", { name: "-" })).toBeDisabled();
		expect(getByRole("button", { name: "*" })).toBeDisabled();
		expect(getByRole("button", { name: "/" })).toBeDisabled();
	});

	test("The buttons must be disabled when only input1 is given", () => {
		const { getByLabelText, getByRole } = render(<Calculator />);
		const input1 = getByLabelText("Enter input 1:");
		const result = getByLabelText("Output:");

		fireEvent.change(input1, { target: { value: 1 } });

		expect(getByRole("button", { name: "+" })).toBeDisabled();
		expect(getByRole("button", { name: "-" })).toBeDisabled();
		expect(getByRole("button", { name: "*" })).toBeDisabled();
		expect(getByRole("button", { name: "/" })).toBeDisabled();
		expect(result.value).toBe("");
	});

	test("The buttons must be disabled when only input2 is given", () => {
		const { getByLabelText, getByRole } = render(<Calculator />);
		const input2 = getByLabelText("Enter input 2:");
		const result = getByLabelText("Output:");

		fireEvent.change(input2, { target: { value: 1 } });

		expect(getByRole("button", { name: "+" })).toBeDisabled();
		expect(getByRole("button", { name: "-" })).toBeDisabled();
		expect(getByRole("button", { name: "*" })).toBeDisabled();
		expect(getByRole("button", { name: "/" })).toBeDisabled();
		expect(result.value).toBe("");
	});

	test("The buttons must be enabled when two inputs are given", () => {
		const { getByLabelText, getByRole } = render(<Calculator />);
		const input1 = getByLabelText("Enter input 1:");
		const input2 = getByLabelText("Enter input 2:");

		fireEvent.change(input1, { target: { value: 1 } });
		fireEvent.change(input2, { target: { value: 1 } });

		expect(getByRole("button", { name: "+" })).toBeEnabled();
		expect(getByRole("button", { name: "-" })).toBeEnabled();
		expect(getByRole("button", { name: "*" })).toBeEnabled();
		expect(getByRole("button", { name: "/" })).toBeEnabled();
	});

	test("the buttons must be enabled when anu one of existing input is changed to blank", () => {
		const { getByLabelText, getByRole } = render(<Calculator />);
		const input1 = getByLabelText("Enter input 1:");
		const input2 = getByLabelText("Enter input 2:");
		const buttonMultiply = getByRole("button", { name: "*" });

		fireEvent.change(input1, { target: { value: 10 } });
		fireEvent.change(input2, { target: { value: 2 } });
		fireEvent.click(buttonMultiply);

		expect(getByRole("button", { name: "+" })).toBeEnabled();
		expect(getByRole("button", { name: "-" })).toBeEnabled();
		expect(getByRole("button", { name: "*" })).toBeEnabled();
		expect(getByRole("button", { name: "/" })).toBeEnabled();

		fireEvent.change(input2, { target: { value: null } });

		expect(getByRole("button", { name: "+" })).toBeDisabled();
		expect(getByRole("button", { name: "-" })).toBeDisabled();
		expect(getByRole("button", { name: "*" })).toBeDisabled();
		expect(getByRole("button", { name: "/" })).toBeDisabled();
	});

	test("should render the result when operator is clicked", () => {
		const { getByLabelText, getByRole } = render(<Calculator />);
		const input1 = getByLabelText("Enter input 1:");
		const input2 = getByLabelText("Enter input 2:");
		const button = getByRole("button", { name: "*" });
		const result = getByLabelText("Output:");

		fireEvent.change(input1, { target: { value: 10 } });
		fireEvent.change(input2, { target: { value: 2 } });
		fireEvent.click(button);

		expect(result.value).toBe("10 * 2 = 20");
	});

	test("should render the result when different operator is clicked from existing clicked operator", () => {
		const { getByLabelText, getByRole } = render(<Calculator />);
		const input1 = getByLabelText("Enter input 1:");
		const input2 = getByLabelText("Enter input 2:");
		const buttonMultiply = getByRole("button", { name: "*" });
		const buttonSubtract = getByRole("button", { name: "-" });
		const result = getByLabelText("Output:");

		fireEvent.change(input1, { target: { value: 10 } });
		fireEvent.change(input2, { target: { value: 2 } });
		fireEvent.click(buttonMultiply);

		expect(result.value).toBe("10 * 2 = 20");

		fireEvent.click(buttonSubtract);

		expect(result.value).toBe("10 - 2 = 8");
	});

	test("should render the result when existing input is changed", () => {
		const { getByLabelText, getByRole } = render(<Calculator />);
		const input1 = getByLabelText("Enter input 1:");
		const input2 = getByLabelText("Enter input 2:");
		const buttonMultiply = getByRole("button", { name: "*" });
		const result = getByLabelText("Output:");

		fireEvent.change(input1, { target: { value: 10 } });
		fireEvent.change(input2, { target: { value: 2 } });
		fireEvent.click(buttonMultiply);

		expect(result.value).toBe("10 * 2 = 20");

		fireEvent.change(input2, { target: { value: 4 } });

		expect(result.value).toBe("10 * 4 = 40");
	});
});
