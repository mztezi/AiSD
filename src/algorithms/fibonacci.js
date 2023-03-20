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

function fibonacciI(n) {
    if (n <= 2) {
        return n - 1;
    }

    let n_minus_2 = 0;
    let n_minus_1 = 1;

    for (let i = 4; i <= n; i++) {
        n_minus_1 = n_minus_1 + n_minus_2;
        n_minus_2 = n_minus_1 - n_minus_2;
    }

    return n_minus_1 + n_minus_2;
}

function fibonacciRSingleEl(n) {
    return (n <= 2) ? n - 1 : fibonacciRSingleEl(n - 1) + fibonacciRSingleEl(n - 2);
}

