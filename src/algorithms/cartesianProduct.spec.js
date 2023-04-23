import { cartesianProduct } from "./cartesianProduct.js";

describe('cartesianProduct', () => {
    it('should return [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]] for arguments [1, 2] and [3, 4, 5]', () => {
        //assign
        const arrA = [1, 2];
        const arrB = [3, 4, 5];

        //act
        const arrC = cartesianProduct(arrA, arrB);

        //assert
        expect(arrC).toEqual([[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]);
    });

    it('should return empty set for arguments [] and [1, 2, 3]', () => {
        // assign
        const arrA = [];
        const arrB = [1, 2, 3];

        // act
        const arrC = cartesianProduct(arrA, arrB);

        // assert
        expect(arrC).toEqual([]);
    });

    it('should return empty set for arguments [1, 2] and []', () => {
        // assign
        const arrA = [1, 2];
        const arrB = [];

        // act
        const arrC = cartesianProduct(arrA, arrB);

        // assert
        expect(arrC).toEqual([]);
    });

    it('should return empty set for arguments [] and []', () => {
        // assign
        const arrA = [];
        const arrB = [];

        // act
        const arrC = cartesianProduct(arrA, arrB);

        // assert
        expect(arrC).toEqual([]);
    });
})