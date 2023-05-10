export function climbingStaircase(num) {
    if (num <= 3) {
        return num;
    }

    let nMinus2 = 1;
    let nMinus1 = 2;

    for (let i = 4; i <= num; i++) {
        nMinus1 = nMinus1 + nMinus2;
        nMinus2 = nMinus1 - nMinus2;
    }

    return nMinus1 + nMinus2;
}