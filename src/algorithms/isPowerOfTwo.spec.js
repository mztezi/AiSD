import { isPowerOfTwo } from "./isPowerOfTwo.js";

describe('isPowerOfTwo', () => {
    it('should return false for argument 0', () => {
        //assign
        const testNumb = 0;

        //act
        const output = isPowerOfTwo(testNumb);

        //assert
        expect(output).toBe(false);
    });

    it('should return true for argument 1', () => {
        //assign
        const testNumb = 1;

        //act
        const output = isPowerOfTwo(testNumb);

        //assert
        expect(output).toBe(true);
    });

    it('should return true for argument 2', () => {
        //assign
        const testNumb = 2;

        //act
        const output = isPowerOfTwo(testNumb);

        //assert
        expect(output).toBe(true);
    });

    it('should return false for argument 57', () => {
        //assign
        const testNumb = 57;

        //act
        const output = isPowerOfTwo(testNumb);

        //assert
        expect(output).toBe(false);
    });

    it('should return true for argument (2 ** 16)', () => {
        //assign
        const testNumb = 2 ** 16;

        //act
        const output = isPowerOfTwo(testNumb);

        //assert
        expect(output).toBe(true);
    });

    it('should return false for argument (2 ** 16 + 2)', () => {
        //assign
        const testNumb = 2 ** 16 + 2;

        //act
        const output = isPowerOfTwo(testNumb);

        //assert
        expect(output).toBe(false);
    });
})