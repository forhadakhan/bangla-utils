import { isValidNumber, isNumber, formatNumber } from '../..'; // Import the function from the src index file

describe('isValidNumber', () => {
    // Valid numbers in English and Bangla
    it('should return true for valid English number', () => {
        expect(isValidNumber(12345)).toBe(true);
        expect(isValidNumber('12345')).toBe(true);
    });

    it('should return true for valid Bangla number', () => {
        expect(isValidNumber('১২৩৪৫')).toBe(true);
        expect(isValidNumber('১২৩.৪৫')).toBe(true);
    });

    it('should return true for negative numbers', () => {
        expect(isValidNumber(-12345)).toBe(true);
        expect(isValidNumber('-12345')).toBe(true);
        expect(isValidNumber('-১২৩৪৫')).toBe(true);
        expect(isValidNumber('-123.45')).toBe(true);
        expect(isValidNumber('-১২৩.৪৫')).toBe(true);
    });

    it('should return true for floating point numbers', () => {
        expect(isValidNumber(123.45)).toBe(true);
        expect(isValidNumber('123.45')).toBe(true);
        expect(isValidNumber('১২৩.৪৫')).toBe(true);
    });

    it('should return true for valid numbers with spaces around them', () => {
        // expect(isValidNumber('   12345  ')).toBe(true);
        expect(isValidNumber('   -12345   ')).toBe(true);
        expect(isValidNumber('   ১২৩৪৫  ')).toBe(true);
    });

    // Invalid numbers
    it('should return false for invalid strings', () => {
        expect(isValidNumber('abc')).toBe(false);
        expect(isValidNumber('12abc')).toBe(false);
        expect(isValidNumber(' 12,345 ')).toBe(false); // Comma is invalid
    });

    it('should return false for decimal point alone', () => {
        expect(isValidNumber('.')).toBe(false);
    });

    it('should return false for empty string', () => {
        expect(isValidNumber('')).toBe(false);
    });

    it('should return false for Infinity and NaN', () => {
        expect(isValidNumber(Infinity)).toBe(false);
        expect(isValidNumber(NaN)).toBe(false);
    });

    it('should return false for number with decimal point at the start or end', () => {
        expect(isValidNumber('.123')).toBe(false);
        expect(isValidNumber('123.')).toBe(false);
        expect(isValidNumber('-123.')).toBe(false);
        expect(isValidNumber('123.-')).toBe(false);
    });

    // Edge case: leading or trailing zeros
    it('should return true for valid number with leading/trailing zeros', () => {
        expect(isValidNumber('00123')).toBe(true);
        expect(isValidNumber('123.000')).toBe(true);
    });

    // Invalid Bangla with incorrect characters
    it('should return false for invalid Bangla numbers with incorrect characters', () => {
        expect(isValidNumber('১২৩৪৫abc')).toBe(false);
        expect(isValidNumber('১২৩৪৫.abc')).toBe(false);
    });

    // Should handle `0` correctly
    it('should return true for zero', () => {
        expect(isValidNumber('0')).toBe(true);
        expect(isValidNumber(0)).toBe(true);
    });
});

describe('isNumber function', () => {
    it('should return true for valid integer strings with English digits', () => {
        expect(isNumber('123')).toBe(true);
    });

    it('should return true for valid floating-point strings with English digits', () => {
        expect(isNumber('123.45')).toBe(true);
    });

    it('should return true for valid number inputs (English digits)', () => {
        expect(isNumber(123)).toBe(true);
        expect(isNumber(123.45)).toBe(true);
    });

    it('should return true for valid Bangla digits in string', () => {
        expect(isNumber('১২৩')).toBe(true);
    });

    it('should return true for valid floating-point Bangla digits', () => {
        expect(isNumber('১২৩.৪৫')).toBe(true);
    });

    it('should return false for non-numeric strings', () => {
        expect(isNumber('123abc')).toBe(false);
        expect(isNumber('abc')).toBe(false);
        expect(isNumber('অআই')).toBe(false);
    });

    it('should return false for strings with special characters', () => {
        expect(isNumber('১২৩!@#')).toBe(false);
        expect(isNumber('123!@#')).toBe(false);
        expect(isNumber('!@#')).toBe(false);
    });

    it('should return true for an empty string (if allowed)', () => {
        expect(isNumber('')).toBe(false);
    });

    it('should return false for a string containing only a decimal point', () => {
        expect(isNumber('.')).toBe(false);
    });

    it('should return false for a string containing only a negative sign', () => {
        expect(isNumber('-')).toBe(false);
    });

    it('should return true for 0 as input (both string and number)', () => {
        expect(isNumber(0)).toBe(true);
        expect(isNumber('0')).toBe(true);
        expect(isNumber('০')).toBe(true);
    });

    it('should return false for input with multiple decimal points', () => {
        expect(isNumber('123.45.67')).toBe(false);
        expect(isNumber('১২৩.৪৫.৬৭')).toBe(false);
    });
});

