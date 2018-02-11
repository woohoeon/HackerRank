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

function solve(n, s, d, m) {
    // Complete this function
    const getSum = value => new Array(m).fill('').reduce((a, x, i) => a += s[value + i], 0);
    return s.reduce((a, x, i) => {
        if (i <= n - m && getSum(i) === d) a++;
        return a;
    }, 0);
}

function main() {
    var n = parseInt(readLine());
    s = readLine().split(' ');
    s = s.map(Number);
    var d_temp = readLine().split(' ');
    var d = parseInt(d_temp[0]);
    var m = parseInt(d_temp[1]);
    var result = solve(n, s, d, m);
    process.stdout.write("" + result + "\n");
}