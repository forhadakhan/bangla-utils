import {
    convertToWords,
    convertEachDigitsToWords,
    convertToTakaInWords,
} from '../..'; // Import functions from the main module

describe('convertToWords', () => {
    // Test cases for Bangla words
    describe('Bangla words', () => {
        test('converts 0 to শূন্য', () => {
            expect(convertToWords('০')).toBe('শূন্য');
            expect(convertToWords('0')).toBe('শূন্য');
            expect(convertToWords(0)).toBe('শূন্য');
            expect(convertToWords(0.0)).toBe('শূন্য');
            expect(convertToWords('00.00')).toBe('শূন্য দশমিক শূন্য শূন্য');
        });

        test('converts single-digit numbers', () => {
            expect(convertToWords('১')).toBe('এক');
            expect(convertToWords('1')).toBe('এক');
            expect(convertToWords(1)).toBe('এক');
            expect(convertToWords('৯')).toBe('নয়');
            expect(convertToWords('9')).toBe('নয়');
            expect(convertToWords(9)).toBe('নয়');
        });

        test('converts teen numbers', () => {
            expect(convertToWords('১১')).toBe('এগারো');
            expect(convertToWords('11')).toBe('এগারো');
            expect(convertToWords(11)).toBe('এগারো');
            expect(convertToWords('১৯')).toBe('উনিশ');
            expect(convertToWords('19')).toBe('উনিশ');
            expect(convertToWords(19)).toBe('উনিশ');
        });

        test('converts tens', () => {
            expect(convertToWords('২০')).toBe('বিশ');
            expect(convertToWords('20')).toBe('বিশ');
            expect(convertToWords(20)).toBe('বিশ');
            expect(convertToWords('৯০')).toBe('নব্বই');
            expect(convertToWords('90')).toBe('নব্বই');
            expect(convertToWords(90)).toBe('নব্বই');
        });

        test('converts hundreds', () => {
            expect(convertToWords('১০০')).toBe('একশত');
            expect(convertToWords('100')).toBe('একশত');
            expect(convertToWords(100)).toBe('একশত');
            expect(convertToWords('৯৯৯')).toBe('নয়শত নিরানব্বই');
            expect(convertToWords('999')).toBe('নয়শত নিরানব্বই');
            expect(convertToWords(999)).toBe('নয়শত নিরানব্বই');
        });

        test('converts thousands', () => {
            expect(convertToWords('১০০০')).toBe('এক হাজার');
            expect(convertToWords('1000')).toBe('এক হাজার');
            expect(convertToWords(1000)).toBe('এক হাজার');
            expect(convertToWords('৯৯৯৯')).toBe('নয় হাজার নয়শত নিরানব্বই');
            expect(convertToWords('9999')).toBe('নয় হাজার নয়শত নিরানব্বই');
            expect(convertToWords(9999)).toBe('নয় হাজার নয়শত নিরানব্বই');
        });

        test('converts lakhs', () => {
            expect(convertToWords('১০০০০০')).toBe('এক লক্ষ');
            expect(convertToWords('100000')).toBe('এক লক্ষ');
            expect(convertToWords(100000)).toBe('এক লক্ষ');
            expect(convertToWords('৯৯৯৯৯৯')).toBe(
                'নয় লক্ষ নিরানব্বই হাজার নয়শত নিরানব্বই'
            );
            expect(convertToWords('999999')).toBe(
                'নয় লক্ষ নিরানব্বই হাজার নয়শত নিরানব্বই'
            );
            expect(convertToWords(999999)).toBe(
                'নয় লক্ষ নিরানব্বই হাজার নয়শত নিরানব্বই'
            );
        });

        test('converts crores', () => {
            expect(convertToWords('১০০০০০০০')).toBe('এক কোটি');
            expect(convertToWords('10000000')).toBe('এক কোটি');
            expect(convertToWords(10000000)).toBe('এক কোটি');
            expect(convertToWords('৯৯৯৯৯৯৯৯')).toBe(
                'নয় কোটি নিরানব্বই লক্ষ নিরানব্বই হাজার নয়শত নিরানব্বই'
            );
            expect(convertToWords('99999999')).toBe(
                'নয় কোটি নিরানব্বই লক্ষ নিরানব্বই হাজার নয়শত নিরানব্বই'
            );
            expect(convertToWords(99999999)).toBe(
                'নয় কোটি নিরানব্বই লক্ষ নিরানব্বই হাজার নয়শত নিরানব্বই'
            );
        });

        test('converts floating-point numbers', () => {
            expect(convertToWords('১২৩.৪৫৬')).toBe(
                'একশত তেইশ দশমিক চার পাঁচ ছয়'
            );
            expect(convertToWords('123.456')).toBe(
                'একশত তেইশ দশমিক চার পাঁচ ছয়'
            );
            expect(convertToWords(123.456)).toBe(
                'একশত তেইশ দশমিক চার পাঁচ ছয়'
            );
            expect(convertToWords('১০০০.০১')).toBe('এক হাজার দশমিক শূন্য এক');
            expect(convertToWords('1000.01')).toBe('এক হাজার দশমিক শূন্য এক');
            expect(convertToWords(1000.01)).toBe('এক হাজার দশমিক শূন্য এক');
        });

        test('handles large numbers', () => {
            expect(convertToWords('১০০০০০০০০০')).toBe('একশত কোটি');
            expect(convertToWords('1000000000')).toBe('একশত কোটি');
            expect(convertToWords(1000000000)).toBe('একশত কোটি');
            expect(convertToWords('১২৩৪৫৬৭৮৯০')).toBe(
                'একশত তেইশ কোটি পঁয়তাল্লিশ লক্ষ সাতষট্টি হাজার আটশত নব্বই'
            );
            expect(convertToWords('1234567890')).toBe(
                'একশত তেইশ কোটি পঁয়তাল্লিশ লক্ষ সাতষট্টি হাজার আটশত নব্বই'
            );
            expect(convertToWords(1234567890)).toBe(
                'একশত তেইশ কোটি পঁয়তাল্লিশ লক্ষ সাতষট্টি হাজার আটশত নব্বই'
            );
        });
    });

    // Test cases for English words
    describe('English words', () => {
        test('converts 0 to zero', () => {
            expect(convertToWords('০', true)).toBe('zero');
            expect(convertToWords('0', true)).toBe('zero');
            expect(convertToWords(0, true)).toBe('zero');
        });

        test('converts single-digit numbers', () => {
            expect(convertToWords('১', true)).toBe('one');
            expect(convertToWords('1', true)).toBe('one');
            expect(convertToWords(1, true)).toBe('one');
            expect(convertToWords('৯', true)).toBe('nine');
            expect(convertToWords('9', true)).toBe('nine');
            expect(convertToWords(9, true)).toBe('nine');
        });

        test('converts teen numbers', () => {
            expect(convertToWords('১১', true)).toBe('eleven');
            expect(convertToWords('11', true)).toBe('eleven');
            expect(convertToWords(11, true)).toBe('eleven');
            expect(convertToWords('১৯', true)).toBe('nineteen');
            expect(convertToWords('19', true)).toBe('nineteen');
            expect(convertToWords(19, true)).toBe('nineteen');
        });

        test('converts tens', () => {
            expect(convertToWords('২০', true)).toBe('twenty');
            expect(convertToWords('20', true)).toBe('twenty');
            expect(convertToWords(20, true)).toBe('twenty');
            expect(convertToWords('৯০', true)).toBe('ninety');
            expect(convertToWords('90', true)).toBe('ninety');
            expect(convertToWords(90, true)).toBe('ninety');
        });

        test('converts hundreds', () => {
            expect(convertToWords('১০০', true)).toBe('one hundred');
            expect(convertToWords('100', true)).toBe('one hundred');
            expect(convertToWords(100, true)).toBe('one hundred');
            expect(convertToWords('৯৯৯', true)).toBe(
                'nine hundred ninety-nine'
            );
            expect(convertToWords('999', true)).toBe(
                'nine hundred ninety-nine'
            );
            expect(convertToWords(999, true)).toBe('nine hundred ninety-nine');
        });

        test('converts thousands', () => {
            expect(convertToWords('১০০০', true)).toBe('one thousand');
            expect(convertToWords('1000', true)).toBe('one thousand');
            expect(convertToWords(1000, true)).toBe('one thousand');
            expect(convertToWords('৯৯৯৯', true)).toBe(
                'nine thousand nine hundred ninety-nine'
            );
            expect(convertToWords('9999', true)).toBe(
                'nine thousand nine hundred ninety-nine'
            );
            expect(convertToWords(9999, true)).toBe(
                'nine thousand nine hundred ninety-nine'
            );
        });

        test('converts lakhs', () => {
            expect(convertToWords('১০০০০০', true)).toBe('one lakh');
            expect(convertToWords('100000', true)).toBe('one lakh');
            expect(convertToWords(100000, true)).toBe('one lakh');
            expect(convertToWords('৯৯৯৯৯৯', true)).toBe(
                'nine lakh ninety-nine thousand nine hundred ninety-nine'
            );
            expect(convertToWords('999999', true)).toBe(
                'nine lakh ninety-nine thousand nine hundred ninety-nine'
            );
            expect(convertToWords(999999, true)).toBe(
                'nine lakh ninety-nine thousand nine hundred ninety-nine'
            );
        });

        test('converts crores', () => {
            expect(convertToWords('১০০০০০০০', true)).toBe('one crore');
            expect(convertToWords('10000000', true)).toBe('one crore');
            expect(convertToWords(10000000, true)).toBe('one crore');
            expect(convertToWords('৯৯৯৯৯৯৯৯', true)).toBe(
                'nine crore ninety-nine lakh ninety-nine thousand nine hundred ninety-nine'
            );
            expect(convertToWords('99999999', true)).toBe(
                'nine crore ninety-nine lakh ninety-nine thousand nine hundred ninety-nine'
            );
            expect(convertToWords(99999999, true)).toBe(
                'nine crore ninety-nine lakh ninety-nine thousand nine hundred ninety-nine'
            );
        });

        test('converts floating-point numbers', () => {
            expect(convertToWords('১২৩.৪৫৬', true)).toBe(
                'one hundred twenty-three point four five six'
            );
            expect(convertToWords('123.456', true)).toBe(
                'one hundred twenty-three point four five six'
            );
            expect(convertToWords(123.456, true)).toBe(
                'one hundred twenty-three point four five six'
            );
            expect(convertToWords('১০০০.০১', true)).toBe(
                'one thousand point zero one'
            );
            expect(convertToWords('1000.01', true)).toBe(
                'one thousand point zero one'
            );
            expect(convertToWords(1000.01, true)).toBe(
                'one thousand point zero one'
            );
        });

        test('handles large numbers', () => {
            expect(convertToWords('১০০০০০০০০০', true)).toBe(
                'one hundred crore'
            );
            expect(convertToWords('1000000000', true)).toBe(
                'one hundred crore'
            );
            expect(convertToWords(1000000000, true)).toBe('one hundred crore');
            expect(convertToWords('১২৩৪৫৬৭৮৯০', true)).toBe(
                'one hundred twenty-three crore forty-five lakh sixty-seven thousand eight hundred ninety'
            );
            expect(convertToWords('1234567890', true)).toBe(
                'one hundred twenty-three crore forty-five lakh sixty-seven thousand eight hundred ninety'
            );
            expect(convertToWords(1234567890, true)).toBe(
                'one hundred twenty-three crore forty-five lakh sixty-seven thousand eight hundred ninety'
            );
        });
    });

    // Test cases for invalid input
    describe('invalid input', () => {
        test('throws error for non-numeric input', () => {
            expect(() => convertToWords('abc')).toThrow();
            expect(() => convertToWords('১২৩abc')).toThrow();
        });

        test('throws error for empty input', () => {
            expect(() => convertToWords('')).toThrow();
        });
    });
});

