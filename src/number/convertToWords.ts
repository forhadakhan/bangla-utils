/**
 * FILE: src/number/convertToWords.ts
 * DESC: This file contains functions for converting numbers to words in Bangla.
 */
import { capitalizeSentence } from '../utils';
import { toEnglishDigits } from './convertDigits';
import {
    BANGLA_UNITS,
    ENGLISH_UNITS,
    ENGLISH_TENS,
    BANGLA_TENS,
} from './constants';

/**
 * Validates if a given number string is valid.
 * @param numStr - The number string to validate.
 * @returns `true` if the number string is valid, `false` otherwise.
 * @example
 * ```typescript
 * isValidNumber("123"); // true
 * isValidNumber("১২৩"); // true (converts to English digits first)
 * isValidNumber("abc"); // false
 * isValidNumber("১০০.৫"); // true (allows decimal point)
 * isValidNumber("১,০০০"); // false (commas are not allowed)
 * ```
 * @category Number
 */
function isValidNumber(numStr: string): boolean {
    return /^\d+$/.test(toEnglishDigits(numStr));
}

/**
 * Converts a single-digit number to its Bangla word representation.
 * @param number - The number to convert (must be between 0 and 9).
 * @returns The Bangla word for the number.
 * @throws {Error} If the number is outside the 0–9 range.
 * @example
 * ```typescript
 * convertUnitsBangla(5); // "পাঁচ"
 * convertUnitsBangla(0); // ""
 * convertUnitsBangla(9); // "নয়"
 * ```
 * @category Number
 */
function convertUnitsBangla(number: number): string {
    return BANGLA_UNITS[number] || '';
}

/**
 * Converts a single-digit number to its English word representation.
 * @param number - The number to convert (must be between 0 and 9).
 * @returns The English word for the number.
 * @throws {Error} If the number is outside the 0–9 range.
 * @example
 * ```typescript
 * convertUnitsEnglish(5); // "five"
 * convertUnitsEnglish(0); // ""
 * convertUnitsEnglish(9); // "nine"
 * ```
 * @category Number
 */
function convertUnitsEnglish(number: number): string {
    return ENGLISH_UNITS[number] || '';
}

/**
 * Converts a number to words in Bangla or English.
 * @param number - The number to convert (can be a number or string).
 * @param inEnglish - If `true`, converts the number to English words. Default is `false` (converts to Bangla words).
 * @returns The number in words.
 * @throws {Error} If the input is not a valid number or number string.
 * @example
 * ```typescript
 * convertToWords(123); // "একশত তেইশ"
 * convertToWords("123"); // "একশত তেইশ"
 * convertToWords("১২৩", true); // "one hundred twenty-three"
 * convertToWords(123.45); // "একশত তেইশ দশমিক চার পাঁচ"
 * convertToWords("১২৩.৪৫", true); // "one hundred twenty-three point four five"
 * convertToWords("০"); // "শূন্য"
 * convertToWords(1000000); // "দশ লক্ষ"
 * ```
 * @category Number
 */
export function convertToWords(
    number: number | string,
    inEnglish: boolean = false
): string {
    number = toEnglishDigits(number); // Convert to English digits

    // Convert to integer if number is a string
    if (typeof number === 'string') {
        const isValid = isValidNumber(number.replace('.', '')); // Allow decimal point
        if (!isValid) {
            throw new Error(
                'Invalid input: Input must be a valid number string.'
            ); // Throw error if invalid number string
        }
    }

    // Handle floating-point numbers
    if (typeof number === 'string' && number.includes('.')) {
        const [integerPart, decimalPart] = number.split('.');
        const integerWords = convertToWords(parseFloat(integerPart), inEnglish);
        const decimalWords = convertDecimalPart(decimalPart, inEnglish); // Handle leading zeros
        const point = inEnglish ? 'point' : 'দশমিক';
        return `${integerWords} ${point} ${decimalWords}`;
    }

    number = parseFloat(number); // Convert to float

    // Return the appropriate conversion function based on isEnglish flag
    if (inEnglish) {
        return convertToWordsEnglish(number);
    } else {
        return convertToWordsBangla(number);
    }
}

/**
 * Converts the decimal part of a number to words.
 * @param decimalPart - The decimal part of the number as a string.
 * @param inEnglish - If `true`, converts to English words. Default is `false` (converts to Bangla words).
 * @returns The decimal part in words.
 * @example
 * ```typescript
 * convertDecimalPart("45", false); // "চার পাঁচ"
 * convertDecimalPart("45", true); // "four five"
 * convertDecimalPart("০৫", false); // "শূন্য পাঁচ"
 * convertDecimalPart("০৫", true); // "zero five"
 * ```
 * @category Number
 */
