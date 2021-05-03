import { render } from "@testing-library/react";
import RenderingOperation from "./RenderOperation";

describe("RenderOperation test", () => {
	test("should render result text box", () => {
		const { getByLabelText, getByRole } = render(
			<RenderingOperation result={""} />
		);
		const output = getByLabelText("Output:");
		const outputType = output.getAttribute("type");

		expect(outputType).toBe("text");
	});
});
