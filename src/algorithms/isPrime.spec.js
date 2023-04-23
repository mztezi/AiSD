import { isPrime } from "./isPrime.js";

describe('isPrime', () => {
    it('should return false for argument 0', () => {
        //assign
        const testNumb = 0;

        //act
        const output = isPrime(testNumb);

        //assert
        expect(output).toBe(false);
    });

    it('should return false for argument 1', () => {
        //assign
        const testNumb = 1;

        //act
        const output = isPrime(testNumb);

        //assert
        expect(output).toBe(false);
    });

    it('should return true for argument 2', () => {
        //assign
        const testNumb = 2;

        //act
        const output = isPrime(testNumb);

        //assert
        expect(output).toBe(true);
    });

    it('should return true for argument 17', () => {
        //assign
        const testNumb = 17;

        //act
        const output = isPrime(testNumb);

        //assert
        expect(output).toBe(true);
    });

    it('should return false for argument (23 * 16)', () => {
        //assign
        const testNumb = 23 * 16;

        //act
        const output = isPrime(testNumb);

        //assert
        expect(output).toBe(false);
    });

    it('should return true for argument 61 (which is element at index 17 in array of prime numbers less than 100)', () => {
        //assign
        const primeArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
        const testNumb = primeArray[17];

        //act
        const output = isPrime(testNumb);

        //assert
        expect(output).toBe(true);
    });
})