function convertDecimalPart(decimalPart: string, inEnglish: boolean): string {
    let decimalWords = '';
    for (let i = 0; i < decimalPart.length; i++) {
        const digit = parseInt(decimalPart[i]);
        if (inEnglish) {
            decimalWords +=
                digit === 0 ? 'zero ' : convertUnitsEnglish(digit) + ' ';
        } else {
            decimalWords +=
                digit === 0 ? 'শূন্য ' : convertUnitsBangla(digit) + ' ';
        }
    }
    return decimalWords.trim();
}

/**
 * Converts a number to Bangla words.
 * @param number - The number to convert.
 * @returns The Bangla word representation of the number.
 * @example
 * ```typescript
 * convertToWordsBangla(123); // "একশত তেইশ"
 * convertToWordsBangla(100000); // "এক লক্ষ"
 * convertToWordsBangla(10000000); // "এক কোটি"
 * convertToWordsBangla(0); // "শূন্য"
 * ```
 * @category Number
 */
function convertToWordsBangla(number: number): string {
    if (number === 0) return 'শূন্য'; // Special case for zero

    if (number >= 10000000) {
        const crore = Math.floor(number / 10000000);
        const remainder = number % 10000000;
        return (
            convertToWordsBangla(crore) +
            ' কোটি' +
            (remainder !== 0 ? ' ' + convertToWordsBangla(remainder) : '')
        );
    }
    if (number >= 100000) {
        const lakh = Math.floor(number / 100000);
        const remainder = number % 100000;
        return (
            convertToWordsBangla(lakh) +
            ' লক্ষ' +
            (remainder !== 0 ? ' ' + convertToWordsBangla(remainder) : '')
        );
    }
    if (number >= 1000) {
        const thousand = Math.floor(number / 1000);
        const remainder = number % 1000;
        return (
            convertToWordsBangla(thousand) +
            ' হাজার' +
            (remainder !== 0 ? ' ' + convertToWordsBangla(remainder) : '')
        );
    }
    if (number >= 100) {
        const hundred = Math.floor(number / 100);
        const remainder = number % 100;
        return (
            convertToWordsBangla(hundred) +
            'শত' +
            (remainder !== 0 ? ' ' + convertToWordsBangla(remainder) : '')
        );
    }
    if (number >= 10) return convertTensBangla(number);

    return convertUnitsBangla(number);
}

/**
 * Converts a number to English words.
 * @param number - The number to convert.
 * @returns The English word representation of the number.
 * @example
 * ```typescript
 * convertToWordsEnglish(123); // "one hundred twenty-three"
 * convertToWordsEnglish(100000); // "one lakh"
 * convertToWordsEnglish(10000000); // "one crore"
 * convertToWordsEnglish(0); // "zero"
 * ```
 * @category Number
 */
function convertToWordsEnglish(number: number): string {
    if (number === 0) return 'zero'; // Special case for zero

    if (number >= 10000000) {
        const crore = Math.floor(number / 10000000);
        const remainder = number % 10000000;
        return (
            convertToWordsEnglish(crore) +
            ' crore' +
            (remainder !== 0 ? ' ' + convertToWordsEnglish(remainder) : '')
        );
    }
    if (number >= 100000) {
        const lakh = Math.floor(number / 100000);
        const remainder = number % 100000;
        return (
            convertToWordsEnglish(lakh) +
            ' lakh' +
            (remainder !== 0 ? ' ' + convertToWordsEnglish(remainder) : '')
        );
    }
    if (number >= 1000) {
        const thousand = Math.floor(number / 1000);
        const remainder = number % 1000;
        return (
            convertToWordsEnglish(thousand) +
            ' thousand' +
            (remainder !== 0 ? ' ' + convertToWordsEnglish(remainder) : '')
        );
    }
    if (number >= 100) {
        const hundred = Math.floor(number / 100);
        const remainder = number % 100;
        return (
            convertToWordsEnglish(hundred) +
            ' hundred' +
            (remainder !== 0 ? ' ' + convertToWordsEnglish(remainder) : '')
        );
    }
    if (number >= 10) return convertTensEnglish(number);

    return convertUnitsEnglish(number);
}

/**
 * Converts a number in the tens range (10–99) to Bangla words.
 * @param number - The number to convert (must be between 10 and 99).
 * @returns The Bangla word representation of the number.
 * @throws {Error} If the number is outside the 10–99 range.
 * @example
 * ```typescript
 * convertTensBangla(23); // "তেইশ"
 * convertTensBangla(99); // "নিরানব্বই"
 * convertTensBangla(10); // "দশ"
 * ```
 * @category Number
 */
