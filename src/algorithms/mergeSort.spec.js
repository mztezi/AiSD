import { mergeSort } from "./mergeSort.js";

describe('mergeSort', () => {
    it('should return [-8, -5, -1, 0, 1, 2, 4] for argument [0, 1, -5, -8, -1, 4, 2]', () => {
        //assign
        const arr = [0, 1, -5, -8, -1, 4, 2];

        //act
        const sorted = mergeSort(arr);

        //assert
        expect(sorted).toEqual([-8, -5, -1, 0, 1, 2, 4]);
    });

    it('should return [1] for argument [1]', () => {
        //assign
        const arr = [1];

        //act
        const sorted = mergeSort(arr);

        //assert
        expect(sorted).toEqual([1]);
    });

    it('should return empty array for argument being empty array', () => {
        //assign
        const arr = [];

        //act
        const sorted = mergeSort(arr);

        //assert
        expect(sorted).toEqual([]);
    });
});