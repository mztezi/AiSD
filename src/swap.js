export function swap(arr, index1, index2) {
    const tempVal = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tempVal;
}

function swapNeat(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}