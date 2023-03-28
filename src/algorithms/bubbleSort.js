import { swap } from "../swap.js";

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
  } while (swapped);
}

function bubbleSortAlt(arr) {
  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] < arr[i]) {
        swap(arr, i, i + 1);
      }
    }
  }
}
