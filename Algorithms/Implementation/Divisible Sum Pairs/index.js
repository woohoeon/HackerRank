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

function divisibleSumPairs(n, k, ar) {
    // Complete this function
    let copy = ar.slice();

    const search = v => copy.reduce((a, x, i) => {
        if (i !== 0 && (v + x) % k === 0) a++;
        return a;
    }, 0);

    return ar.reduce((a, x) => {
        a += search(x);
        copy.shift();
        return a;
    }, 0);
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = divisibleSumPairs(n, k, ar);
    process.stdout.write("" + result + "\n");
}