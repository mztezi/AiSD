import { quickSort } from "./quickSort.js";

describe('mergeSort', () => {
    it('should return [-8, -5, -1, 0, 1, 2, 4]', () => {
        //assign
        const arr = [0, 1, -5, -8, -1, 4, 2];

        //act
        quickSort(arr);

        //assert
        expect(arr).toEqual([-8, -5, -1, 0, 1, 2, 4]);
    })

    it('should return [1]', () => {
        //assign
        const arr = [1];

        //act
        quickSort(arr);

        //assert
        expect(arr).toEqual([1]);
    })

    it('should return empty array', () => {
        //assign
        const arr = [];

        //act
        quickSort(arr);

        //assert
        expect(arr).toEqual([]);
    })
});