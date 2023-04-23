import { swap } from "../common/swap.js";

function partition(arr, startIndex, endIndex) {
  const pivot = arr[endIndex];
  let i = startIndex - 1;

  for (let j = startIndex; j < endIndex; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  i++;
  swap(arr, i, endIndex);

  return i;
}

export function quickSort(arr, startIndex = 0, endIndex = arr.length - 1) {
  if (startIndex >= endIndex || startIndex < 0) {
    return;
  }

  const pivot = partition(arr, startIndex, endIndex);

  quickSort(arr, startIndex, pivot - 1);
  quickSort(arr, pivot + 1, endIndex);
}
