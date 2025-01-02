/**
 * FILE: `src/math/basicOperations.ts`
 * DESC: This file contains basic math operations.
 */

import { toBanglaDigits, toEnglishDigits } from '../number/convertDigits';

/**
 * Adds numbers (can be in Bangla or English digits).
 * Accepts either two arguments (a, b) or an array of numbers.
 *
 * @example
 * ```typescript
 * add("১", "২"); // returns "৩"
 * add([1, 2, 3], undefined, true); // returns "6"
 * add("১০", "২০", true); // returns "30"
 * add([5, 10, 15]); // returns "৩০"
 * ```
 *
 * @category Math
 *
 * @param a - First number (Bangla or English digits) or an array of numbers.
 * @param b - Second number (Bangla or English digits). Optional if `a` is an array.
 * @param en - If true, returns the result in English digits. Default is false (returns Bangla digits).
 * @returns The sum of the numbers.
 * @throws {Error} If the input is invalid or not a number.
 */
export function add(
    a: string | number | Array<string | number>,
    b?: string | number,
    en: boolean = false
): string {
    let numbers: Array<string | number>;

    if (Array.isArray(a)) {
        numbers = a; // Use the array if `a` is an array
    } else if (b !== undefined) {
        numbers = [a, b]; // Use `a` and `b` if `b` is provided
    } else {
        throw new Error('Either provide two arguments or an array of numbers.');
    }

    // Convert all numbers to English digits and sum them
    const sum = numbers.reduce((acc, num) => {
        const parsedNum =
            typeof num === 'string' ? parseFloat(toEnglishDigits(num)) : num;
        if (isNaN(parsedNum)) {
            throw new Error(
                'Invalid input: Input must be a number or numeric string.'
            );
        }
        return Number(acc) + Number(parsedNum);
    }, 0);

    return en ? sum.toString() : toBanglaDigits(sum);
}

/**
 * Subtracts the second number from the first (can be in Bangla or English digits).
 *
 * @example
 * ```typescript
 * subtract("১০", "২"); // returns "৮"
 * subtract(10, 2, true); // returns "8"
 * subtract("২০", "৫", true); // returns "15"
 * subtract("১০০", "৫০"); // returns "৫০"
 * ```
 *
 * @category Math
 *
 * @param a - First number (Bangla or English digits).
 * @param b - Second number (Bangla or English digits).
 * @param en - If true, returns the result in English digits. Default is false (returns Bangla digits).
 * @returns The difference between `a` and `b`.
 * @throws {Error} If the input is invalid or not a number.
 */
export function subtract(
    a: string | number,
    b: string | number,
    en: boolean = false
): string {
    const numA = typeof a === 'string' ? parseFloat(toEnglishDigits(a)) : a;
    const numB = typeof b === 'string' ? parseFloat(toEnglishDigits(b)) : b;

    if (isNaN(numA) || isNaN(numB)) {
        throw new Error(
            'Invalid input: Input must be a number or numeric string.'
        );
    }

    const result = numA - numB;
    return en ? result.toString() : toBanglaDigits(result);
}

/**
 * Multiplies numbers (can be in Bangla or English digits).
 * Accepts either two arguments (a, b) or an array of numbers.
 *
 * @example
 * ```typescript
 * multiply("২", "৩"); // returns "৬"
 * multiply([2, 3, 4], undefined, true); // returns "24"
 * multiply("১০", "৫", true); // returns "50"
 * multiply([5, 10, 2]); // returns "১০০"
 * ```
 *
 * @category Math
 *
 * @param a - First number (Bangla or English digits) or an array of numbers.
 * @param b - Second number (Bangla or English digits). Optional if `a` is an array.
 * @param en - If true, returns the result in English digits. Default is false (returns Bangla digits).
 * @returns The product of the numbers.
 * @throws {Error} If the input is invalid or not a number.
 */
export function multiply(
    a: string | number | Array<string | number>,
    b?: string | number,
    en: boolean = false
): string {
    let numbers: Array<string | number>;

    if (Array.isArray(a)) {
        numbers = a; // Use the array if `a` is an array
    } else if (b !== undefined) {
        numbers = [a, b]; // Use `a` and `b` if `b` is provided
    } else {
        throw new Error('Either provide two arguments or an array of numbers.');
    }

    // Convert all numbers to English digits and multiply them
    const product = numbers.reduce((acc, num) => {
        const parsedNum =
            typeof num === 'string' ? parseFloat(toEnglishDigits(num)) : num;
        if (isNaN(parsedNum)) {
            throw new Error(
                'Invalid input: Input must be a number or numeric string.'
            );
        }
        return Number(acc) * Number(parsedNum);
    }, 1);

    return en ? product.toString() : toBanglaDigits(product);
}

