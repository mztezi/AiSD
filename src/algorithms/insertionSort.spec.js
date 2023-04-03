import { insertionSort } from "./insertionSort.js";

describe('insertionSort', () => {
    it('should sort array', () => {
        //assign
        const arr = [];

        //act
        insertionSort(arr);

        //assert
        expect(arr).toEqual([]);
    })

    it('should sort array', () => {
        //assign
        const arr = [1];

        //act
        insertionSort(arr);

        //assert
        expect(arr).toEqual([1]);
    })

    it('should sort array', () => {
        //assign
        const arr = [1, 2, 0, -2, 3];

        //act
        insertionSort(arr);

        //assert
        expect(arr).toEqual([-2, 0, 1, 2, 3]);
    })
})