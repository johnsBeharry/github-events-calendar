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

export function normaliseDate(date: string) {
	let parsed = Date.parse(date);
	if(parsed !== NaN) {
		return parsed;
	}
	else {
		throw new Error("Could not parse date");
	}
}

export function normaliseTime(time: string) {
	let momentObj = moment(time, ["h:mm A Z"])
	let timeInHours = momentObj.format();
	let utcOffset = momentObj.format("Z");

	return {time: timeInHours, utcOffset};
}