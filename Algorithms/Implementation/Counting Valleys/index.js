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

function countingValleys(n, s) {
    // Complete this function
    return new Array(n).fill(' ').reduce((a, x, i) => {
        a[0] = s[i] === 'U' ? a[0] + 1 : a[0] - 1;
        if (a[0] < 0) a[1] = 'below';
        if (a[0] === 0 && a[1] === 'below') {
            a[2] += 1;
            a[1] = 'sea';
        }
        return a;
    }, [0, 'sea', 0])[2];
}

function main() {
    var n = parseInt(readLine());
    var s = readLine();
    var result = countingValleys(n, s);
    process.stdout.write("" + result + "\n");

}