describe('convertEachDigitsToWords', () => {
    // Test cases for Bangla digits (default)
    test('converts each digit of a positive integer to Bangla words, including zeros', () => {
        expect(convertEachDigitsToWords('01234')).toBe('শূন্য এক দুই তিন চার');
        expect(convertEachDigitsToWords('১০২০৩')).toBe(
            'এক শূন্য দুই শূন্য তিন'
        );
        expect(convertEachDigitsToWords(10203, true)).toBe(
            'one zero two zero three'
        );
        expect(convertEachDigitsToWords('১০২০৩', true)).toBe(
            'one zero two zero three'
        );
    });

    test('converts each digit of a positive floating-point number to Bangla words, including zeros', () => {
        expect(convertEachDigitsToWords(100.05)).toBe(
            'এক শূন্য শূন্য দশমিক শূন্য পাঁচ'
        );
        expect(convertEachDigitsToWords('১০০.০৫')).toBe(
            'এক শূন্য শূন্য দশমিক শূন্য পাঁচ'
        );
    });

    test('converts each digit of zero to Bangla words', () => {
        expect(convertEachDigitsToWords(0)).toBe('শূন্য');
        expect(convertEachDigitsToWords('০')).toBe('শূন্য');
    });

    test('converts each digit of a single-digit number to Bangla words, including zero', () => {
        expect(convertEachDigitsToWords(5)).toBe('পাঁচ');
        expect(convertEachDigitsToWords('৫')).toBe('পাঁচ');
        expect(convertEachDigitsToWords(0)).toBe('শূন্য');
    });

    // Test cases for English digits
    test('converts each digit of a positive integer to English words, including zeros', () => {
        expect(convertEachDigitsToWords(10203, true)).toBe(
            'one zero two zero three'
        );
        expect(convertEachDigitsToWords('১০২০৩', true)).toBe(
            'one zero two zero three'
        );
    });

    test('converts each digit of a positive floating-point number to English words, including zeros', () => {
        expect(convertEachDigitsToWords(100.05, true)).toBe(
            'one zero zero point zero five'
        );
        expect(convertEachDigitsToWords('১০০.০৫', true)).toBe(
            'one zero zero point zero five'
        );
    });

    test('converts each digit of zero to English words', () => {
        expect(convertEachDigitsToWords(0, true)).toBe('zero');
        expect(convertEachDigitsToWords('০', true)).toBe('zero');
    });

    test('converts each digit of a single-digit number to English words, including zero', () => {
        expect(convertEachDigitsToWords(5, true)).toBe('five');
        expect(convertEachDigitsToWords('৫', true)).toBe('five');
        expect(convertEachDigitsToWords(0, true)).toBe('zero');
    });

    // Test cases for edge cases
    test('handles leading zeros in integers', () => {
        expect(convertEachDigitsToWords('00123')).toBe(
            'শূন্য শূন্য এক দুই তিন'
        );
        expect(convertEachDigitsToWords('০০১২৩', true)).toBe(
            'zero zero one two three'
        );
    });

    test('handles leading zeros in floating-point numbers', () => {
        expect(convertEachDigitsToWords('00123.0045')).toBe(
            'শূন্য শূন্য এক দুই তিন দশমিক শূন্য শূন্য চার পাঁচ'
        );
        expect(convertEachDigitsToWords('০০১২৩.০০৪৫', true)).toBe(
            'zero zero one two three point zero zero four five'
        );
    });

    test('handles trailing zeros in floating-point numbers', () => {
        expect(convertEachDigitsToWords('123.4500')).toBe(
            'এক দুই তিন দশমিক চার পাঁচ শূন্য শূন্য'
        );
        expect(convertEachDigitsToWords('১২৩.৪৫০০', true)).toBe(
            'one two three point four five zero zero'
        );
    });

    test('handles numbers with only zeros', () => {
        expect(convertEachDigitsToWords('000')).toBe('শূন্য শূন্য শূন্য');
        expect(convertEachDigitsToWords('০০০', true)).toBe('zero zero zero');
    });

    test('handles numbers with only zeros and a decimal point', () => {
        expect(convertEachDigitsToWords('000.000')).toBe(
            'শূন্য শূন্য শূন্য দশমিক শূন্য শূন্য শূন্য'
        );
        expect(convertEachDigitsToWords('০০০.০০০', true)).toBe(
            'zero zero zero point zero zero zero'
        );
    });

    // Test cases for invalid inputs (unchanged)
    test('throws error for non-numeric strings', () => {
        expect(() => convertEachDigitsToWords('abc')).toThrow(
            'Invalid input: Input must be a valid number string.'
        );
        expect(() => convertEachDigitsToWords('১২৩abc')).toThrow(
            'Invalid input: Input must be a valid number string.'
        );
    });

    test('throws error for invalid characters', () => {
        expect(() => convertEachDigitsToWords('123!')).toThrow(
            'Invalid input: Input must be a valid number string.'
        );
        expect(() => convertEachDigitsToWords('১২৩!')).toThrow(
            'Invalid input: Input must be a valid number string.'
        );
    });

    test('throws error for empty strings', () => {
        expect(() => convertEachDigitsToWords('')).toThrow(
            'Invalid input: Input must be a valid number string.'
        );
    });

    test('throws error for null or undefined', () => {
        expect(() => convertEachDigitsToWords(null as any)).toThrow(
            'Input must be a number or string.'
        );
        expect(() => convertEachDigitsToWords(undefined as any)).toThrow(
            'Input must be a number or string.'
        );
    });

    test('throws error for boolean inputs', () => {
        expect(() => convertEachDigitsToWords(true as any)).toThrow(
            'Input must be a number or string.'
        );
        expect(() => convertEachDigitsToWords(false as any)).toThrow(
            'Input must be a number or string.'
        );
    });

    test('throws error for objects or arrays', () => {
        expect(() => convertEachDigitsToWords({} as any)).toThrow(
            'Input must be a number or string.'
        );
        expect(() => convertEachDigitsToWords([] as any)).toThrow(
            'Input must be a number or string.'
        );
    });
});