/**
 * Divides the first number by the second (can be in Bangla or English digits).
 *
 * @example
 * ```typescript
 * divide("১০", "২"); // returns "৫"
 * divide(10, 2, true); // returns "5"
 * divide("১০০", "১০", true); // returns "10"
 * divide("৫০", "৫"); // returns "১০"
 * ```
 *
 * @category Math
 *
 * @param a - First number (Bangla or English digits).
 * @param b - Second number (Bangla or English digits).
 * @param en - If true, returns the result in English digits. Default is false (returns Bangla digits).
 * @param decimalPlaces - Number of decimal places to round the result. Default is 12.
 * @returns The quotient of `a` divided by `b`.
 * @throws {Error} If the input is invalid, not a number, or division by zero is attempted.
 */
export function divide(
    a: string | number,
    b: string | number,
    en: boolean = false,
    decimalPlaces: number = 12
): string {
    const numA = typeof a === 'string' ? parseFloat(toEnglishDigits(a)) : a;
    const numB = typeof b === 'string' ? parseFloat(toEnglishDigits(b)) : b;

    if (isNaN(numA) || isNaN(numB)) {
        throw new Error(
            'Invalid input: Input must be a number or numeric string.'
        );
    }

    if (numB === 0) throw new Error('Division by zero is not allowed.');

    // Round the result to the specified number of decimal places
    const factor = Math.pow(10, decimalPlaces);
    const result = Math.round((numA / numB) * factor) / factor;

    return en ? result.toString() : toBanglaDigits(result);
}

/**
 * Returns the remainder of the first number divided by the second (can be in Bangla or English digits).
 *
 * @example
 * ```typescript
 * modulo("১০", "৩"); // returns "১"
 * modulo(10, 3, true); // returns "1"
 * modulo("২০", "৭", true); // returns "6"
 * modulo("১০০", "৩০"); // returns "১০"
 * ```
 *
 * @category Math
 *
 * @param a - First number (Bangla or English digits).
 * @param b - Second number (Bangla or English digits).
 * @param en - If true, returns the result in English digits. Default is false (returns Bangla digits).
 * @returns The remainder of `a` divided by `b`.
 * @throws {Error} If the input is invalid or not a number.
 */
export function modulo(
    a: string | number,
    b: string | number,
    en: boolean = false
): string {
    const numA = typeof a === 'string' ? parseFloat(toEnglishDigits(a)) : a;
    const numB = typeof b === 'string' ? parseFloat(toEnglishDigits(b)) : b;

    if (isNaN(numA) || isNaN(numB)) {
        throw new Error(
            'Invalid input: Input must be a number or numeric string.'
        );
    }

    return en
        ? (numA % Number(numB)).toString()
        : toBanglaDigits(numA % Number(numB));
}

/**
 * Returns the absolute value of a number (can be in Bangla or English digits).
 *
 * @example
 * ```typescript
 * abs("১০"); // returns "১০"
 * abs(10, true); // returns "10"
 * abs("-৫", true); // returns "5"
 * abs("-১০০"); // returns "১০০"
 * ```
 *
 * @category Math
 *
 * @param a - Number (Bangla or English digits).
 * @param en - If true, returns the result in English digits. Default is false (returns Bangla digits).
 * @returns The absolute value of `a`.
 * @throws {Error} If the input is invalid or not a number.
 */
export function abs(a: string | number, en: boolean = false): string {
    const numA = typeof a === 'string' ? parseFloat(toEnglishDigits(a)) : a;

    if (isNaN(numA)) {
        throw new Error(
            'Invalid input: Input must be a number or numeric string.'
        );
    }

    const absoluteValue = Math.abs(numA);
    return en ? absoluteValue.toString() : toBanglaDigits(absoluteValue);
}

/**
 * Returns the square root of a number (can be in Bangla or English digits).
 *
 * @example
 * ```typescript
 * sqrt("২৫"); // returns "৫"
 * sqrt(25, true); // returns "5"
 * sqrt("১০০", true); // returns "10"
 * sqrt("১৬"); // returns "৪"
 * ```
 *
 * @category Math
 *
 * @param a - Number (Bangla or English digits).
 * @param en - If true, returns the result in English digits. Default is false (returns Bangla digits).
 * @param decimalPlaces - Number of decimal places to round the result. Default is 12.
 * @returns The square root of `a`.
 * @throws {Error} If the input is invalid or not a number.
 */
export function sqrt(
    a: string | number,
    en: boolean = false,
    decimalPlaces: number = 12
): string {
    const numA = typeof a === 'string' ? parseFloat(toEnglishDigits(a)) : a;

    if (isNaN(numA)) {
        throw new Error(
            'Invalid input: Input must be a number or numeric string.'
        );
    }

    // Round the result to the specified number of decimal places
    const factor = Math.pow(10, decimalPlaces);
    const result = Math.round(Math.sqrt(numA) * factor) / factor;

    return en ? result.toString() : toBanglaDigits(result);
}

