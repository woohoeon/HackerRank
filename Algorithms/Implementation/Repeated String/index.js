process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function repeatedString(s, n) {
    // Complete this function
    const getAlen = len => new Array(len).fill('').reduce((acc, x, i) => s[i] === 'a' ? acc += 1 : acc, 0);

    const isAllA = len => s.length === len ? true : false;

    const sLen = s.length,
        aLen = getAlen(s.length);

    let result;

    if (isAllA(aLen)) {
        result = n;
    } else if (sLen >= n) {
        result = getAlen(n);
    } else if (sLen < n) {
        const quotient = Math.floor(n / sLen),
            remainder = n % sLen;

        let count = quotient * aLen;

        if (remainder > 0) count += getAlen(remainder);

        result = count;
    }

    return result;
}

function main() {
    var s = readLine();
    var n = parseInt(readLine());
    var result = repeatedString(s, n);
    process.stdout.write("" + result + "\n");
}