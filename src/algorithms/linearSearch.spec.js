import { linearSearch } from "./linearSearch.js";

describe('linearSearch', () => {
    it('should return 2', () => {
        //assign
        const arr = [0, 1, -3, 5, 8, -1];
        const testNumb = -3;

        //act
        const index = linearSearch(arr, testNumb);

        //assert
        expect(index).toEqual(2);
    })

    it('should return -1', () => {
        //assign
        const arr = [0, 1, -3, 5, 8, -1];
        const testNumb = 4;

        //act
        const index = linearSearch(arr, testNumb);

        //assert
        expect(index).toEqual(-1);
    })

    it('should return -1', () => {
        //assign
        const arr = [];
        const testNumb = -3;

        //act
        const index = linearSearch(arr, testNumb);

        //assert
        expect(index).toEqual(-1);
    })
})