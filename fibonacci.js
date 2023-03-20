function fibonacci(n) {
    const arr = [...Array(n).keys()];

    const output = arr.reduce((acc, _, index) => {
        const current = (index <= 1) ? index : (acc[index - 1] + acc[index - 2]);
        return [...acc, current];
    }, []);

    return output;
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

    let n_minus_1 = 1;
    let n_minus_2 = 0;

    for (let i = 4; i <= n; i++) {
        n_minus_1 = n_minus_1 + n_minus_2;
        n_minus_2 = n_minus_1 - n_minus_2;
    }

    return n_minus_1 + n_minus_2;
}

function fibonacciRSingleEl(n) {
    return (n <= 2) ? n - 1 : fibonacciRSingleEl(n - 1) + fibonacciRSingleEl(n - 2);
}

