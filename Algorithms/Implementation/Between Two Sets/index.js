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

function getTotalX(a, b) {
    // Complete this function
    const aMax = Math.max.apply(null, a),
        bMin = Math.min.apply(null, b);

    const evenlyA = value => a.every(x => value % x === 0);

    const evenlyB = value => b.every(x => x % value === 0);

    let result = 0;

    const answer = i => {
        if (evenlyA(i) && evenlyB(i)) result++;
        if (i <= bMin) answer(++i);
    };

    answer(aMax);

    return result;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    b = readLine().split(' ');
    b = b.map(Number);
    var total = getTotalX(a, b);
    process.stdout.write("" + total + "\n");
}
