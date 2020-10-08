import {
	keysToLowercase,
	normaliseDate,
	normaliseTime
} from "../src/helpers";

test("supported date formats", async () => {
	let mockDates = [
		"2020-10-08",
		"8th October 2020", // not supported
		"October, 8th 2020",
		"8. Oct 2020",
	];

	mockDates.map((date: string) => {
		expect(normaliseDate(date)).toBe("2020-10-08");
	});
});