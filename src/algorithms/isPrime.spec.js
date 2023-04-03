import { isPrime } from "./isPrime.js";

describe('isPrime', () => {
    it('should return an answer if given number is prime or not', () => {
        //assign
        const testNumb = 0;

        //act
        const answer = isPrime(testNumb);

        //assert
        expect(answer).toBe(false);
    })

    it('should return an answer if given number is prime or not', () => {
        //assign
        const testNumb = 1;

        //act
        const answer = isPrime(testNumb);

        //assert
        expect(answer).toBe(false);
    })

    it('should return an answer if given number is prime or not', () => {
        //assign
        const testNumb = 2;

        //act
        const answer = isPrime(testNumb);

        //assert
        expect(answer).toBe(true);
    })

    it('should return an answer if given number is prime or not', () => {
        //assign
        const testNumb = 17;

        //act
        const answer = isPrime(testNumb);

        //assert
        expect(answer).toBe(true);
    })

    it('should return an answer if given number is prime or not', () => {
        //assign
        const testNumb = (Math.floor(100 * Math.random()) + 2) * (Math.floor(100 * Math.random()) + 2);

        //act
        const answer = isPrime(testNumb);

        //assert
        expect(answer).toBe(false);
    })

    it('should return an answer if given number is prime or not', () => {
        //assign
        const primeArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
        const randomIndex = Math.floor(Math.random() * primeArray.length);
        const testNumb = primeArray[randomIndex];

        //act
        const answer = isPrime(testNumb);

        //assert
        expect(answer).toBe(true);
    })
})