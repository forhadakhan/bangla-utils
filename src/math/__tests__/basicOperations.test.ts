import {
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
} from '../..'; // Import functions from the main module

describe('add', () => {
    test('adds two English digit numbers', () => {
        expect(add(5, 10)).toBe('১৫');
        expect(add('5', '10')).toBe('১৫');
    });

    test('adds two Bangla digit numbers', () => {
        expect(add('৫', '১০')).toBe('১৫');
    });

    test('adds mixed English and Bangla digit numbers', () => {
        expect(add('5', '১০')).toBe('১৫');
        expect(add(5, '১০')).toBe('১৫');
    });

    test('adds an array of numbers', () => {
        expect(add(['৫', '১০', 5])).toBe('২০');
        expect(add([10, '৫', '৫'])).toBe('২০');
    });

    test('returns result in English digits when en=true', () => {
        expect(add('৫', '১০', true)).toBe('15');
        expect(add([5, 10], undefined, true)).toBe('15');
    });

    test('handles negative numbers', () => {
        expect(add('-৫', '১০')).toBe('৫');
        expect(add([-5, 10])).toBe('৫');
    });

    test('handles floating-point numbers', () => {
        expect(add('৫.৫', '১০.৫')).toBe('১৬');
        expect(add([5.5, 10.5])).toBe('১৬');
    });

    test('throws error when invalid input is provided', () => {
        expect(() => add('abc', '১০')).toThrow(
            'Invalid input: Input must be a number or numeric string.'
        );
        expect(() => add([5, 'abc'])).toThrow(
            'Invalid input: Input must be a number or numeric string.'
        );
    });
});

describe('subtract', () => {
    test('subtracts two English digit numbers', () => {
        expect(subtract(20, 5)).toBe('১৫');
        expect(subtract('20', '5')).toBe('১৫');
    });

    test('subtracts two Bangla digit numbers', () => {
        expect(subtract('২০', '৫')).toBe('১৫');
    });

    test('subtracts mixed English and Bangla digit numbers', () => {
        expect(subtract('20', '৫')).toBe('১৫');
        expect(subtract(20, '৫')).toBe('১৫');
    });

    test('returns result in English digits when en=true', () => {
        expect(subtract('২০', '৫', true)).toBe('15');
        expect(subtract(20, 5, true)).toBe('15');
    });

    test('handles negative results', () => {
        expect(subtract('৫', '১০')).toBe('-৫');
        expect(subtract(5, 10)).toBe('-৫');
    });

    test('handles floating-point numbers', () => {
        expect(subtract('২০.৫', '৫.৫')).toBe('১৫');
        expect(subtract(20.5, 5.5)).toBe('১৫');
    });

    test('throws error when invalid input is provided', () => {
        expect(() => subtract('abc', '১০')).toThrow(
            'Invalid input: Input must be a number or numeric string.'
        );
        expect(() => subtract(20, 'abc')).toThrow(
            'Invalid input: Input must be a number or numeric string.'
        );
    });
});

describe('multiply', () => {
    test('multiplies two English digit numbers', () => {
        expect(multiply(5, 10)).toBe('৫০');
        expect(multiply('5', '10')).toBe('৫০');
    });

    test('multiplies two Bangla digit numbers', () => {
        expect(multiply('৫', '১০')).toBe('৫০');
    });

    test('multiplies mixed English and Bangla digit numbers', () => {
        expect(multiply('5', '১০')).toBe('৫০');
        expect(multiply(5, '১০')).toBe('৫০');
    });

    test('multiplies an array of numbers', () => {
        expect(multiply(['৫', '১০', 2])).toBe('১০০');
        expect(multiply([10, '৫', '২'])).toBe('১০০');
    });

    test('returns result in English digits when en=true', () => {
        expect(multiply('৫', '১০', true)).toBe('50');
        expect(multiply([5, 10], undefined, true)).toBe('50');
    });

    test('handles negative numbers', () => {
        expect(multiply('-৫', '১০')).toBe('-৫০');
        expect(multiply([-5, 10])).toBe('-৫০');
    });

    test('handles floating-point numbers', () => {
        expect(multiply('৫.৫', '১০.৫')).toBe('৫৭.৭৫');
        expect(multiply([5.5, 10.5])).toBe('৫৭.৭৫');
    });

    test('throws error when invalid input is provided', () => {
        expect(() => multiply('abc', '১০')).toThrow(
            'Invalid input: Input must be a number or numeric string.'
        );
        expect(() => multiply([5, 'abc'])).toThrow(
            'Invalid input: Input must be a number or numeric string.'
        );
    });
});

