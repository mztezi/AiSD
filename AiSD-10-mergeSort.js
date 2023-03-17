function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let left = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < Math.floor(arr.length / 2)) {
            left = [...left, arr[i]];
        } else {
            right = [...right, arr[i]];
        }
    }

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

function merge(left, right) {
    let output = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            output = [...output, left[0]];
            left.shift();
        } else {
            output = [...output, right[0]];
            right.shift();
        }
    }

    while (left.length > 0) {
        output = [...output, left[0]];
        left.shift();
    }

    while (right.length > 0) {
        output = [...output, right[0]];
        right.shift();
    }

    return output;
}