function isPrime(n) {
    if (n === 2) {
        return true;
    }

    if (n <= 1 || n % 2 === 0) {
        return false;
    }

    const sqRoot = Math.sqrt(n);

    for (let i = 3; i <= sqRoot; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}