describe('divide', () => {
    test('divides two English digit numbers', () => {
        expect(divide(100, 10)).toBe('১০');
        expect(divide('100', '10')).toBe('১০');
    });

    test('divides two Bangla digit numbers', () => {
        expect(divide('১০০', '১০')).toBe('১০');
    });

    test('divides mixed English and Bangla digit numbers', () => {
        expect(divide('100', '১০')).toBe('১০');
        expect(divide(100, '১০')).toBe('১০');
    });

    test('returns result in English digits when en=true', () => {
        expect(divide('১০০', '১০', true)).toBe('10');
        expect(divide(100, 10, true)).toBe('10');
    });

    test('handles floating-point results with default decimal places', () => {
        expect(divide('১০০', '৩')).toBe('৩৩.৩৩৩৩৩৩৩৩৩৩৩৩');
        expect(divide(100, 3)).toBe('৩৩.৩৩৩৩৩৩৩৩৩৩৩৩');
    });

    test('handles floating-point results with custom decimal places', () => {
        expect(divide('১০০', '৩', false, 4)).toBe('৩৩.৩৩৩৩');
        expect(divide(100, 3, false, 6)).toBe('৩৩.৩৩৩৩৩৩');
    });

    test('throws error when dividing by zero', () => {
        expect(() => divide('১০০', '০')).toThrow(
            'Division by zero is not allowed.'
        );
        expect(() => divide(100, 0)).toThrow(
            'Division by zero is not allowed.'
        );
    });

    test('throws error when invalid input is provided', () => {
        expect(() => divide('abc', '১০')).toThrow(
            'Invalid input: Input must be a number or numeric string.'
        );
        expect(() => divide(100, 'abc')).toThrow(
            'Invalid input: Input must be a number or numeric string.'
        );
    });

    describe('modulo', () => {
        test('returns the remainder of two English digit numbers', () => {
            expect(modulo(10, 3)).toBe('১');
            expect(modulo('10', '3')).toBe('১');
        });

        test('returns the remainder of two Bangla digit numbers', () => {
            expect(modulo('১০', '৩')).toBe('১');
        });

        test('returns the remainder of mixed English and Bangla digit numbers', () => {
            expect(modulo('10', '৩')).toBe('১');
            expect(modulo(10, '৩')).toBe('১');
        });

        test('returns result in English digits when en=true', () => {
            expect(modulo('১০', '৩', true)).toBe('1');
            expect(modulo(10, 3, true)).toBe('1');
        });

        test('handles negative numbers', () => {
            expect(modulo('-১০', '৩')).toBe('-১');
            expect(modulo(-10, 3)).toBe('-১');
        });

        test('throws error when invalid input is provided', () => {
            expect(() => modulo('abc', '৩')).toThrow(
                'Invalid input: Input must be a number or numeric string.'
            );
            expect(() => modulo(10, 'abc')).toThrow(
                'Invalid input: Input must be a number or numeric string.'
            );
        });
    });

    describe('abs', () => {
        test('returns the absolute value of an English digit number', () => {
            expect(abs(10)).toBe('১০');
            expect(abs('-10')).toBe('১০');
        });

        test('returns the absolute value of a Bangla digit number', () => {
            expect(abs('১০')).toBe('১০');
            expect(abs('-১০')).toBe('১০');
        });

        test('returns result in English digits when en=true', () => {
            expect(abs('১০', true)).toBe('10');
            expect(abs(-10, true)).toBe('10');
        });

        test('throws error when invalid input is provided', () => {
            expect(() => abs('abc')).toThrow(
                'Invalid input: Input must be a number or numeric string.'
            );
        });
    });

    describe('sqrt', () => {
        test('returns the square root of an English digit number', () => {
            expect(sqrt(25)).toBe('৫');
            expect(sqrt('25')).toBe('৫');
        });

        test('returns the square root of a Bangla digit number', () => {
            expect(sqrt('২৫')).toBe('৫');
        });

        test('returns result in English digits when en=true', () => {
            expect(sqrt('২৫', true)).toBe('5');
            expect(sqrt(25, true)).toBe('5');
        });

        test('handles floating-point results with default decimal places', () => {
            expect(sqrt('২')).toBe('১.৪১৪২১৩৫৬২৩৭৩');
        });

        test('handles floating-point results with custom decimal places', () => {
            expect(sqrt('২', false, 4)).toBe('১.৪১৪২');
        });

        test('throws error when invalid input is provided', () => {
            expect(() => sqrt('abc')).toThrow(
                'Invalid input: Input must be a number or numeric string.'
            );
        });
    });

    describe('factorial', () => {
        test('returns the factorial of an English digit number', () => {
            expect(factorial(5)).toBe('১২০');
            expect(factorial('5')).toBe('১২০');
        });

        test('returns the factorial of a Bangla digit number', () => {
            expect(factorial('৫')).toBe('১২০');
        });

        test('returns result in English digits when en=true', () => {
            expect(factorial('৫', true)).toBe('120');
            expect(factorial(5, true)).toBe('120');
        });

        test('throws error for non-integer input', () => {
            expect(() => factorial('৫.৫')).toThrow(
                'Invalid input: Input must be a non-negative integer.'
            );
        });

        test('throws error for negative input', () => {
            expect(() => factorial('-৫')).toThrow(
                'Invalid input: Input must be a non-negative integer.'
            );
        });

        test('throws error when invalid input is provided', () => {
            expect(() => factorial('abc')).toThrow(
                'Invalid input: Input must be a non-negative integer.'
            );
        });
    });

    describe('pow', () => {
        test('returns the power of two English digit numbers', () => {
            expect(pow(2, 3)).toBe('৮');
            expect(pow('2', '3')).toBe('৮');
        });

        test('returns the power of two Bangla digit numbers', () => {
            expect(pow('২', '৩')).toBe('৮');
        });

        test('returns the power of mixed English and Bangla digit numbers', () => {
            expect(pow('2', '৩')).toBe('৮');
            expect(pow(2, '৩')).toBe('৮');
        });

        test('returns result in English digits when en=true', () => {
            expect(pow('২', '৩', true)).toBe('8');
            expect(pow(2, 3, true)).toBe('8');
        });

        test('handles negative exponents', () => {
            expect(pow('২', '-৩')).toBe('০.১২৫');
        });

        test('throws error when invalid input is provided', () => {
            expect(() => pow('abc', '৩')).toThrow(
                'Invalid input: Input must be a number or numeric string.'
            );
            expect(() => pow(2, 'abc')).toThrow(
                'Invalid input: Input must be a number or numeric string.'
            );
        });
    });

    describe('log', () => {
        test('returns the natural logarithm of an English digit number', () => {
            expect(log(10)).toBe('২.৩০২৫৮৫০৯২৯৯৪');
            expect(log('10')).toBe('২.৩০২৫৮৫০৯২৯৯৪');
        });

        test('returns the natural logarithm of a Bangla digit number', () => {
            expect(log('১০')).toBe('২.৩০২৫৮৫০৯২৯৯৪');
        });

        test('returns result in English digits when en=true', () => {
            expect(log('১০', true)).toBe('2.302585092994');
            expect(log(10, true)).toBe('2.302585092994');
        });

        test('throws error for non-positive input', () => {
            expect(() => log('০')).toThrow(
                'Invalid input: Input must be a positive number.'
            );
            expect(() => log('-১০')).toThrow(
                'Invalid input: Input must be a positive number.'
            );
        });

        test('throws error when invalid input is provided', () => {
            expect(() => log('abc')).toThrow(
                'Invalid input: Input must be a positive number.'
            );
        });
    });

    describe('log10', () => {
        test('returns the base 10 logarithm of an English digit number', () => {
            expect(log10(10)).toBe('১');
            expect(log10('10')).toBe('১');
        });

        test('returns the base 10 logarithm of a Bangla digit number', () => {
            expect(log10('১০')).toBe('১');
        });

        test('returns result in English digits when en=true', () => {
            expect(log10('১০', true)).toBe('1');
            expect(log10(10, true)).toBe('1');
        });

        test('throws error for non-positive input', () => {
            expect(() => log10('০')).toThrow(
                'Invalid input: Input must be a positive number.'
            );
            expect(() => log10('-১০')).toThrow(
                'Invalid input: Input must be a positive number.'
            );
        });

        test('throws error when invalid input is provided', () => {
            expect(() => log10('abc')).toThrow(
                'Invalid input: Input must be a positive number.'
            );
        });
    });

    describe('log2', () => {
        test('returns the base 2 logarithm of an English digit number', () => {
            expect(log2(2)).toBe('১');
            expect(log2('2')).toBe('১');
        });

        test('returns the base 2 logarithm of a Bangla digit number', () => {
            expect(log2('২')).toBe('১');
        });

        test('returns result in English digits when en=true', () => {
            expect(log2('২', true)).toBe('1');
            expect(log2(2, true)).toBe('1');
        });

        test('throws error for non-positive input', () => {
            expect(() => log2('০')).toThrow(
                'Invalid input: Input must be a positive number.'
            );
            expect(() => log2('-২')).toThrow(
                'Invalid input: Input must be a positive number.'
            );
        });

        test('throws error when invalid input is provided', () => {
            expect(() => log2('abc')).toThrow(
                'Invalid input: Input must be a positive number.'
            );
        });
    });

    describe('sin', () => {
        test('returns the sine of an English digit angle in radians', () => {
            expect(sin(0)).toBe('০');
            expect(sin('0')).toBe('০');
        });

        test('returns the sine of a Bangla digit angle in radians', () => {
            expect(sin('০')).toBe('০');
        });

        test('returns result in English digits when en=true', () => {
            expect(sin('০', true)).toBe('0');
            expect(sin(0, true)).toBe('0');
        });

        test('handles floating-point results with default decimal places', () => {
            expect(sin(Math.PI / 2)).toBe('১');
        });

        test('handles floating-point results with custom decimal places', () => {
            expect(sin(Math.PI / 2, false, 4)).toBe('১');
        });

        test('throws error when invalid input is provided', () => {
            expect(() => sin('abc')).toThrow(
                'Invalid input: Input must be a number or numeric string.'
            );
        });
    });

    describe('cos', () => {
        test('returns the cosine of an English digit angle in radians', () => {
            expect(cos(0)).toBe('১');
            expect(cos('0')).toBe('১');
        });

        test('returns the cosine of a Bangla digit angle in radians', () => {
            expect(cos('০')).toBe('১');
        });

        test('returns result in English digits when en=true', () => {
            expect(cos('০', true)).toBe('1');
            expect(cos(0, true)).toBe('1');
        });

        test('handles floating-point results with default decimal places', () => {
            expect(cos(Math.PI)).toBe('-১');
        });

        test('handles floating-point results with custom decimal places', () => {
            expect(cos(Math.PI, false, 4)).toBe('-১');
        });

        test('throws error when invalid input is provided', () => {
            expect(() => cos('abc')).toThrow(
                'Invalid input: Input must be a number or numeric string.'
            );
        });
    });

    describe('tan', () => {
        test('returns the tangent of an English digit angle in radians', () => {
            expect(tan(0)).toBe('০');
            expect(tan('0')).toBe('০');
        });

        test('returns the tangent of a Bangla digit angle in radians', () => {
            expect(tan('০')).toBe('০');
        });

        test('returns result in English digits when en=true', () => {
            expect(tan('০', true)).toBe('0');
            expect(tan(0, true)).toBe('0');
        });

        test('handles floating-point results with default decimal places', () => {
            expect(tan(Math.PI / 4)).toBe('১');
        });

        test('handles floating-point results with custom decimal places', () => {
            expect(tan(Math.PI / 4, false, 4)).toBe('১');
        });

        test('throws error when invalid input is provided', () => {
            expect(() => tan('abc')).toThrow(
                'Invalid input: Input must be a number or numeric string.'
            );
        });
    });
});
