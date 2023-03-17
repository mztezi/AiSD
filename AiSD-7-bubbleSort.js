function swapNeat(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function swap(arr, index1, index2) {
    const tempVal = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tempVal;
}

function bubbleSort(arr) {
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] < arr[i]) {
                swap(arr, i, i + 1);
                swapped = true;
            }
        }
    } while (swapped)
}

function bubbleSortOpt(arr) {
    let n = arr.length;

    do {
        newn = 0;

        for (let i = 0; i < n - 1; i++) {
            if (arr[i + 1] < arr[i]) {
                swap(arr, i, i + 1);
                newn = i;
            }
        }

        n = newn;
    } while (n > 1)
}