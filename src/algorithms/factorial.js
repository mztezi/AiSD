function factorial(n) {
    if (n === 0) {
        return 1;
    }

    const arr = [...Array(n).keys()]
        .map(el => el + 1);

    return arr.reduce((acc, curr) => acc * curr);
}

function factorialIt(n) {
    if (n === 0) {
        return 1;
    }

    let output = 1;
    for (let i = 2; i <= n; i++) {
        output *= i;
    }

    return output;
}

function factorialR(n) {
    return (n === 0) ? 1 : n * factorialR(n - 1);
}