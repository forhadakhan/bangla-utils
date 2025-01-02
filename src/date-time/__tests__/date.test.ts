import {
    convertToBanglaMonth,
    getBanglaCalendarMonth,
    convertToBanglaDay,
} from '../..'; // Import functions from the main module

describe('convertToBanglaMonth', () => {
    // Valid Inputs
    test('converts number to Bangla month', () => {
        expect(convertToBanglaMonth(1)).toBe('জানুয়ারি');
        expect(convertToBanglaMonth(12)).toBe('ডিসেম্বর');
    });

    test('converts full month name to Bangla month (case insensitive)', () => {
        expect(convertToBanglaMonth('January')).toBe('জানুয়ারি');
        expect(convertToBanglaMonth('JANUARY')).toBe('জানুয়ারি');
        expect(convertToBanglaMonth('january')).toBe('জানুয়ারি');
    });

    test('converts short month name to Bangla month (case insensitive)', () => {
        expect(convertToBanglaMonth('Jan')).toBe('জানুয়ারি');
        expect(convertToBanglaMonth('JAN')).toBe('জানুয়ারি');
        expect(convertToBanglaMonth('jan')).toBe('জানুয়ারি');
    });

    // Invalid Inputs (strict mode)
    test('throws error for invalid month number in strict mode', () => {
        expect(() => convertToBanglaMonth(0)).toThrow(
            'Invalid month number. Must be between 1 and 12.'
        );
        expect(() => convertToBanglaMonth(13)).toThrow(
            'Invalid month number. Must be between 1 and 12.'
        );
    });

    test('throws error for invalid month name in strict mode', () => {
        expect(() => convertToBanglaMonth('InvalidMonth')).toThrow(
            'Invalid month name. Must be a valid full or short month name.'
        );
    });

    // Non-strict mode
    test('returns empty string for invalid month number in non-strict mode', () => {
        expect(convertToBanglaMonth(0, false)).toBe('');
        expect(convertToBanglaMonth(13, false)).toBe('');
    });

    test('returns empty string for invalid month name in non-strict mode', () => {
        expect(convertToBanglaMonth('InvalidMonth', false)).toBe('');
    });
});

describe('getBanglaCalendarMonth', () => {
    // Valid Inputs
    test('converts number to Bangla calendar month', () => {
        expect(getBanglaCalendarMonth(1)).toBe('বৈশাখ');
        expect(getBanglaCalendarMonth(12)).toBe('চৈত্র');
    });

    test('converts full month name to Bangla calendar month (case insensitive)', () => {
        expect(getBanglaCalendarMonth('Boishakh')).toBe('বৈশাখ');
        expect(getBanglaCalendarMonth('BOISHAKH')).toBe('বৈশাখ');
        expect(getBanglaCalendarMonth('boishakh')).toBe('বৈশাখ');
    });

    test('converts short month name to Bangla calendar month (case insensitive)', () => {
        expect(getBanglaCalendarMonth('Boi')).toBe('বৈশাখ');
        expect(getBanglaCalendarMonth('BOI')).toBe('বৈশাখ');
        expect(getBanglaCalendarMonth('boi')).toBe('বৈশাখ');
    });

    // Invalid Inputs (strict mode)
    test('throws error for invalid month number in strict mode', () => {
        expect(() => getBanglaCalendarMonth(0)).toThrow(
            'Invalid month number. Must be between 1 and 12.'
        );
        expect(() => getBanglaCalendarMonth(13)).toThrow(
            'Invalid month number. Must be between 1 and 12.'
        );
    });

    test('throws error for invalid month name in strict mode', () => {
        expect(() => getBanglaCalendarMonth('InvalidMonth')).toThrow(
            'Invalid month name. Must be a valid full or short month name.'
        );
    });

    // Non-strict mode
    test('returns empty string for invalid month number in non-strict mode', () => {
        expect(getBanglaCalendarMonth(0, false)).toBe('');
        expect(getBanglaCalendarMonth(13, false)).toBe('');
    });

    test('returns empty string for invalid month name in non-strict mode', () => {
        expect(getBanglaCalendarMonth('InvalidMonth', false)).toBe('');
    });
});

describe('convertToBanglaDay', () => {
    // Valid Inputs
    test('converts number to Bangla day (default week start: Sunday)', () => {
        expect(convertToBanglaDay(0)).toBe('রবিবার');
        expect(convertToBanglaDay(6)).toBe('শনিবার');
    });

    test('converts number to Bangla day (custom week start: Monday)', () => {
        expect(convertToBanglaDay(0, 'Monday')).toBe('সোমবার');
        expect(convertToBanglaDay(0, 'mon')).toBe('সোমবার');
    });

    test('converts full day name to Bangla day (case insensitive)', () => {
        expect(convertToBanglaDay('Sunday')).toBe('রবিবার');
        expect(convertToBanglaDay('SUNDAY')).toBe('রবিবার');
        expect(convertToBanglaDay('sunday')).toBe('রবিবার');
    });

    test('converts short day name to Bangla day (case insensitive)', () => {
        expect(convertToBanglaDay('Sun')).toBe('রবিবার');
        expect(convertToBanglaDay('SUN')).toBe('রবিবার');
        expect(convertToBanglaDay('sun')).toBe('রবিবার');
    });

    // Invalid Inputs (strict mode)
    test('throws error for invalid day number in strict mode', () => {
        expect(() => convertToBanglaDay(-1)).toThrow(
            'Invalid day number. Must be between 0 and 6.'
        );
        expect(() => convertToBanglaDay(7)).toThrow(
            'Invalid day number. Must be between 0 and 6.'
        );
    });

    test('throws error for invalid day name in strict mode', () => {
        expect(() => convertToBanglaDay('InvalidDay')).toThrow(
            'Invalid day name. Must be a valid full or short day name.'
        );
    });

    test('throws error for invalid week start day in strict mode', () => {
        expect(() => convertToBanglaDay(0, 'InvalidDay')).toThrow(
            'Invalid weekStartDay. Must be a valid full or short day name.'
        );
    });

    // Non-strict mode
    test('returns empty string for invalid day number in non-strict mode', () => {
        expect(convertToBanglaDay(-1, 'Sunday', false)).toBe('');
        expect(convertToBanglaDay(7, 'Sunday', false)).toBe('');
    });

    test('returns empty string for invalid day name in non-strict mode', () => {
        expect(convertToBanglaDay('InvalidDay', 'Sunday', false)).toBe('');
    });

    test('returns empty string for invalid week start day in non-strict mode', () => {
        expect(convertToBanglaDay(0, 'InvalidDay', false)).toBe('');
    });
});
