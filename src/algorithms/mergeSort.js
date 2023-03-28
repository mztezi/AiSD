function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let output = [];

    while (left.length && right.length) {
        left[0] < right[0] ? output.push(left.shift()) : output.push(right.shift());
    }

    output = [...output, ...left, ...right];

    return output;
}