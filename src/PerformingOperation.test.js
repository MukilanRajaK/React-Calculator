import { render } from "@testing-library/react";
import PerformingOperation from "./PerformingOperation";

describe("PerformOperation test", () => {
	test("should render result text box of null from Render Operation when no properties are passed", () => {
		const { getByLabelText } = render(<PerformingOperation />);
		const output = getByLabelText("Output:");
		const outputType = output.getAttribute("type");

		expect(outputType).toBe("text");
		expect(output.value).toBe("");
	});

	test("should render result text box of expression from Render Operation when properties are passed", () => {
		const { getByLabelText } = render(
			<PerformingOperation
				input1={"2"}
				input2={"3"}
				operatorSelection={"mul"}
			/>
		);
		const output = getByLabelText("Output:");
		const outputType = output.getAttribute("type");

		expect(outputType).toBe("text");
		expect(output.value).toBe("2 * 3 = 6");
	});

	test("should render result text box of expression from Render Operation when properties with leading zeros are passed", () => {
		const { getByLabelText } = render(
			<PerformingOperation
				input1={"002"}
				input2={"004"}
				operatorSelection={"div"}
			/>
		);
		const output = getByLabelText("Output:");
		const outputType = output.getAttribute("type");

		expect(outputType).toBe("text");
		expect(output.value).toBe("2 / 4 = 0.5");
	});
});
