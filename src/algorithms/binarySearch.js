export function binarySearch(arr, target) {

    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let middleIndex;

    while (leftIndex <= rightIndex) {
        middleIndex = Math.floor((rightIndex + leftIndex) / 2);
        const valueAtMiddleIndex = arr[middleIndex];

        if (valueAtMiddleIndex < target) {
            leftIndex = middleIndex + 1;
        } else if (valueAtMiddleIndex > target) {
            rightIndex = middleIndex - 1;
        } else {
            return middleIndex;
        }
    }

    return -1;
}

export function binarySearchRec(arr, target, leftIndex = 0, rightIndex = (arr.length - 1)) {
    if (leftIndex > rightIndex) {
        return -1;
    }

    let middleIndex = Math.floor((rightIndex + leftIndex) / 2);

    if (arr[middleIndex] === target) {
        return middleIndex;
    }

    else if (arr[middleIndex] < target) {
        return binarySearchRec(arr, target, middleIndex + 1, rightIndex);
    }

    else if (arr[middleIndex] > target) {
        return binarySearchRec(arr, target, leftIndex, middleIndex - 1);
    }

}