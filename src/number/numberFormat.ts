/**
 * FILE: src/number/numberFormat.ts
 * DESC: Provides functions to format numbers with Bangla numbers.
 */
import { toBanglaDigits, toEnglishDigits } from './convertDigits';
import { isValidNumberInput, isNull } from '../utils';
// import { BANGLA_DIGITS, ENGLISH_DIGITS_REGEX } from './constants';

export const BANGLA_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
export const ENGLISH_DIGITS_REGEX = /^[0-9]+(\.[0-9]+)?$/;

/**
 * Converts a Bangla number string to English digits.
 *
 * @param banglaNumber - A string containing Bangla digits.
 * @returns A string with the corresponding English digits.
 */
function convertBanglaToEnglish(banglaNumber: string): string {
    return banglaNumber
        .split('')
        .map((char) => {
            const index = BANGLA_DIGITS.indexOf(char);
            return index !== -1 ? String(index) : char;
        })
        .join('');
}

/**
 * Checks whether a given input is a valid number in either Bangla or English digits.
 * Considers negative and floating-point numbers.
 *
 * @param input - The input to validate, which can be a number or a string.
 * @returns `true` if the input is a valid number; `false` otherwise.
 *
 * @example
 * isValidNumber(12345); // true (English number)
 * isValidNumber(-123.45); // true (negative floating point)
 * isValidNumber("১২৩৪৫"); // true (Bangla number)
 * isValidNumber("-১২৩.৪৫"); // true (Bangla negative floating point)
 * isValidNumber("abc"); // false (invalid string)
 * isValidNumber("  ১২৩৪৫ "); // true (trimmed Bangla number)
 * isValidNumber(""); // false (empty string)
 * isValidNumber(Infinity); // false (not finite)
 * isValidNumber(null); // false (invalid type)
 *
 * @category Validation
 */
export function isValidNumber(input: string | number): boolean {
    if (input === '-' || input === '' || input === null || input === undefined)
        return false;

    // If input is of type number, ensure it's finite and not NaN
    if (typeof input === 'number' && Number.isFinite(input)) return true;

    // Handle input as string
    if (typeof input === 'string') {
        let inputStr = input.trim();
        if (inputStr[0] === '.' || inputStr.charAt(inputStr.length - 1) === '.')
            return false;
        if (inputStr[0] === '-') inputStr = inputStr.slice(1);

        // Try converting the string to a number directly
        const numericValue = Number(inputStr);
        if (Number.isFinite(numericValue)) return true;

        // Check if the string has more than one dot
        const dotCount = inputStr.split('.').length - 1;
        if (dotCount > 1) return false;

        // Check if the string contains any invalid character (anything other than Bangla digits, English digits, or dot)
        const isValidCharacters = [...inputStr].every(
            (char) => BANGLA_DIGITS.includes(char) || /^[0-9.]$/.test(char)
        );
        if (!isValidCharacters) return false;

        // Handle Bangla number conversion
        const isBanglaNumber = inputStr
            .split('')
            .every((char) => BANGLA_DIGITS.includes(char) || char === '.');
        if (isBanglaNumber) {
            const englishNumberStr = convertBanglaToEnglish(inputStr);
            const englishNumericValue = Number(englishNumberStr);
            if (Number.isFinite(englishNumericValue)) return true;
        }
    }

    return false;
}

/**
 * Similar to {@link isValidNumber}
 */
export { isValidNumber as isNumber };

/**
 * Similar to {@link isValidNumber}
 */
export { isValidNumber as validNumber };

/**
 * Similar to {@link isValidNumber}
 */
export { isValidNumber as isNumeric };

function removeLeadingZeroOrComma(input: string): string {
    // Loop to remove leading '০' or ',' until the first character is valid
    while (input.startsWith('০') || input.startsWith(',')) {
        input = input.slice(1); // Remove the first character
    }
    return input;
}
function formatWithCommas(input: string): string {
    // Reverse the string for easier processing
    const reversedInput = input.split('').reverse().join('');

    // Insert commas every 2 characters, but handle the last group of 3 separately
    let formatted = '';
    for (let i = 0; i < reversedInput.length; i++) {
        if (i > 2 && (i - 3) % 2 === 0) {
            formatted += ',';
        }
        formatted += reversedInput[i];
    }

    // Reverse back to the original order
    return formatted.split('').reverse().join('');
}

/**
 * Formats a number with Bangla digits and adds commas for thousands, lakhs, crores, etc.
 * @param num - The number or string to format.
 * @param strict - If true, throws an error for invalid input.
 * @param inEnglish - If true, returns the result in English digits.
 * @returns The formatted string with Bangla digits and commas.
 * @throws {Error} If the input is null, undefined, or exceeds the maximum safe integer value.
 * @example
 * formatNumber(12345); // "১২,৩৪৫"
 * formatNumber('-১২৩৪৫'); // "-১২,৩৪৫"
 * formatNumber('  -১২৩৪৫   '); // "-১২,৩৪৫"  (automatically trims the input)
 * formatNumber('১২৩৪৫', true, true); // "12,345" (if inEnglish is true, returns the result in English digits)
 * formatNumber(1234567890123456); // "১,২৩,৪৫,৬৭,৮৯,০১,২৩,৪৫৬"
 * formatNumber("১২৩৪৫৬৭৮৯০১২৩৪৫৬"); // "১,২৩,৪৫,৬৭,৮৯,০১,২৩,৪৫৬"
 * formatNumber("১,২১৩,৪৫১,২৩৪,৫১২,৩৪৫"); // "১,২১,৩৪,৫১,২৩,৪৫,১২,৩৪৫"
 * formatNumber("abc"); // Throws an error (if strict is true)
 * formatNumber("abc", false); // '' (if strict is false, returns an empty string)
 *
 * @category Number
 */
export function formatNumber(
    num: number | string,
    strict: boolean = true,
    inEnglish: boolean = false
): string {
    // Check for null or undefined
    if (isNull(num)) {
        if (strict) throw new Error('Input cannot be null or undefined');
        return '';
    }
    if (num === '') {
        if (strict) throw new Error('Invalid number input');
        return '';
    }

    // Convert the input to a number if it's a string
    if (typeof num === 'string') {
        num = num.trim();
        num = num.replace(/,/g, ''); // Remove commas
        num = toEnglishDigits(num); // Convert Bangla digits to English digits
        if (!isValidNumberInput(Number(num), strict)) {
            return '';
        }
        if (!isValidNumber(num)) {
            if (strict) throw new Error('Invalid number input');
            return '';
        }
    } else {
        if (!isValidNumberInput(num, strict)) {
            return '';
        }
        if (!isValidNumber(num)) {
            if (strict) throw new Error('Invalid number input');
            return '';
        }
        num = num.toString();
    }

    const sign = num[0] === '-' ? '-' : ''; // Preserve the sign
    const unsignedNumber = sign ? num.slice(1) : num; // Remove the sign if it exists

    const [left, right, ...extra] = unsignedNumber.split('.'); // Destructure the split result
    if (extra.length > 0) {
        throw new Error('Not a valid number: more than one dot detected.');
    }

    const formattedLeft = formatWithCommas(left);
    const formattedRight = right ? `.${right}` : ''; // Add the right part if it exists
    const formattedNumber = `${sign}${removeLeadingZeroOrComma(formattedLeft + formattedRight)}`;
    return inEnglish ? formattedNumber : toBanglaDigits(formattedNumber);
}
