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

function breakingRecords(score) {
    // Complete this function
    let start = score[0],
        hs = start,
        ls = start;

    return score.reduce((a, x) => {
        if (x > hs) {
            a[0] += 1;
            hs = x;
        }
        if (x < ls) {
            a[1] += 1;
            ls = x;
        }
        return a;
    }, [0, 0]);
}

function main() {
    var n = parseInt(readLine());
    score = readLine().split(' ');
    score = score.map(Number);
    var result = breakingRecords(score);
    console.log(result.join(" "));
}
