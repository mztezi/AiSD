import { insertionSort } from "./insertionSort.js";

describe('insertionSort', () => {
    it('should leave initial empty array unchanged, was empty and should be empty', () => {
        //assign
        const arr = [];

        //act
        insertionSort(arr);

        //assert
        expect(arr).toEqual([]);
    });

    it('should leave initial array unchanged, was [1] and should be [1]', () => {
        //assign
        const arr = [1];

        //act
        insertionSort(arr);

        //assert
        expect(arr).toEqual([1]);
    });

    it('should rearrange elements in array from [1, 2, 0, -2, 3] into [-2, 0, 1, 2, 3]', () => {
        //assign
        const arr = [1, 2, 0, -2, 3];

        //act
        insertionSort(arr);

        //assert
        expect(arr).toEqual([-2, 0, 1, 2, 3]);
    });
})