import { DateTime } from "luxon";
/**
 * Converts a float to one decimal place and rounds up or down
 * @param {number} number
 * @returns {number}
 */
export const roundToOneDecimal = (number) => {
  return Math.floor(number * 10) / 10;
};

/**
 * Converts cents to dollars
 * @param {number} cents
 * @returns {number}
 */
export const convertCentsToDollars = (cents) => {
  const dollars = cents / 100;
  return dollars.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

/**
 * Returns the MM D YYYY
 * @param {string} date
 * @returns {string}
 */
export function monthDayHour(startShift, endShift) {
  const startDate = DateTime.fromISO(startShift).toFormat("LLL d ',' HH:mm");
  const endDate = DateTime.fromISO(endShift).toFormat("HH:mm");
  return `${startDate} - ${endDate} PDT`;
}
