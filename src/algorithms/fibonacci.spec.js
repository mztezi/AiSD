import { fibonacciI } from "./fibonacci.js";

describe('fibonacci', () => {
    it('should return 0 for argument 1', () => {
        //assign
        const nNumber = 1;

        //act
        const nFibo = fibonacciI(nNumber);

        //assert
        expect(nFibo).toEqual(0);
    });

    it('should return 1 for argument 2', () => {
        //assign
        const nNumber = 2;

        //act
        const nFibo = fibonacciI(nNumber);

        //assert
        expect(nFibo).toEqual(1);
    });

    it('should return 1 for argument 3', () => {
        //assign
        const nNumber = 3;

        //act
        const nFibo = fibonacciI(nNumber);

        //assert
        expect(nFibo).toEqual(1);
    });

    it('should return 34 for argument 10', () => {
        //assign
        const nNumber = 10;

        //act
        const nFibo = fibonacciI(nNumber);

        //assert
        expect(nFibo).toEqual(34);
    });
});