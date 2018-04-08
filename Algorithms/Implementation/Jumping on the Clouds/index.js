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

function jumpingOnClouds(c) {
    // Complete this function
    let result = 0;
    let i = 0;

    while (i < c.length - 1) {
        if (c[i] === 0 && c[i + 2] === 0) i++;
        i++;
        result++;
    }

    return result;
}

function main() {
    var n = parseInt(readLine());
    c = readLine().split(' ');
    c = c.map(Number);
    var result = jumpingOnClouds(c);
    process.stdout.write("" + result + "\n");
}