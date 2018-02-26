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

function viralAdvertising(n) {
    // Complete this function
    return new Array(n).fill('').reduce((a, x, i) => {
        if (i === 0) a[1] = a[0] = Math.floor(a[0] / 2);
        else a[1] += a[0] = Math.floor((a[0] * 3) / 2);
        return a;
    }, [5, 0])[1];
}

function main() {
    var n = parseInt(readLine());
    var result = viralAdvertising(n);
    process.stdout.write("" + result + "\n");

}
