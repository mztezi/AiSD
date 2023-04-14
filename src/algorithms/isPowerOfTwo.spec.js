import { isPowerOfTwo } from "./isPowerOfTwo.js";

describe('isPowerOfTwo', () => {
    it('should return false', () => {
        //assign
        const testNumb = 0;

        //act
        const answer = isPowerOfTwo(testNumb);

        //assert
        expect(answer).toBe(false);
    })

    it('should return true', () => {
        //assign
        const testNumb = 1;

        //act
        const answer = isPowerOfTwo(testNumb);

        //assert
        expect(answer).toBe(true);
    })

    it('should return true', () => {
        //assign
        const testNumb = 2;

        //act
        const answer = isPowerOfTwo(testNumb);

        //assert
        expect(answer).toBe(true);
    })

    it('should return false', () => {
        //assign
        const testNumb = 57;

        //act
        const answer = isPowerOfTwo(testNumb);

        //assert
        expect(answer).toBe(false);
    })

    it('should return true', () => {
        //assign
        const testNumb = 2 ** 16;

        //act
        const answer = isPowerOfTwo(testNumb);

        //assert
        expect(answer).toBe(true);
    })

    it('should return false', () => {
        //assign
        const testNumb = 2 ** 16 + 2;

        //act
        const answer = isPowerOfTwo(testNumb);

        //assert
        expect(answer).toBe(false);
    })
})