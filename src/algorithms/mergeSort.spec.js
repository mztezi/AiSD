import { mergeSort } from "./mergeSort.js";

describe('mergeSort', () => {
    it('should return sorted copy of a given array', () => {
        //assign
        const arr = [0, 1, -5, -8, -1, 4, 2];

        //act
        const sorted = mergeSort(arr);

        //assert
        expect(sorted).toEqual([-8, -5, -1, 0, 1, 2, 4]);
    })

    it('should sort an array', () => {
        //assign
        const arr = [1];

        //act
        const sorted = mergeSort(arr);

        //assert
        expect(sorted).toEqual([1]);
    })

    it('should sort an array', () => {
        //assign
        const arr = [];

        //act
        const sorted = mergeSort(arr);

        //assert
        expect(sorted).toEqual([]);
    })
});