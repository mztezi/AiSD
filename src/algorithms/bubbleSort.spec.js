import { bubbleSortAlt, bubbleSort } from './bubbleSort.js';

describe('bubbleSort', () => {
    describe('bubbleSortAlt', () => {
        it('should rearrange elements in array from [1, 4, 0, -6, 7] into [-6, 0, 1, 4, 7]', () => {
            //assign
            const arr = [1, 4, 0, -6, 7];

            //act
            bubbleSortAlt(arr);

            //assert
            expect(arr).toEqual([-6, 0, 1, 4, 7]);
        });

        it('should leave initial array unchanged, was [1] and should be [1]', () => {
            //assign
            const arr = [1];

            //act
            bubbleSortAlt(arr);

            //assert
            expect(arr).toEqual([1]);
        });

        it('should leave initial empty array unchanged, was empty and should be empty', () => {
            //assign
            const arr = [];

            //act
            bubbleSortAlt(arr);

            //assert
            expect(arr).toEqual([]);
        });
    })

    describe('bubbleSort', () => {
        it('should rearrange elements in array from [1, 4, 0, -6, 7] into [-6, 0, 1, 4, 7]', () => {
            //assign
            const arr = [1, 4, 0, -6, 7];

            //act
            bubbleSort(arr);

            //assert
            expect(arr).toEqual([-6, 0, 1, 4, 7]);
        });

        it('should leave initial array unchanged, was [1] and should be [1]', () => {
            //assign
            const arr = [1];

            //act
            bubbleSort(arr);

            //assert
            expect(arr).toEqual([1]);
        });

        it('should leave initial empty array unchanged, was empty and should be empty', () => {
            //assign
            const arr = [];

            //act
            bubbleSort(arr);

            //assert
            expect(arr).toEqual([]);
        });
    })
});