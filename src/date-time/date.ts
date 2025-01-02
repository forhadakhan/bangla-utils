/**
 * FILE: src/date-time/date.ts
 * DESC: date-time functions
 */
import {
    BANGLA_DAYS,
    FULL_DAY_NAMES,
    SHORT_DAY_NAMES,
    GREGORIAN_MONTHS,
    BANGLA_CALENDAR_MONTHS,
    GREGORIAN_FULL_MONTH_NAMES,
    GREGORIAN_SHORT_MONTH_NAMES,
    BANGLA_CALENDAR_FULL_MONTH_NAMES,
    BANGLA_CALENDAR_SHORT_MONTH_NAMES,
} from './constants';

/**
 * Helper function to convert a month to its corresponding name.
 * @param month - The month as a number (1-12) or string (full or short name).
 * @param monthsArray - Array of month names.
 * @param fullMonthNames - Mapping of full month names to month names.
 * @param shortMonthNames - Mapping of short month names to month names.
 * @param strict - If true, throws errors for invalid inputs. If false, returns an empty string.
 * @returns The corresponding month name or an empty string if invalid and strict is false.
 * @throws {Error} If the input is invalid and strict is true.
 */
function convertMonth(
    month: number | string,
    monthsArray: string[],
    fullMonthNames: { [key: string]: string },
    shortMonthNames: { [key: string]: string },
    strict: boolean = true
): string {
    // Handle number input (1-12)
    if (typeof month === 'number') {
        if (month < 1 || month > 12) {
            if (strict) {
                throw new Error(
                    'Invalid month number. Must be between 1 and 12.'
                );
            }
            return '';
        }
        return monthsArray[month - 1];
    }

    // Handle string input (full or short month name)
    if (typeof month === 'string') {
        // Normalize the input (trim and convert to lowercase)
        const normalizedMonth = month.trim().toLowerCase();

        // Check full month names
        if (fullMonthNames[normalizedMonth]) {
            return fullMonthNames[normalizedMonth];
        }

        // Check short month names
        if (shortMonthNames[normalizedMonth]) {
            return shortMonthNames[normalizedMonth];
        }

        // If no match, handle based on strict mode
        if (strict) {
            throw new Error(
                'Invalid month name. Must be a valid full or short month name.'
            );
        }
        return '';
    }

    // If the input is neither a number nor a string, handle based on strict mode
    if (strict) {
        throw new Error(
            'Invalid input. Must be a number (1-12) or a string (full or short month name).'
        );
    }
    return '';
}

/**
 * Converts a month to its Bangla name in the Gregorian calendar.
 * @param month - The month as a number (1-12), full month name (e.g., "January"), or short name (e.g., "Jan").
 * @param strict - If true, throws errors for invalid inputs. If false, returns an empty string.
 * @returns The Bangla name of the month or an empty string if invalid and strict is false.
 * @throws {Error} If the input is invalid and strict is true.
 * @example
 * ```typescript
 * convertToBanglaMonth(1); // "জানুয়ারি"
 * convertToBanglaMonth("January"); // "জানুয়ারি"
 * convertToBanglaMonth("jan"); // "জানুয়ারি"
 * convertToBanglaMonth("JAN"); // "জানুয়ারি"
 * convertToBanglaMonth(13); // Throws an error (invalid month)
 * convertToBanglaMonth(13, false); // ""
 * ```
 * @category Date & Time
 */
export function convertToBanglaMonth(
    month: number | string,
    strict: boolean = true
): string {
    return convertMonth(
        month,
        GREGORIAN_MONTHS,
        GREGORIAN_FULL_MONTH_NAMES,
        GREGORIAN_SHORT_MONTH_NAMES,
        strict
    );
}

/**
 * Converts a month to its Bangla calendar month name.
 * @param month - The month as a number (1-12), full month name (e.g., "Boishakh"), or short name (e.g., "Boi").
 * @param strict - If true, throws errors for invalid inputs. If false, returns an empty string.
 * @returns The Bangla calendar month name or an empty string if invalid and strict is false.
 * @throws {Error} If the input is invalid and strict is true.
 * @example
 * ```typescript
 * getBanglaCalendarMonth(1); // "বৈশাখ"
 * getBanglaCalendarMonth("Boishakh"); // "বৈশাখ"
 * getBanglaCalendarMonth("boi"); // "বৈশাখ"
 * getBanglaCalendarMonth("BOI"); // "বৈশাখ"
 * getBanglaCalendarMonth(13); // Throws an error (invalid month)
 * getBanglaCalendarMonth(13, false); // ""
 * ```
 * @category Date & Time
 */
