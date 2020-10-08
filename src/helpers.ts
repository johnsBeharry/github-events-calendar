import moment from "moment-timezone";
/**
 * Lowercase the keys of an object
 * REF: https://stackoverflow.com/a/54985484
 */
export function keysToLowercase(obj: {}) {
	let newObj = Object.fromEntries(
		Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
	);
	return newObj;
}

/* supported: ISO 8601, RFC 2822, Ordinal Dates (en)
 */
export function normaliseDate(date: string) {
	let momentObj = moment(date, ["Do MMM, YY", "YYYY-MM-DD", "MMM, Do YY"]);
	let isoDate = momentObj.format("YYYY-MM-DD");
	return isoDate;
}

export function normaliseTime(time: string) {
	let momentObj = moment(time, ["h:mm A Z"])
	let timeInHours = momentObj.format();
	let utcOffset = momentObj.format("Z");

	return {time: timeInHours, utcOffset};
}