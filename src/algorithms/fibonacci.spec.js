import { fibonacciI } from "./fibonacci.js";

describe('fibonacci', () => {
    it('should return 0', () => {
        //assign
        const nNumber = 1;

        //act
        const nFibo = fibonacciI(nNumber);

        //assert
        expect(nFibo).toEqual(0);
    })

    it('should return 1', () => {
        //assign
        const nNumber = 2;

        //act
        const nFibo = fibonacciI(nNumber);

        //assert
        expect(nFibo).toEqual(1);
    })

    it('should return 1', () => {
        //assign
        const nNumber = 3;

        //act
        const nFibo = fibonacciI(nNumber);

        //assert
        expect(nFibo).toEqual(1);
    })

    it('should return 34', () => {
        //assign
        const nNumber = 10;

        //act
        const nFibo = fibonacciI(nNumber);

        //assert
        expect(nFibo).toEqual(34);
    })
});