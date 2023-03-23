import { swap } from "../swap.js";

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

  const pivot = partition(arr, low, high);

  quickSort(arr, low, pivot - 1);
  quickSort(arr, pivot + 1, high);
}
