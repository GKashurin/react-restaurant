const validateValue = require("./validateValue")

test("Валидация значения", () => {//первый арг - название, второй - коллбэк
	expect(validateValue(50)).toBe(true)// toBe - должно быть
})

describe("validateValue", () => {
	test("Корректное значение", () => {
		expect(validateValue(50)).toBe(true)
	})
	test("Меньше корректного", () => {
		expect(validateValue(-1)).toBe(false)
	})
	test("Больше корректного", () => {
		expect(validateValue(102)).toBe(false)
	})
	test("Пограничное значение снизу", () => {
		expect(validateValue(0)).toBe(true)
	})
	test("Пограничное значение сверху", () => {
		expect(validateValue(100)).toBe(true)
	})

})