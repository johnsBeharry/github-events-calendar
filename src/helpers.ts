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

export function normaliseTime(time: string, timeZone: string) {
	moment.tz.load({version : "2020b", links: [], zones: []});
	let newTime = moment.tz(time, timeZone).format();

	return newTime;
}

