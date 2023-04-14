import { isPrime } from "./isPrime.js";

describe('isPrime', () => {
    it('should return false', () => {
        //assign
        const testNumb = 0;

        //act
        const answer = isPrime(testNumb);

        //assert
        expect(answer).toBe(false);
    })

    it('should return false', () => {
        //assign
        const testNumb = 1;

        //act
        const answer = isPrime(testNumb);

        //assert
        expect(answer).toBe(false);
    })

    it('should return true', () => {
        //assign
        const testNumb = 2;

        //act
        const answer = isPrime(testNumb);

        //assert
        expect(answer).toBe(true);
    })

    it('should return true', () => {
        //assign
        const testNumb = 17;

        //act
        const answer = isPrime(testNumb);

        //assert
        expect(answer).toBe(true);
    })

    it('should return false', () => {
        //assign
        const testNumb = 23 * 16;

        //act
        const answer = isPrime(testNumb);

        //assert
        expect(answer).toBe(false);
    })

    it('should return true', () => {
        //assign
        const primeArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
        const testNumb = primeArray[17];

        //act
        const answer = isPrime(testNumb);

        //assert
        expect(answer).toBe(true);
    })
})