export function getBanglaCalendarMonth(
    month: number | string,
    strict: boolean = true
): string {
    return convertMonth(
        month,
        BANGLA_CALENDAR_MONTHS,
        BANGLA_CALENDAR_FULL_MONTH_NAMES,
        BANGLA_CALENDAR_SHORT_MONTH_NAMES,
        strict
    );
}

/**
 * Converts a day of the week to its Bangla name.
 * @param day - The day as a number (0-6), full day name (e.g., "Sunday"), or short name (e.g., "Sun").
 * @param weekStartDay - The start day of the week. Can be a full day name (e.g., "Sunday") or short name (e.g., "Sun"). Default is "Sunday".
 * @param strict - If true, throws errors for invalid inputs. If false, returns an empty string.
 * @returns The Bangla name of the day or an empty string if invalid and strict is false.
 * @throws {Error} If the input is invalid and strict is true.
 * @example
 * ```typescript
 * convertToBanglaDay(0); // "রবিবার" (default week start day is Sunday)
 * convertToBanglaDay(0, "Monday"); // "সোমবার" (week start day is Monday)
 * convertToBanglaDay(0, "mon"); // "সোমবার" (week start day is Monday)
 * convertToBanglaDay("Sunday"); // "রবিবার"
 * convertToBanglaDay("sun"); // "রবিবার"
 * convertToBanglaDay("SUN"); // "রবিবার"
 * convertToBanglaDay(7); // Throws an error (invalid day)
 * convertToBanglaDay(7, "Sunday", false); // ""
 * ```
 * @category Date & Time
 */
export function convertToBanglaDay(
    day: number | string,
    weekStartDay: string = 'Sunday',
    strict: boolean = true
): string {
    // Normalize weekStartDay (trim and convert to lowercase)
    const normalizedWeekStartDay = weekStartDay.trim().toLowerCase();

    // Determine the start day index
    let startDayIndex: number;

    // Check full day names
    if (FULL_DAY_NAMES[normalizedWeekStartDay]) {
        startDayIndex = Object.keys(FULL_DAY_NAMES).indexOf(
            normalizedWeekStartDay
        );
    }
    // Check short day names
    else if (SHORT_DAY_NAMES[normalizedWeekStartDay]) {
        startDayIndex = Object.keys(SHORT_DAY_NAMES).indexOf(
            normalizedWeekStartDay
        );
    }
    // If no match, handle based on strict mode
    else {
        if (strict) {
            throw new Error(
                'Invalid weekStartDay. Must be a valid full or short day name.'
            );
        }
        return '';
    }

    // Handle number input (0-6)
    if (typeof day === 'number') {
        if (day < 0 || day > 6) {
            if (strict) {
                throw new Error('Invalid day number. Must be between 0 and 6.');
            }
            return '';
        }

        // Adjust the day index based on the week start day
        const adjustedDayIndex = (day + startDayIndex) % 7;
        return BANGLA_DAYS[adjustedDayIndex];
    }

    // Handle string input (full or short day name)
    if (typeof day === 'string') {
        // Normalize the input (trim and convert to lowercase)
        const normalizedDay = day.trim().toLowerCase();

        // Check full day names
        if (FULL_DAY_NAMES[normalizedDay]) {
            return FULL_DAY_NAMES[normalizedDay];
        }

        // Check short day names
        if (SHORT_DAY_NAMES[normalizedDay]) {
            return SHORT_DAY_NAMES[normalizedDay];
        }

        // If no match, handle based on strict mode
        if (strict) {
            throw new Error(
                'Invalid day name. Must be a valid full or short day name.'
            );
        }
        return '';
    }

    // If the input is neither a number nor a string, handle based on strict mode
    if (strict) {
        throw new Error(
            'Invalid input. Must be a number (0-6) or a string (full or short day name).'
        );
    }
    return '';
}