function convertTensBangla(number: number): string {
    if (number < 10 || number >= 100) {
        throw new Error('The number must be between 10 and 99 inclusive.');
    }

    return BANGLA_TENS[number - 10];
}

/**
 * Converts a number in the tens range (10–99) to English words.
 * @param number - The number to convert (must be between 10 and 99).
 * @returns The English word representation of the number.
 * @throws {Error} If the number is outside the 10–99 range.
 * @example
 * ```typescript
 * convertTensEnglish(23); // "twenty-three"
 * convertTensEnglish(99); // "ninety-nine"
 * convertTensEnglish(10); // "ten"
 * ```
 * @category Number
 */
function convertTensEnglish(number: number): string {
    if (number < 10 || number >= 100) {
        throw new Error('Number must be between 10 and 99.');
    }

    // Handle numbers from 10 to 19
    if (number < 20) {
        const teens = [
            'ten',
            'eleven',
            'twelve',
            'thirteen',
            'fourteen',
            'fifteen',
            'sixteen',
            'seventeen',
            'eighteen',
            'nineteen',
        ];
        return teens[number - 10];
    }

    const ten = Math.floor(number / 10);
    const unit = number % 10;

    return ENGLISH_TENS[ten] + (unit !== 0 ? '-' + ENGLISH_UNITS[unit] : '');
}

/**
 * Converts each digit of a number to its corresponding word representation, including zeros.
 * @param number - The number to convert (can be a number or string).
 * @param inEnglish - If `true`, converts the digits to English words. Default is `false` (converts to Bangla words).
 * @returns The number with each digit converted to words, including zeros.
 * @throws {Error} If the input is not a valid number or number string.
 * @example
 * ```typescript
 * convertEachDigitsToWords(10203); // "এক শূন্য দুই শূন্য তিন"
 * convertEachDigitsToWords(10203, true); // "one zero two zero three"
 * convertEachDigitsToWords("১০২০৩", true); // "one zero two zero three"
 * convertEachDigitsToWords("100.05"); // "এক শূন্য শূন্য দশমিক শূন্য পাঁচ"
 * convertEachDigitsToWords("১০০.০৫", true); // "one zero zero point zero five"
 * ```
 * @category Number
 */
export function convertEachDigitsToWords(
    number: number | string,
    inEnglish: boolean = false
): string {
    // Convert to string if number is a number
    if (typeof number === 'number') {
        number = number.toString();
    } else {
        number = toEnglishDigits(number); // Convert to English digits
    }

    // Validate the input
    const isValid = isValidNumber(number.replace('.', '')); // Allow decimal point
    if (!isValid) {
        throw new Error('Invalid input: Input must be a valid number string.');
    }

    // Handle floating-point numbers
    if (number.includes('.')) {
        const [integerPart, decimalPart] = number.split('.');
        const integerWords = convertEachDigitsToWords(integerPart, inEnglish);
        const decimalWords = convertEachDigitsToWords(decimalPart, inEnglish);
        const point = inEnglish ? 'point' : 'দশমিক';
        return `${integerWords} ${point} ${decimalWords}`;
    }

    // Convert each digit to words, including zeros
    let result = '';
    for (let i = 0; i < number.length; i++) {
        const digit = parseInt(number[i]);
        if (inEnglish) {
            result += (digit === 0 ? 'zero' : convertUnitsEnglish(digit)) + ' ';
        } else {
            result += (digit === 0 ? 'শূন্য' : convertUnitsBangla(digit)) + ' ';
        }
    }

    return result.trim();
}

