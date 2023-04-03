import { fibonacciI } from "./fibonacci.js";

describe('fibonacci', () => {
    it('should return n-th fibonacci number for given n', () => {
        //assign
        const nNumber = 1;

        //act
        const nFibo = fibonacciI(nNumber);

        //assert
        expect(nFibo).toEqual(0);
    })

    it('should return n-th fibonacci number for given n', () => {
        //assign
        const nNumber = 2;

        //act
        const nFibo = fibonacciI(nNumber);

        //assert
        expect(nFibo).toEqual(1);
    })

    it('should return n-th fibonacci number for given n', () => {
        //assign
        const nNumber = 3;

        //act
        const nFibo = fibonacciI(nNumber);

        //assert
        expect(nFibo).toEqual(1);
    })

    it('should return n-th fibonacci number for given n', () => {
        //assign
        const nNumber = 10;

        //act
        const nFibo = fibonacciI(nNumber);

        //assert
        expect(nFibo).toEqual(34);
    })
});