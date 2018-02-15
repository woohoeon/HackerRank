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

function sockMerchant(n, ar) {
    // Complete this function
    return ar.reduce((a, x, i) => {
        if (!a.match.hasOwnProperty(x)) {
            a.match[x] = 1;
        } else {
            a.match[x] += 1;
        }
        if (a.match[x] === 2) {
            a.pairs += 1;
            a.match[x] = 0;
        }
        return a;
    }, {
            pairs: 0,
            match: {}
        }).pairs;
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = sockMerchant(n, ar);
    process.stdout.write("" + result + "\n");

}