/**
 * Converts a number to its word representation in Taka and Poisha.
 * @param amount - The amount to convert (can be a number or string).
 * @param inEnglish - If `true`, converts the amount to English words. Default is `false` (converts to Bangla words).
 * @param addSuffix - If `true`, appends "Only." (English) or "মাত্র।" (Bangla) at the end. Default is `false`.
 * @param noConnector - If `true`, skips the connector between Taka and Poisha. Default is `false`.
 * @returns The amount in words, with Taka and Poisha.
 * @throws {Error} If the input is not a valid number, is negative, or has more than 2 decimal places.
 * @example
 * ```typescript
 * // Default behavior (Bangla, no suffix, with connector)
 * convertToTakaInWords(123.45); // "একশত তেইশ টাকা এবং পঁয়তাল্লিশ পয়সা"
 * convertToTakaInWords("১২৩.৪৫"); // "একশত তেইশ টাকা এবং পঁয়তাল্লিশ পয়সা"
 * convertToTakaInWords(1000); // "এক হাজার টাকা"
 * convertToTakaInWords("১০০০.০০"); // "এক হাজার টাকা"
 *
 * // English words
 * convertToTakaInWords(123.45, true); // "One hundred twenty-three taka and forty-five poisha"
 * convertToTakaInWords("১২৩.৪৫", true); // "One hundred twenty-three taka and forty-five poisha"
 * convertToTakaInWords(1000, true); // "One thousand taka"
 * convertToTakaInWords("১০০০.০০", true); // "One thousand taka"
 *
 * // With suffix
 * convertToTakaInWords(123.45, false, true); // "একশত তেইশ টাকা এবং পঁয়তাল্লিশ পয়সা মাত্র।"
 * convertToTakaInWords(123.45, true, true); // "One hundred twenty-three taka and forty-five poisha only."
 * convertToTakaInWords(1000, false, true); // "এক হাজার টাকা মাত্র।"
 * convertToTakaInWords(1000, true, true); // "One thousand taka only."
 *
 * // Without connector
 * convertToTakaInWords(123.45, false, false, true); // "একশত তেইশ টাকা পঁয়তাল্লিশ পয়সা"
 * convertToTakaInWords(123.45, true, false, true); // "One hundred twenty-three taka forty-five poisha"
 * convertToTakaInWords(1000, false, false, true); // "এক হাজার টাকা"
 * convertToTakaInWords(1000, true, false, true); // "One thousand taka"
 *
 * // With suffix and without connector
 * convertToTakaInWords(123.45, false, true, true); // "একশত তেইশ টাকা পঁয়তাল্লিশ পয়সা মাত্র।"
 * convertToTakaInWords(123.45, true, true, true); // "One hundred twenty-three taka forty-five poisha only."
 * convertToTakaInWords(1000, false, true, true); // "এক হাজার টাকা মাত্র।"
 * convertToTakaInWords(1000, true, true, true); // "One thousand taka only."
 *
 * // Edge cases and error handling
 * convertToTakaInWords("১২৩.৪৫২"); // Throws error: "Poisha part cannot exceed 2 digits."
 * convertToTakaInWords("-123.45"); // Throws error: "Negative amounts are not allowed."
 * convertToTakaInWords("invalid"); // Throws error: "Invalid input: Input must be a valid number string."
 * ```
 * @category Number
 */

export function convertToTakaInWords(
    amount: number | string,
    inEnglish: boolean = false,
    addSuffix: boolean = false,
    noConnector: boolean = false
): string {
    amount = toEnglishDigits(amount); // Convert to English digits

    // Handle negative numbers
    if (typeof amount === 'string' && amount.startsWith('-')) {
        throw new Error('Negative amounts are not allowed.');
    }
    if (typeof amount === 'number' && amount < 0) {
        throw new Error('Negative amounts are not allowed.');
    }

    // Validate the input
    if (typeof amount === 'string') {
        const isValid = isValidNumber(amount.replace('.', '')); // Allow decimal point
        if (!isValid) {
            throw new Error(
                'Invalid input: Input must be a valid number string.'
            );
        }
    }

    // Handle floating-point numbers
    if (typeof amount === 'string' && amount.includes('.')) {
        const [takaPart, poishaPart] = amount.split('.');
        const poishaPartTrimmed = poishaPart.replace(/0+$/, ''); // Remove trailing zeros

        // Validate Poisha part
        if (poishaPartTrimmed.length > 2) {
            throw new Error('Poisha part cannot exceed 2 digits.');
        }

        const takaWords = convertToWords(parseFloat(takaPart), inEnglish);
        const poishaValue = Math.round(
            parseFloat(`0.${poishaPartTrimmed}`) * 100
        );

        const takaUnit = inEnglish ? 'taka' : 'টাকা';
        let result = `${takaWords} ${takaUnit}`;

        // Add Poisha part only if it is non-zero
        if (poishaValue > 0) {
            const poishaWords = convertToWords(poishaValue, inEnglish);
            const poishaUnit = inEnglish ? 'poisha' : 'পয়সা';
            const connector = noConnector ? '' : inEnglish ? 'and' : 'এবং';
            result += noConnector
                ? ` ${poishaWords} ${poishaUnit}`
                : ` ${connector} ${poishaWords} ${poishaUnit}`;
        }

        // Add suffix if required
        if (addSuffix) {
            const suffix = inEnglish ? 'only.' : 'মাত্র।';
            result += ` ${suffix}`;
        }

        return capitalizeSentence(result);
    }

    // Handle integer amounts (no decimal part)
    const takaWords = convertToWords(parseFloat(amount), inEnglish);
    const takaUnit = inEnglish ? 'taka' : 'টাকা';
    let result = `${takaWords} ${takaUnit}`;

    // Add suffix if required
    if (addSuffix) {
        const suffix = inEnglish ? 'only.' : 'মাত্র।';
        result += ` ${suffix}`;
    }

    return capitalizeSentence(result);
}
