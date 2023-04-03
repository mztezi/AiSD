export function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const sorted = [];

    while (left.length && right.length) {
        sorted.push((left[0] < right[0] ? left : right).shift());
    }

    return [...sorted, ...left, ...right];
}
