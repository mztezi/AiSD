function isPrime(n) {
    if (n === 2) {
        return true;
    }

    if (n <= 1 || n % 2 === 0) {
        return false;
    }

    const SqRoot = Math.sqrt(n);

    for (let i = 3; i <= SqRoot; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}