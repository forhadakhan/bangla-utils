import { toBanglaDigits, toEnglishDigits } from '../..'; // Import functions from the main module

describe('convertDigits utilities', () => {
    describe('toBanglaDigits function', () => {
        it('should handle empty string input', () => {
            expect(toBanglaDigits('')).toBe('');
        });

        it('should handle large numbers correctly', () => {
            expect(toBanglaDigits('12345678901234567890')).toBe(
                '১২৩৪৫৬৭৮৯০১২৩৪৫৬৭৮৯০'
            );
        });

        it('should handle zero input correctly in strict mode', () => {
            expect(toBanglaDigits(0, true)).toBe('০');
            expect(toBanglaDigits('0', true)).toBe('০');
        });

        it('should convert English digits to Bangla digits (integer)', () => {
            expect(toBanglaDigits(123)).toBe('১২৩');
        });

        it('should convert English digits to Bangla digits (floating-point)', () => {
            expect(toBanglaDigits(123.45)).toBe('১২৩.৪৫');
        });

        it('should convert string with English digits to Bangla digits', () => {
            expect(toBanglaDigits('123')).toBe('১২৩');
        });

        it('should retain non-digit characters in the string', () => {
            expect(toBanglaDigits('abc123xyz')).toBe('abc১২৩xyz');
        });

        it('should retain Bangla digits as is', () => {
            expect(toBanglaDigits('১২৩')).toBe('১২৩');
        });

        it('should throw an error for non-numeric input with strict mode', () => {
            expect(() => toBanglaDigits('abc', true)).toThrow(
                'Invalid input: Input must consist of only numeric digits.'
            );
        });

        it('should not throw an error for valid non-numeric input without strict mode', () => {
            expect(toBanglaDigits('abc')).toBe('abc');
        });

        it('should handle 0 correctly (as both number and string)', () => {
            expect(toBanglaDigits(0)).toBe('০');
            expect(toBanglaDigits('0')).toBe('০');
        });

        it('should throw an error for invalid input type', () => {
            expect(() => toBanglaDigits(null as any)).toThrow(
                'Input must be a number or string.'
            );
        });

        it('should convert English digits to Bangla digits', () => {
            expect(toBanglaDigits(1234567890)).toBe('১২৩৪৫৬৭৮৯০');
        });

        it('should handle string inputs with English digits', () => {
            expect(toBanglaDigits('1234567890')).toBe('১২৩৪৫৬৭৮৯০');
        });

        it('should handle mixed Bangla and English digits', () => {
            expect(toBanglaDigits('123৪৫')).toBe('১২৩৪৫');
        });

        it('should handle inputs with non-digit characters', () => {
            expect(toBanglaDigits('abc123')).toBe('abc১২৩');
            expect(toBanglaDigits('১২৩@#$')).toBe('১২৩@#$');
        });

        it('should handle inputs with decimals', () => {
            expect(toBanglaDigits(123.45)).toBe('১২৩.৪৫');
            expect(toBanglaDigits('123.45')).toBe('১২৩.৪৫');
        });

        it('should retain Bangla digits and decimals unchanged', () => {
            expect(toBanglaDigits('১২৩.৪৫')).toBe('১২৩.৪৫');
        });

        it('should handle numeric inputs with non-integer values', () => {
            expect(toBanglaDigits(0.123456)).toBe('০.১২৩৪৫৬');
        });

        it('should handle numeric inputs with negative values', () => {
            expect(toBanglaDigits(-123)).toBe('-১২৩');
        });

        it('should handle string inputs with negative numbers', () => {
            expect(toBanglaDigits('-123')).toBe('-১২৩');
        });

        it('should handle inputs with only non-digit characters', () => {
            expect(toBanglaDigits('@#$%^&*')).toBe('@#$%^&*');
        });

        it('should handle inputs with mixed digits and non-digit characters', () => {
            expect(toBanglaDigits('জানুয়ারী 01, 2025')).toBe(
                'জানুয়ারী ০১, ২০২৫'
            );
        });

        it('should handle input with mixed language/locale digits', () => {
            expect(toBanglaDigits('123abc১২৩')).toBe('১২৩abc১২৩');
        });
    });

    describe('toEnglishDigits function', () => {
        it('should handle empty string input', () => {
            expect(toEnglishDigits('')).toBe('');
        });

        it('should handle large numbers correctly', () => {
            expect(toEnglishDigits('১২৩৪৫৬৭৮৯০১২৩৪৫৬৭৮৯০')).toBe(
                '12345678901234567890'
            );
        });

        it('should handle zero input correctly in strict mode', () => {
            expect(toEnglishDigits('০', true)).toBe('0');
        });

        it('should convert Bangla digits to English digits (integer)', () => {
            expect(toEnglishDigits('১২৩')).toBe('123');
        });

        it('should convert Bangla digits to English digits (floating-point)', () => {
            expect(toEnglishDigits('১২৩.৪৫')).toBe('123.45');
        });

        it('should convert string with Bangla digits to English digits', () => {
            expect(toEnglishDigits('১২৩')).toBe('123');
        });

        it('should retain non-digit characters in the string', () => {
            expect(toEnglishDigits('abc১২৩xyz')).toBe('abc123xyz');
        });

        it('should retain English digits as is', () => {
            expect(toEnglishDigits('123')).toBe('123');
        });

        it('should throw an error for non-numeric input with strict mode', () => {
            expect(() => toEnglishDigits('abc', true)).toThrow(
                'Invalid input: Input must consist of only numeric digits.'
            );
        });

        it('should not throw an error for valid non-numeric input without strict mode', () => {
            expect(toEnglishDigits('abc')).toBe('abc');
        });

        it('should handle 0 correctly (as both number and string)', () => {
            expect(toEnglishDigits('০')).toBe('0');
            expect(toEnglishDigits(0)).toBe('0');
        });

        it('should throw an error for invalid input type', () => {
            expect(() => toEnglishDigits(null as any)).toThrow(
                'Input must be a number or string.'
            );
        });

        it('should convert Bangla digits to English digits', () => {
            expect(toEnglishDigits('১২৩৪৫৬৭৮৯০')).toBe('1234567890');
        });

        it('should retain English digits as is', () => {
            expect(toEnglishDigits('1234567890')).toBe('1234567890');
        });

        it('should handle mixed Bangla and English digits', () => {
            expect(toEnglishDigits('১২৩45')).toBe('12345');
        });

        it('should handle inputs with non-digit characters', () => {
            expect(toEnglishDigits('abc১২৩')).toBe('abc123');
            expect(toEnglishDigits('১২৩@#$')).toBe('123@#$');
        });

        it('should handle inputs with decimals', () => {
            expect(toEnglishDigits('১২৩.৪৫')).toBe('123.45');
        });

        it('should retain English digits and decimals unchanged', () => {
            expect(toEnglishDigits('123.45')).toBe('123.45');
        });

        it('should handle numeric inputs with non-integer values', () => {
            expect(toEnglishDigits('0.১২৩৪৫৬')).toBe('0.123456');
        });

        it('should handle string inputs with negative numbers', () => {
            expect(toEnglishDigits('-১২৩')).toBe('-123');
        });

        it('should handle inputs with only non-digit characters', () => {
            expect(toEnglishDigits('@#$%^&*')).toBe('@#$%^&*');
        });
    });

    it('should handle input with mixed language/locale digits', () => {
        expect(toEnglishDigits('১২৩abc১২৩')).toBe('123abc123');
    });
});
