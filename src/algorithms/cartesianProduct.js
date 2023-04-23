export function cartesianProduct(arrA, arrB) {
    const arrC = [];

    for (let i = 0; i < arrA.length; i++) {
        for (let j = 0; j < arrB.length; j++) {
            arrC.push([arrA[i], arrB[j]]);
        }
    }

    return arrC;
}