describe('convertToTakaInWords', () => {
    // Valid Inputs
    test('converts integer amount (no decimal)', () => {
        expect(convertToTakaInWords(1000)).toBe('এক হাজার টাকা');
    });

    test('converts decimal amount (valid poisha)', () => {
        expect(convertToTakaInWords(123.45)).toBe(
            'একশত তেইশ টাকা এবং পঁয়তাল্লিশ পয়সা'
        );
    });

    test('converts decimal amount (single digit poisha)', () => {
        expect(convertToTakaInWords(123.5)).toBe(
            'একশত তেইশ টাকা এবং পঞ্চাশ পয়সা'
        );
    });

    test('converts decimal amount (zero poisha)', () => {
        expect(convertToTakaInWords(123.0)).toBe('একশত তেইশ টাকা');
    });

    test('converts to English words', () => {
        expect(convertToTakaInWords(123.45, true)).toBe(
            'One hundred twenty-three taka and forty-five poisha'
        );
    });

    test('converts Bangla digits input', () => {
        expect(convertToTakaInWords('১২৩.৪৫')).toBe(
            'একশত তেইশ টাকা এবং পঁয়তাল্লিশ পয়সা'
        );
    });

    test('converts Bangla digits input to English', () => {
        expect(convertToTakaInWords('১২৩.৪৫', true)).toBe(
            'One hundred twenty-three taka and forty-five poisha'
        );
    });

    // Edge Cases
    test('converts zero amount', () => {
        expect(convertToTakaInWords(0)).toBe('শূন্য টাকা');
    });

    test('converts zero amount to English', () => {
        expect(convertToTakaInWords(0, true)).toBe('Zero taka');
    });

    test('converts single digit amount', () => {
        expect(convertToTakaInWords(7)).toBe('সাত টাকা');
    });

    test('converts single digit amount to English', () => {
        expect(convertToTakaInWords(7, true)).toBe('Seven taka');
    });

    test('ignores trailing zeros in poisha', () => {
        expect(convertToTakaInWords('123.450')).toBe(
            'একশত তেইশ টাকা এবং পঁয়তাল্লিশ পয়সা'
        );
    });

    test('handles very small poisha values', () => {
        expect(convertToTakaInWords(123.01)).toBe(
            'একশত তেইশ টাকা এবং এক পয়সা'
        );
    });

    test('handles very large amounts', () => {
        expect(convertToTakaInWords(999999999.99)).toBe(
            'নিরানব্বই কোটি নিরানব্বই লক্ষ নিরানব্বই হাজার নয়শত নিরানব্বই টাকা এবং নিরানব্বই পয়সা'
        );
    });

    // Invalid Inputs
    test('throws error for negative amount', () => {
        expect(() => convertToTakaInWords(-123.45)).toThrow(
            'Negative amounts are not allowed.'
        );
    });

    test('throws error for poisha exceeding 2 digits', () => {
        expect(() => convertToTakaInWords(123.452)).toThrow(
            'Poisha part cannot exceed 2 digits.'
        );
    });

    test('throws error for invalid number string', () => {
        expect(() => convertToTakaInWords('abc')).toThrow(
            'Invalid input: Input must be a valid number string.'
        );
    });

    test('throws error for input with commas', () => {
        expect(() => convertToTakaInWords('1,000.50')).toThrow(
            'Invalid input: Input must be a valid number string.'
        );
    });

    test('throws error for empty string', () => {
        expect(() => convertToTakaInWords('')).toThrow(
            'Invalid input: Input must be a valid number string.'
        );
    });

    test('throws error for non-numeric input', () => {
        expect(() => convertToTakaInWords('123abc')).toThrow(
            'Invalid input: Input must be a valid number string.'
        );
    });

    test('throws error for multiple decimal points', () => {
        expect(() => convertToTakaInWords('123.45.67')).toThrow(
            'Invalid input: Input must be a valid number string.'
        );
    });

    test('throws error for poisha with non-numeric characters', () => {
        expect(() => convertToTakaInWords('123.4a')).toThrow(
            'Invalid input: Input must be a valid number string.'
        );
    });

    // Suffix Test Cases
    test('adds Bangla suffix if addSuffix is true', () => {
        expect(convertToTakaInWords(123.45, false, true)).toBe(
            'একশত তেইশ টাকা এবং পঁয়তাল্লিশ পয়সা মাত্র।'
        );
    });

    test('adds English suffix if addSuffix is true', () => {
        expect(convertToTakaInWords(123.45, true, true)).toBe(
            'One hundred twenty-three taka and forty-five poisha only.'
        );
    });

    test('does not add suffix if addSuffix is false', () => {
        expect(convertToTakaInWords(123.45, false, false)).toBe(
            'একশত তেইশ টাকা এবং পঁয়তাল্লিশ পয়সা'
        );
    });

    // No Connector Test Cases
    test('skips connector if noConnector is true (Bangla)', () => {
        expect(convertToTakaInWords(123.45, false, false, true)).toBe(
            'একশত তেইশ টাকা পঁয়তাল্লিশ পয়সা'
        );
    });

    test('skips connector if noConnector is true (English)', () => {
        expect(convertToTakaInWords(123.45, true, false, true)).toBe(
            'One hundred twenty-three taka forty-five poisha'
        );
    });

    // Default behavior (Bangla, no suffix, with connector)
    test('converts 123.45 to Bangla words', () => {
        expect(convertToTakaInWords(123.45)).toBe(
            'একশত তেইশ টাকা এবং পঁয়তাল্লিশ পয়সা'
        );
    });

    test('converts "১২৩.৪৫" to Bangla words', () => {
        expect(convertToTakaInWords('১২৩.৪৫')).toBe(
            'একশত তেইশ টাকা এবং পঁয়তাল্লিশ পয়সা'
        );
    });

    test('converts 1000 to Bangla words', () => {
        expect(convertToTakaInWords(1000)).toBe('এক হাজার টাকা');
    });

    test('converts "১০০০.০০" to Bangla words', () => {
        expect(convertToTakaInWords('১০০০.০০')).toBe('এক হাজার টাকা');
    });

    // English words
    test('converts 123.45 to English words', () => {
        expect(convertToTakaInWords(123.45, true)).toBe(
            'One hundred twenty-three taka and forty-five poisha'
        );
    });

    test('converts "১২৩.৪৫" to English words', () => {
        expect(convertToTakaInWords('১২৩.৪৫', true)).toBe(
            'One hundred twenty-three taka and forty-five poisha'
        );
    });

    test('converts 1000 to English words', () => {
        expect(convertToTakaInWords(1000, true)).toBe('One thousand taka');
    });

    test('converts "১০০০.০০" to English words', () => {
        expect(convertToTakaInWords('১০০০.০০', true)).toBe('One thousand taka');
    });

    // With suffix
    test('converts 123.45 to Bangla words with suffix', () => {
        expect(convertToTakaInWords(123.45, false, true)).toBe(
            'একশত তেইশ টাকা এবং পঁয়তাল্লিশ পয়সা মাত্র।'
        );
    });

    test('converts 123.45 to English words with suffix', () => {
        expect(convertToTakaInWords(123.45, true, true)).toBe(
            'One hundred twenty-three taka and forty-five poisha only.'
        );
    });

    test('converts 1000 to Bangla words with suffix', () => {
        expect(convertToTakaInWords(1000, false, true)).toBe(
            'এক হাজার টাকা মাত্র।'
        );
    });

    test('converts 1000 to English words with suffix', () => {
        expect(convertToTakaInWords(1000, true, true)).toBe(
            'One thousand taka only.'
        );
    });

    // Without connector
    test('converts 123.45 to Bangla words without connector', () => {
        expect(convertToTakaInWords(123.45, false, false, true)).toBe(
            'একশত তেইশ টাকা পঁয়তাল্লিশ পয়সা'
        );
    });

    test('converts 123.45 to English words without connector', () => {
        expect(convertToTakaInWords(123.45, true, false, true)).toBe(
            'One hundred twenty-three taka forty-five poisha'
        );
    });

    test('converts 1000 to Bangla words without connector', () => {
        expect(convertToTakaInWords(1000, false, false, true)).toBe(
            'এক হাজার টাকা'
        );
    });

    test('converts 1000 to English words without connector', () => {
        expect(convertToTakaInWords(1000, true, false, true)).toBe(
            'One thousand taka'
        );
    });

    // With suffix and without connector
    test('converts 123.45 to Bangla words with suffix and without connector', () => {
        expect(convertToTakaInWords(123.45, false, true, true)).toBe(
            'একশত তেইশ টাকা পঁয়তাল্লিশ পয়সা মাত্র।'
        );
    });

    test('converts 123.45 to English words with suffix and without connector', () => {
        expect(convertToTakaInWords(123.45, true, true, true)).toBe(
            'One hundred twenty-three taka forty-five poisha only.'
        );
    });

    test('converts 1000 to Bangla words with suffix and without connector', () => {
        expect(convertToTakaInWords(1000, false, true, true)).toBe(
            'এক হাজার টাকা মাত্র।'
        );
    });

    test('converts 1000 to English words with suffix and without connector', () => {
        expect(convertToTakaInWords(1000, true, true, true)).toBe(
            'One thousand taka only.'
        );
    });

    // Edge cases and error handling
    test('throws error for Poisha part exceeding 2 digits', () => {
        expect(() => convertToTakaInWords('১২৩.৪৫২')).toThrow(
            'Poisha part cannot exceed 2 digits.'
        );
    });

    test('throws error for negative amounts', () => {
        expect(() => convertToTakaInWords('-123.45')).toThrow(
            'Negative amounts are not allowed.'
        );
    });

    test('throws error for invalid input', () => {
        expect(() => convertToTakaInWords('invalid')).toThrow(
            'Invalid input: Input must be a valid number string.'
        );
    });
});
