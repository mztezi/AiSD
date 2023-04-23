import { factorial } from "./factorial.js";

describe('factorial', () => {
    it('should return 1 for argument 0', () => {
        //assign
        const testNumber = 0;

        //act
        const factorialOfTestNumber = factorial(testNumber);

        //assert
        expect(factorialOfTestNumber).toEqual(1);
    });

    it('should return 1 for argument 1', () => {
        //assign
        const testNumber = 1;

        //act
        const factorialOfTestNumber = factorial(testNumber);

        //assert
        expect(factorialOfTestNumber).toEqual(1);
    });

    it('should return 120 for argument 5', () => {
        //assign
        const testNumber = 5;

        //act
        const factorialOfTestNumber = factorial(testNumber);

        //assert
        expect(factorialOfTestNumber).toEqual(120);
    });
});