/**
 * Returns the factorial of a number (can be in Bangla or English digits).
 *
 * @example
 * ```typescript
 * factorial("৫"); // returns "১২০"
 * factorial(5, true); // returns "120"
 * factorial("৩", true); // returns "6"
 * factorial("৪"); // returns "২৪"
 * ```
 *
 * @category Math
 *
 * @param a - Number (Bangla or English digits).
 * @param en - If true, returns the result in English digits. Default is false (returns Bangla digits).
 * @returns The factorial of `a`.
 * @throws {Error} If the input is invalid or not a number.
 */
export function factorial(a: string | number, en: boolean = false): string {
    const numA = typeof a === 'string' ? parseFloat(toEnglishDigits(a)) : a;

    if (isNaN(numA) || numA < 0 || numA % 1 !== 0) {
        throw new Error('Invalid input: Input must be a non-negative integer.');
    }

    let result = 1;
    for (let i = 2; i <= numA; i++) {
        result *= i;
    }

    return en ? result.toString() : toBanglaDigits(result);
}

/**
 * Returns the power of a number (can be in Bangla or English digits).
 *
 * @example
 * ```typescript
 * pow("২", "৩"); // returns "৮"
 * pow(2, 3, true); // returns "8"
 * pow("১০", "২", true); // returns "100"
 * pow("৩", "৪"); // returns "৮১"
 * ```
 *
 * @category Math
 *
 * @param a - Base number (Bangla or English digits).
 * @param b - Exponent number (Bangla or English digits).
 * @param en - If true, returns the result in English digits. Default is false (returns Bangla digits).
 * @returns The power of `a` raised to the power of `b`.
 * @throws {Error} If the input is invalid or not a number.
 */
export function pow(
    a: string | number,
    b: string | number,
    en: boolean = false
): string {
    const numA = typeof a === 'string' ? parseFloat(toEnglishDigits(a)) : a;
    const numB = typeof b === 'string' ? parseFloat(toEnglishDigits(b)) : b;

    if (isNaN(numA) || isNaN(numB)) {
        throw new Error(
            'Invalid input: Input must be a number or numeric string.'
        );
    }

    return en
        ? Math.pow(numA, numB).toString()
        : toBanglaDigits(Math.pow(numA, numB));
}

/**
 * Returns the logarithm of a number (can be in Bangla or English digits).
 *
 * @example
 * ```typescript
 * log("১০"); // returns "১"
 * log(10, true); // returns "1"
 * log("১০০", true); // returns "2"
 * log("২.৭১৮"); // returns "১"
 * ```
 *
 * @category Math
 *
 * @param a - Number (Bangla or English digits).
 * @param en - If true, returns the result in English digits. Default is false (returns Bangla digits).
 * @returns The natural logarithm of `a` (rounded to 12 decimal places).
 * @throws {Error} If the input is invalid or not a number.
 */
export function log(a: string | number, en: boolean = false): string {
    const numA = typeof a === 'string' ? parseFloat(toEnglishDigits(a)) : a;

    if (isNaN(numA) || numA <= 0) {
        throw new Error('Invalid input: Input must be a positive number.');
    }

    const factor = Math.pow(10, 12); // Round to 12 decimal places
    const result = Math.round(Math.log(numA) * factor) / factor;

    return en ? result.toString() : toBanglaDigits(result);
}

/**
 * Returns the base 10 logarithm of a number (can be in Bangla or English digits).
 *
 * @example
 * ```typescript
 * log10("১০"); // returns "১"
 * log10(10, true); // returns "1"
 * log10("১০০", true); // returns "2"
 * log10("১০০০"); // returns "৩"
 * ```
 *
 * @category Math
 *
 * @param a - Number (Bangla or English digits).
 * @param en - If true, returns the result in English digits. Default is false (returns Bangla digits).
 * @returns The base 10 logarithm of `a` (rounded to 12 decimal places).
 * @throws {Error} If the input is invalid or not a number.
 */
export function log10(a: string | number, en: boolean = false): string {
    const numA = typeof a === 'string' ? parseFloat(toEnglishDigits(a)) : a;

    if (isNaN(numA) || numA <= 0) {
        throw new Error('Invalid input: Input must be a positive number.');
    }

    const factor = Math.pow(10, 12); // Round to 12 decimal places
    const result = Math.round(Math.log10(numA) * factor) / factor;

    return en ? result.toString() : toBanglaDigits(result);
}

