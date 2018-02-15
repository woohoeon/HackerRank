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

function solve(n, p) {
    // Complete this function
    let frontStart, backStart;

    if (n % 2 === 0) n++;

    for (let i = 0, pa = 1; pa <= n; i++ , pa += 2) {
        if (p === pa || p === pa - 1) frontStart = i;
    }

    for (let i = 0, pa = n; pa >= 0; i++ , pa -= 2) {
        if (p === pa || p === pa - 1) backStart = i;
    }

    return frontStart < backStart ? frontStart : backStart;
}

function main() {
    var n = parseInt(readLine());
    var p = parseInt(readLine());
    var result = solve(n, p);
    process.stdout.write("" + result + "\n");

}