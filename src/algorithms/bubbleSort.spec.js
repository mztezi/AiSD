import { bubbleSortAlt, bubbleSort } from './bubbleSort.js';

describe('bubbleSort', () => {
    it('should sort array and return [-6, 0, 1, 4, 7]', () => {
        //assign
        const arr = [1, 4, 0, -6, 7];

        //act
        bubbleSortAlt(arr);

        //assert
        expect(arr).toEqual([-6, 0, 1, 4, 7]);
    });

    it('should return [1]', () => {
        //assign
        const arr = [1];

        //act
        bubbleSortAlt(arr);

        //assert
        expect(arr).toEqual([1]);
    });

    it('should return empty array', () => {
        //assign
        const arr = [];

        //act
        bubbleSortAlt(arr);

        //assert
        expect(arr).toEqual([]);
    });

    it('should sort array and return [-6, 0, 1, 4, 7]', () => {
        //assign
        const arr = [1, 4, 0, -6, 7];

        //act
        bubbleSort(arr);

        //assert
        expect(arr).toEqual([-6, 0, 1, 4, 7]);
    });

    it('should return [1]', () => {
        //assign
        const arr = [1];

        //act
        bubbleSort(arr);

        //assert
        expect(arr).toEqual([1]);
    });

    it('should return empty array', () => {
        //assign
        const arr = [];

        //act
        bubbleSort(arr);

        //assert
        expect(arr).toEqual([]);
    });
});