import { swap } from './src/swap.js';

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

function bubbleSortAlt(arr) {
    let swapped;

    for( ; ; k++) {
        swapped = false;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] < arr[i]) {
                swap(arr, i, i + 1);
                swapped = true;
            }
        }

        if (!swapped) break;
    }
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