describe('formatNumber', () => {
    it('should format positive integer correctly', () => {
        expect(formatNumber(12345)).toBe('১২,৩৪৫');
        expect(formatNumber('12345')).toBe('১২,৩৪৫');
        expect(formatNumber('১২৩৪৫')).toBe('১২,৩৪৫');
        expect(formatNumber(12345, false, true)).toBe('12,345');
        expect(formatNumber('12345', false, true)).toBe('12,345');
        expect(formatNumber('১২৩৪৫', false, true)).toBe('12,345');
    });

    it('should format negative integer correctly', () => {
        expect(formatNumber(-12345)).toBe('-১২,৩৪৫');
        expect(formatNumber('-12345')).toBe('-১২,৩৪৫');
        expect(formatNumber('-১২৩৪৫')).toBe('-১২,৩৪৫');
        expect(formatNumber(-12345, false, true)).toBe('-12,345');
        expect(formatNumber('-12345', false, true)).toBe('-12,345');
        expect(formatNumber('-১২৩৪৫', false, true)).toBe('-12,345');
    });

    it('should format floating point numbers correctly', () => {
        expect(formatNumber(12345.67)).toBe('১২,৩৪৫.৬৭');
        expect(formatNumber('12345.67')).toBe('১২,৩৪৫.৬৭');
        expect(formatNumber('১২৩৪৫.৬৭')).toBe('১২,৩৪৫.৬৭');
        expect(formatNumber(12345.67, false, true)).toBe('12,345.67');
        expect(formatNumber('12345.67', false, true)).toBe('12,345.67');
        expect(formatNumber('১২৩৪৫.৬৭', false, true)).toBe('12,345.67');
    });

    it('should format large numbers correctly', () => {
        expect(formatNumber(1234567890)).toBe('১,২৩,৪৫,৬৭,৮৯০');
        expect(formatNumber('1234567890')).toBe('১,২৩,৪৫,৬৭,৮৯০');
        expect(formatNumber('১২৩৪৫৬৭৮৯০')).toBe('১,২৩,৪৫,৬৭,৮৯০');
        expect(formatNumber(1234567890, true, true)).toBe('1,23,45,67,890');
        expect(formatNumber('1234567890', true, true)).toBe('1,23,45,67,890');
        expect(formatNumber('১২৩৪৫৬৭৮৯০', true, true)).toBe('1,23,45,67,890');
    });

    it('should format too large numbers correctly', () => {
        expect(formatNumber(1234567890123456)).toBe('১,২৩,৪৫,৬৭,৮৯,০১,২৩,৪৫৬');
        expect(formatNumber('1234567890123456')).toBe(
            '১,২৩,৪৫,৬৭,৮৯,০১,২৩,৪৫৬'
        );
        expect(formatNumber('১২৩৪৫৬৭৮৯০১২৩৪৫৬')).toBe(
            '১,২৩,৪৫,৬৭,৮৯,০১,২৩,৪৫৬'
        );
        expect(formatNumber(1234567890123456, true, true)).toBe(
            '1,23,45,67,89,01,23,456'
        );
        expect(formatNumber('1234567890123456', true, true)).toBe(
            '1,23,45,67,89,01,23,456'
        );
        expect(formatNumber('১২৩৪৫৬৭৮৯০১২৩৪৫৬', true, true)).toBe(
            '1,23,45,67,89,01,23,456'
        );
    });

    it('should reformat incorrectly formatted numbers', () => {
        expect(formatNumber('1,213,451,234,512,345')).toBe(
            '১,২১,৩৪,৫১,২৩,৪৫,১২,৩৪৫'
        );
        expect(formatNumber('1,213,451,234,512,345', true, true)).toBe(
            '1,21,34,51,23,45,12,345'
        );
        expect(formatNumber('১,২১৩,৪৫১,২৩৪,৫১২,৩৪৫')).toBe(
            '১,২১,৩৪,৫১,২৩,৪৫,১২,৩৪৫'
        );
        expect(formatNumber('১,২১৩,৪৫১,২৩৪,৫১২,৩৪৫', true, true)).toBe(
            '1,21,34,51,23,45,12,345'
        );
    });

    it('should throw an error for non-numeric string input in strict mode', () => {
        expect(() => formatNumber('abc', true)).toThrow(
            'Input must be a valid finite number.'
        );
        expect(() => formatNumber('12a34', true)).toThrow(
            'Input must be a valid finite number.'
        );
        expect(() => formatNumber('১২অ৩৪', true)).toThrow(
            'Input must be a valid finite number.'
        );
    });

    it('should throw an error for empty string input in strict mode', () => {
        expect(() => formatNumber('', true)).toThrow('Invalid number input');
    });

    it('should throw an error for non-finite number (NaN)', () => {
        expect(() => formatNumber(NaN, true)).toThrow(
            'Input must be a valid finite number.'
        );
    });

    it('should throw an error for non-finite number (Infinity)', () => {
        expect(() => formatNumber(Infinity, true)).toThrow(
            'Input must be a valid finite number.'
        );
    });

    it('should throw an error for multiple dots in number string', () => {
        expect(() => formatNumber('12.34.56', true)).toThrow(
            'Input must be a valid finite number.'
        );
        expect(() => formatNumber('১২.৩৪.৫৬', true)).toThrow(
            'Input must be a valid finite number.'
        );
    });

    it('should throw an error for incorrect dots in number string', () => {
        expect(() => formatNumber('12.34.56', true)).toThrow(
            'Input must be a valid finite number.'
        );
        expect(() => formatNumber('12.34.56', true)).toThrow(
            'Input must be a valid finite number.'
        );
    });

    it('should format large floating point numbers correctly', () => {
        expect(formatNumber(1234567.89)).toBe('১২,৩৪,৫৬৭.৮৯');
        expect(formatNumber('1234567.89')).toBe('১২,৩৪,৫৬৭.৮৯');
        expect(formatNumber('১২৩৪৫৬৭.৮৯')).toBe('১২,৩৪,৫৬৭.৮৯');
        expect(formatNumber(1234567.89, false, true)).toBe('12,34,567.89');
        expect(formatNumber('1234567.89', false, true)).toBe('12,34,567.89');
        expect(formatNumber('১২৩৪৫৬৭.৮৯', false, true)).toBe('12,34,567.89');
    });

    it('should handle leading/trailing spaces', () => {
        expect(formatNumber('  12345 ')).toBe('১২,৩৪৫');
        expect(formatNumber('  -12345  ')).toBe('-১২,৩৪৫');
        expect(formatNumber('  -১২৩৪৫  ')).toBe('-১২,৩৪৫');
        expect(formatNumber('  12345 ', false, true)).toBe('12,345');
        expect(formatNumber('  -12345  ', false, true)).toBe('-12,345');
        expect(formatNumber('  -১২৩৪৫  ', false, true)).toBe('-12,345');
    });

    it('should return an empty string for invalid input in non-strict mode', () => {
        expect(formatNumber('abc', false)).toBe('');
        expect(formatNumber('কখগ', false)).toBe('');
    });

    it('should handle single-digit input correctly', () => {
        expect(formatNumber(5)).toBe('৫');
        expect(formatNumber('5')).toBe('৫');
        expect(formatNumber('৫')).toBe('৫');
        expect(formatNumber(5, true, true)).toBe('5');
        expect(formatNumber('5', true, true)).toBe('5');
        expect(formatNumber('৫', true, true)).toBe('5');
    });
});
