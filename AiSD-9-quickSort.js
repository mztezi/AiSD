function swap(arr, index1, index2) {
    let tempVal = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tempVal;
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    i++;
    swap(arr, i, high);
    return i;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low >= high || low < 0) {
        return;
    }

    let pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
}