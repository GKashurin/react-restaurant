const square = require("./square")

describe("square", () => {
	beforeEach(() => {})//перед каждым
	beforeAll(() => {})//перед всеми один раз
	test("Корректное значение", () => {
		// expect(square(5)).toBe(25)
		// expect(square(5)).toBeLessThan(26)
		// expect(square(5)).toBeGreaterThan(24)
		// expect(square(5)).not.toBeUndefined()
		const spyMathPow = jest.spyOn(Math, "pow");
		square(2);
		expect(spyMathPow).toBeCalledTimes(1);
	})

	test("Корректное значение", () => {
		const spyMathPow = jest.spyOn(Math, "pow");
		square(1);
		expect(spyMathPow).toBeCalledTimes(0);
	})
	afterEach(() => jest.clearAllMocks())
	afterAll(() => {})
})