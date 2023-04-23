import { binarySearch, binarySearchRec } from "./binarySearch.js";

describe('binarySearch', () => {
    describe('binarySearch', () => {
        it('should return 1 for 0 in [-7, 0, 1, 3, 5]', () => {
            //assign
            const arr = [-7, 0, 1, 3, 5];
            const target = 0;

            //act
            const indexOfTarget = binarySearch(arr, target);

            //assert
            expect(indexOfTarget).toEqual(1);
        });

        it('should return -1 for 2 in [-7, 0, 1, 3, 5]', () => {
            //assign
            const arr = [-7, 0, 1, 3, 5];
            const target = 2;

            //act
            const indexOfTarget = binarySearch(arr, target);

            //assert
            expect(indexOfTarget).toEqual(-1);
        });

        it('should return -1 for 2 in empty array', () => {
            //assign
            const arr = [];
            const target = 2;

            //act
            const indexOfTarget = binarySearch(arr, target);

            //assert
            expect(indexOfTarget).toEqual(-1);
        });
    })

    describe('binarySearchRec', () => {
        it('should return 1 for 0 in [-7, 0, 1, 3, 5]', () => {
            //assign
            const arr = [-7, 0, 1, 3, 5];
            const target = 0;

            //act
            const indexOfTarget = binarySearchRec(arr, target);

            //assert
            expect(indexOfTarget).toEqual(1);
        });

        it('should return -1 for 2 in [-7, 0, 1, 3, 5]', () => {
            //assign
            const arr = [-7, 0, 1, 3, 5];
            const target = 2;

            //act
            const indexOfTarget = binarySearchRec(arr, target);

            //assert
            expect(indexOfTarget).toEqual(-1);
        });

        it('should return -1 for 2 in empty array', () => {
            //assign
            const arr = [];
            const target = 2;

            //act
            const indexOfTarget = binarySearchRec(arr, target);

            //assert
            expect(indexOfTarget).toEqual(-1);
        });
    })
});