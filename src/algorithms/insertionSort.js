import { swap } from "../swap.js";

function insertionSort(arr) {
  for (let i = 1; i <= arr.length; i++) {
    for (let k = 0; k < i; k++) {
      if (arr[i - k] < arr[i - k - 1]) {
        swap(arr, i - k, i - k - 1);
      } else {
        break;
      }
    }
  }
}
