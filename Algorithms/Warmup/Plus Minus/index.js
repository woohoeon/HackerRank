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

function plusMinus(arr) {
    // Complete this function
    let index;

    const toFixed = n => n.toFixed(6);

    const list = arr.reduce((a, x, i) => {
        index = i;
        if (x > 0) {
            a[0]++;
        } else if (x < 0) {
            a[1]++;
        } else if (x === 0) {
            a[2]++;
        }
        return a;
    }, new Array(3).fill(0));

    index++;

    console.log([toFixed(list[0] / index), toFixed(list[1] / index), toFixed(list[2] / index)].join('\n'));
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    plusMinus(arr);
}