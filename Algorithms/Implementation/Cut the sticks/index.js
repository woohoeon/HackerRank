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

function cutTheSticks(arr) {
    // Complete this function
    const getMin = ar => Math.min.apply(null, ar),
        getMax = ar => Math.max.apply(null, ar);

    let result = [];

    const next = ar => {
        const min = getMin(ar);

        const count = ar.reduce((a, x, i) => {
            if (min !== 0 && x >= min) {
                a += 1;
                ar[i] = ar[i] -= min;
                if (ar[i] === 0) ar[i] = '_';
            }
            return a;
        }, 0);

        result.push(count);

        ar = ar.filter(x => x !== '_');

        if (ar.length !== 0 && getMax(ar) > 0) next(ar);
    };

    next(arr);

    return result;
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var result = cutTheSticks(arr);
    console.log(result.join("\n"));
}