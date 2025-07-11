import moment from "moment";

export const formatDatell = (date: Date | string | number): string => {
	return moment(date).format("ll");
};

export const formatDateMY = (date: Date | string | number): string => {
	return moment(date).format("MMM YYYY");
};

export const formatTimeLT = (time: string | Date | number): string => {
	return moment(time, "HH:mm:ss").format("LT");
};

export interface TimeComparisonInput {
	timeBefore: string | Date | number;
	timeAfter: string | Date | number;
}

export const isLater = (
	timeBefore: string | Date | number,
	timeAfter: string | Date | number
): boolean => {
	const tb = moment(timeBefore, "HH:mm");
	const ta = moment(timeAfter, "HH:mm");
	return ta.isAfter(tb);
};

export interface IsTimeValidInput {
	time: string;
}

export const isTimeValid = (time: IsTimeValidInput["time"]): boolean => {
	const regex = /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d)?$/;
	return regex.test(time);
};

export interface ConvertTimeToDateTimeInput {
	time: string;
}

// ❌ Şu satıra artık gerek yok:
// export interface ConvertTimeToDateTimeOutput extends Date {}

export const convertTimeToDateTime = (
	time: ConvertTimeToDateTimeInput["time"]
): Date => {
	const dateTimeStr = `2000-01-01 ${time}`;
	return new Date(dateTimeStr);
};
