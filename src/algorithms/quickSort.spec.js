import { quickSort } from "./quickSort.js";

describe('quickSort', () => {
    it('should rearrange elements in array from [0, 1, -5, -8, -1, 4, 2] into [-8, -5, -1, 0, 1, 2, 4]', () => {
        //assign
        const arr = [0, 1, -5, -8, -1, 4, 2];

        //act
        quickSort(arr);

        //assert
        expect(arr).toEqual([-8, -5, -1, 0, 1, 2, 4]);
    });

    it('should leave initial array unchanged, was [1] and should be [1]', () => {
        //assign
        const arr = [1];

        //act
        quickSort(arr);

        //assert
        expect(arr).toEqual([1]);
    });

    it('should leave initial empty array unchanged, was empty and should be empty', () => {
        //assign
        const arr = [];

        //act
        quickSort(arr);

        //assert
        expect(arr).toEqual([]);
    });
});