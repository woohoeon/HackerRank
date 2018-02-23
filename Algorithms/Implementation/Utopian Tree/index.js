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

function utopianTree(n) {
    // Complete this function
    return new Array(n).fill('').reduce((a, x, i) => {
        if (i % 2 === 0) a *= 2;
        else a += 1;
        return a;
    }, 1);
}

function main() {
    var t = parseInt(readLine());
    for (var a0 = 0; a0 < t; a0++) {
        var n = parseInt(readLine());
        var result = utopianTree(n);
        process.stdout.write("" + result + "\n");
    }
}
