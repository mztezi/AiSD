function fibonacci(n) {
    return [...Array(n).keys()].reduce((acc, _, index) => [...acc, (index <= 1) ? index : (acc[index - 1] + acc[index - 2])], []);
}

function fibonacciR(n) {
    if (n <= 2) {
        output = [...Array(n).keys()];
    }
    else {
        const fibo = [...fibonacciR(n - 1)];
        output = [...fibo, fibo[n - 3] + fibo[n - 2]];
    }

    return output;
}

export function fibonacciI(n) {
    if (n <= 2) {
        return n - 1;
    }

    let nMinus2 = 0;
    let nMinus1 = 1;

    for (let i = 4; i <= n; i++) {
        nMinus1 = nMinus1 + nMinus2;
        nMinus2 = nMinus1 - nMinus2;
    }

    return nMinus1 + nMinus2;
}

function fibonacciRSingleEl(n) {
    return (n <= 2) ? n - 1 : fibonacciRSingleEl(n - 1) + fibonacciRSingleEl(n - 2);
}