/**
 * Returns the base 2 logarithm of a number (can be in Bangla or English digits).
 *
 * @example
 * ```typescript
 * log2("২"); // returns "১"
 * log2(2, true); // returns "1"
 * log2("৮", true); // returns "3"
 * log2("১৬"); // returns "৪"
 * ```
 *
 * @category Math
 *
 * @param a - Number (Bangla or English digits).
 * @param en - If true, returns the result in English digits. Default is false (returns Bangla digits).
 * @returns The base 2 logarithm of `a` (rounded to 12 decimal places).
 * @throws {Error} If the input is invalid or not a number.
 */
export function log2(a: string | number, en: boolean = false): string {
    const numA = typeof a === 'string' ? parseFloat(toEnglishDigits(a)) : a;

    if (isNaN(numA) || numA <= 0) {
        throw new Error('Invalid input: Input must be a positive number.');
    }

    const factor = Math.pow(10, 12); // Round to 12 decimal places
    const result = Math.round(Math.log2(numA) * factor) / factor;

    return en ? result.toString() : toBanglaDigits(result);
}

/**
 * Returns the sine of an angle in radians (can be in Bangla or English digits).
 *
 * @example
 * ```typescript
 * sin("০"); // returns "০"
 * sin(0, true); // returns "0"
 * sin("১.৫৭", true); // returns "1"
 * sin("৩.১৪"); // returns "০"
 * ```
 *
 * @category Math
 *
 * @param a - Angle in radians (Bangla or English digits).
 * @param en - If true, returns the result in English digits. Default is false (returns Bangla digits).
 * @param decimalPlaces - Number of decimal places to round the result. Default is 12.
 * @returns The sine of `a`.
 * @throws {Error} If the input is invalid or not a number.
 */
export function sin(
    a: string | number,
    en: boolean = false,
    decimalPlaces: number = 12
): string {
    const numA = typeof a === 'string' ? parseFloat(toEnglishDigits(a)) : a;

    if (isNaN(numA)) {
        throw new Error(
            'Invalid input: Input must be a number or numeric string.'
        );
    }

    const factor = Math.pow(10, decimalPlaces);
    const result = Math.round(Math.sin(numA) * factor) / factor;

    return en ? result.toString() : toBanglaDigits(result);
}

/**
 * Returns the cosine of an angle in radians (can be in Bangla or English digits).
 *
 * @example
 * ```typescript
 * cos("০"); // returns "১"
 * cos(0, true); // returns "1"
 * cos("৩.১৪", true); // returns "-1"
 * cos("১.৫৭"); // returns "০"
 * ```
 *
 * @category Math
 *
 * @param a - Angle in radians (Bangla or English digits).
 * @param en - If true, returns the result in English digits. Default is false (returns Bangla digits).
 * @param decimalPlaces - Number of decimal places to round the result. Default is 12.
 * @returns The cosine of `a`.
 * @throws {Error} If the input is invalid or not a number.
 */
export function cos(
    a: string | number,
    en: boolean = false,
    decimalPlaces: number = 12
): string {
    const numA = typeof a === 'string' ? parseFloat(toEnglishDigits(a)) : a;

    if (isNaN(numA)) {
        throw new Error(
            'Invalid input: Input must be a number or numeric string.'
        );
    }

    const factor = Math.pow(10, decimalPlaces);
    const result = Math.round(Math.cos(numA) * factor) / factor;

    return en ? result.toString() : toBanglaDigits(result);
}

/**
 * Returns the tangent of an angle in radians (can be in Bangla or English digits).
 *
 * @example
 * ```typescript
 * tan("০"); // returns "০"
 * tan(0, true); // returns "0"
 * tan("০.৭৮৫", true); // returns "1"
 * tan("১.৫৭"); // returns "০"
 * ```
 *
 * @category Math
 *
 * @param a - Angle in radians (Bangla or English digits).
 * @param en - If true, returns the result in English digits. Default is false (returns Bangla digits).
 * @param decimalPlaces - Number of decimal places to round the result. Default is 12.
 * @returns The tangent of `a`.
 * @throws {Error} If the input is invalid or not a number.
 */
export function tan(
    a: string | number,
    en: boolean = false,
    decimalPlaces: number = 12
): string {
    const numA = typeof a === 'string' ? parseFloat(toEnglishDigits(a)) : a;

    if (isNaN(numA)) {
        throw new Error(
            'Invalid input: Input must be a number or numeric string.'
        );
    }

    const factor = Math.pow(10, decimalPlaces);
    const result = Math.round(Math.tan(numA) * factor) / factor;

    return en ? result.toString() : toBanglaDigits(result);
}

/**
 * A collection of basic and advanced math operations.
 * Supports both Bangla and English digits.
 */
export default {
    add,
    subtract,
    multiply,
    divide,
    modulo,
    abs,
    sqrt,
    factorial,
    pow,
    log,
    log10,
    log2,
    sin,
    cos,
    tan,
};
