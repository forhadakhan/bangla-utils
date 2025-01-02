/*************************************************************************************************************
 *
 * FILE: utils.ts
 * DESC: This file contains utility functions that can be used across the project.
 *
 ************************************************************************************************************/

/**
 * Checks if the given input is null.
 *
 * @param input - The value to check.
 * @returns `true` if the input is null, `false` otherwise.
 */
export function isNull(input: any): boolean {
    return input === null || input === undefined;
}

export function capitalizeWords(str: string): string {
    return str
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export function capitalizeSentence(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function isValidNumberInput(num: any, strict: boolean = true): boolean {
    if (isNull(num)) {
        if (strict) {
            throw new Error('Input must not be null or undefined.');
        }
        return false;
    }

    if (typeof num === 'number') {
        if (!Number.isFinite(num)) {
            if (strict) {
                throw new Error('Input must be a valid finite number.');
            }
            return false;
        }

        if (num > Number.MAX_SAFE_INTEGER) {
            if (strict) {
                throw new Error(
                    `Invalid input: Number exceeds safe integer range (${Number.MAX_SAFE_INTEGER}).`
                );
            }
            return false;
        }

        if (num < Number.MIN_SAFE_INTEGER) {
            if (strict) {
                throw new Error(
                    `Invalid input: Number exceeds safe integer range (${Number.MIN_SAFE_INTEGER}).`
                );
            }
            return false;
        }

        return true;
    }

    return false;
}
