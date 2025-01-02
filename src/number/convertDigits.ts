/**
 * FILE: `src/number/convertDigits.ts`
 * DESC: This utility converts a given number to Bangla/English digits, checks for validity,
 * or returns the original number if it's already in the desired format.
 */

import { isNull } from '../utils';
import {
    BANGLA_DIGITS,
    ENGLISH_DIGITS_REGEX,
    BANGLA_TO_ENGLISH_MAP,
    ENGLISH_TO_BANGLA_MAP,
} from './constants';
import { isValidNumberInput } from '../utils';
import { isNumber } from './numberFormat';

/**
 * Helper function to throw an error for invalid inputs.
 * @param input - The input value to check.
 * @param strict - If `true`, throws an error for invalid input.
 * @param numberCheck - The function that checks the validity of the number.
 * @throws {Error} If the input is invalid or not a number/string.
 */
function validateInput(
    input: string | number,
    strict: boolean,
    numberCheck: (input: string | number) => boolean
): void {
    if (typeof input !== 'number' && typeof input !== 'string') {
        throw new Error('Input must be a number or string.');
    }

    if (strict && !numberCheck(input)) {
        throw new Error(
            'Invalid input: Input must consist of only numeric digits.'
        );
    }
}

/**
 * Helper function to convert characters in the input string based on a given map.
 * This function replaces characters in the input string with corresponding mapped characters.
 * If a character does not exist in the map, it is retained as is.
 *
 * @param input - The string to be processed, where each character will be checked for conversion.
 * @param map - A dictionary object that maps characters to their replacements.
 * @returns The converted string where each character has been replaced according to the provided map.
 * @example
 * ```typescript
 * convertDigits("123", { "1": "a", "2": "b" }); // "abc"
 * ```
 */
function convertDigits(input: string, map: { [key: string]: string }): string {
    return input
        .split('') // Split the input string into an array of characters
        .map((char) => map[char] || char) // Replace each character based on the map, or keep the original character if not found in the map
        .join(''); // Join the array back into a string
}

/**
 * Converts a number or numeric string to Bangla digits.
 * Non-digit characters and existing Bangla digits are retained as is.
 * @param num - The number or string to convert.
 * @param strict - If `true`, throws an error for invalid input.
 * @returns The converted string with Bangla digits.
 * @throws {Error} If the input is `null`, `undefined`, or exceeds the maximum safe integer value.
 * @example
 * ```typescript
 * toBanglaDigits(123); // "১২৩"
 * toBanglaDigits("123.45"); // "১২৩.৪৫"
 * toBanglaDigits("১২৩.৪৫"); // "১২৩.৪৫" (no change)
 * toBanglaDigits("abc"); // "abc" (non-numeric characters are retained)
 * ```
 * @category Number
 */
export function toBanglaDigits(
    num: number | string,
    strict: boolean = false
): string {
    if (isNull(num)) throw new Error('Input must be a number or string.');
    validateInput(num, strict, isNumber);

    // Additional checks for number type
    isValidNumberInput(num);

    const numStr = `${num}`;
    return convertDigits(numStr, ENGLISH_TO_BANGLA_MAP);
}

/**
 * Similar to {@link toBanglaDigits}
 */
export { toBanglaDigits as toBengaliDigits };

/**
 * Similar to {@link toBanglaDigits}
 */
export { toBanglaDigits as convertToBengaliDigits };

/**
 * Similar to {@link toBanglaDigits}
 */
export { toBanglaDigits as toBanglaNumber };

/**
 * Similar to {@link toBanglaDigits}
 */
export { toBanglaDigits as convertToBanglaNumber };

/**
 * Similar to {@link toBanglaDigits}
 */
export { toBanglaDigits as toBengaliNumber };

/**
 * Similar to {@link toBanglaDigits}
 */
export { toBanglaDigits as convertToBengaliNumber };

/**
 * Similar to {@link toBanglaDigits}
 */
export { toBanglaDigits as reverseConvertToEnglishDigits };

/**
 * Similar to {@link toBanglaDigits}
 */
export { toBanglaDigits as reverseConvertToEnglishNumber };

/**
 * Converts Bangla digits to English digits.
 * Non-digit characters and existing English digits are retained as is.
 * @param num - The string or number to convert.
 * @param strict - If `true`, throws an error for invalid input.
 * @returns The converted string with English digits.
 * @throws {Error} If the input is `null`, `undefined`, or exceeds the maximum safe integer value.
 * @example
 * ```typescript
 * toEnglishDigits("১২৩"); // "123"
 * toEnglishDigits("১২৩.৪৫"); // "123.45"
 * toEnglishDigits("123.45"); // "123.45" (no change)
 * toEnglishDigits("abc"); // "abc" (non-numeric characters are retained)
 * ```
 * @category Number
 */
export function toEnglishDigits(
    num: string | number,
    strict: boolean = false
): string {
    if (isNull(num)) throw new Error('Input must be a number or string.');
    validateInput(num, strict, isNumber);

    // Additional checks for number type
    isValidNumberInput(num);

    const numStr = `${num}`;
    return convertDigits(numStr, BANGLA_TO_ENGLISH_MAP);
}

/**
 * Similar to {@link toEnglishDigits}
 */
export { toEnglishDigits as toEnglishNumber };

/**
 * Similar to {@link toEnglishDigits}
 */
export { toEnglishDigits as convertToEnglishNumber };

/**
 * Similar to {@link toEnglishDigits}
 */
export { toEnglishDigits as reverseConvertToBanglaDigits };

/**
 * Similar to {@link toEnglishDigits}
 */
export { toEnglishDigits as reverseConvertToBanglaNumber };

/**
 * Similar to {@link toEnglishDigits}
 */
export { toEnglishDigits as reverseConvertToBengaliDigits };

/**
 * Similar to {@link toEnglishDigits}
 */
export { toEnglishDigits as reverseConvertToBengaliNumber };

export default {
    toBanglaDigits,
    toEnglishDigits,
};
