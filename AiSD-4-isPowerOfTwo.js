function isPowerOfTwo(n) {
    return Number.isInteger(Math.log2(n));
}

function logBase(base) {
    return function (n) {
        return (Math.round(n * (Math.log(n) / Math.log(base))) / n);
    }
}

function isPowerOfBase(base) {
    return function (n) {
        return Number.isInteger(logBase(base)(n));
    }
}

function isPowerOfBaseAlt(base) {
    return function (n) {
        (n < 1) ? n = 1 / n : n = n;

        if (n === 1 || n === base) {
            return true;
        }

        if (n % base !== 0) {
            return false;
        }

        while (n > 1) {
            n = n / base;
        }

        return Number.isInteger(n);

    }
}

function isPowerOfTwoAlt(n) {
    if (n < 1) {
        return false;
    }

    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }

    return true;
}

function isPowerOfBaseAlt2(base) {
    return function (n) {
        if (n < 1) {
            return false;
        }

        while (n > 1) {
            if (n % base !== 0) {
                return false;
            }
            n = n / base;
        }

        return true;
    }
}

function isPowerOfTwoBitWise(n) {
    if (n < 1) {
        return false;
    }

    return (n & (n - 1)) === 0;
}