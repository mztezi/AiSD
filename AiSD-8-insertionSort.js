function swapNeat(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function swap(arr, index1, index2) {
    let tempVal = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tempVal;
}

function insertionSort(arr) {
    for (let i = 1; i <= arr.length; i++) {
        for (let k = 0; k < i; k++) {
            if (arr[i - k] < arr[i - k - 1]) {
                swap(arr, i - k, i - k - 1);
            }
            else {
                break;
            }
        }
    }
}