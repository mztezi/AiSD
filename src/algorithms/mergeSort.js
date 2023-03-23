function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

function merge(left, right) {
    let output = [];

    while (left.length && right.length) {
        left[0] < right[0] ? output = [...output, left.shift()] : output = [...output, right.shift()];
    }

    output = [...output, ...left, ...right];

    return output;
}