function isPrime(n) {
    if (n === 2 || n === 3) {
        return true;
    }

    if (n <= 1 || n % 2 === 0) {
        return false;
    }

    let SqRoot = Math.sqrt(n);

    for (let i = 3; i <= SqRoot; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

function isPrimeOptimized(n) {
    if (n === 2 || n === 3) {
        return true;
    }

    if (n <= 1 || n % 2 === 0 || n % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i < n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}