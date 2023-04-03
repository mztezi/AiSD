import { binarySearch, binarySearchRec } from "./binarySearch.js";

describe('binarySearch', () => {
    it('should return index (1) of given element in a given array', () => {
        //assign
        const arr = [-7, 0, 1, 3, 5];
        const target1 = 0;

        //act
        const indexOfTarget1 = binarySearch(arr, target1);

        //assert
        expect(indexOfTarget1).toEqual(1);
    })

    it('should return -1', () => {
        //assign
        const arr = [-7, 0, 1, 3, 5];
        const target2 = 2;

        //act
        const indexOfTarget2 = binarySearch(arr, target2);

        //assert
        expect(indexOfTarget2).toEqual(-1);
    })

    it('should return index (1) of given element in a given array', () => {
        //assign
        const arr = [-7, 0, 1, 3, 5];
        const target1 = 0;

        //act
        const indexOfTarget1 = binarySearchRec(arr, target1);

        //assert
        expect(indexOfTarget1).toEqual(1);
    })

    it('should return -1', () => {
        //assign
        const arr = [-7, 0, 1, 3, 5];
        const target2 = 2;

        //act
        const indexOfTarget2 = binarySearchRec(arr, target2);

        //assert
        expect(indexOfTarget2).toEqual(-1);
    })

    it('should return -1', () => {
        //assign
        const arr = [];
        const target2 = 2;

        //act
        const indexOfTarget2 = binarySearch(arr, target2);

        //assert
        expect(indexOfTarget2).toEqual(-1);
    })

    it('should return -1', () => {
        //assign
        const arr = [];
        const target2 = 2;

        //act
        const indexOfTarget2 = binarySearchRec(arr, target2);

        //assert
        expect(indexOfTarget2).toEqual(-1);
    })
});