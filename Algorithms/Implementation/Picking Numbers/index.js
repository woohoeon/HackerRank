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

function pickingNumbers(a) {
    // Complete this function
    const ar = a.reduce((ac, x) => {
        if (!ac[x]) ac[x] = 1;
        else ac[x] = ac[x] + 1;
        return ac;
    }, {});

    let answer = 1;
    for (let v in ar) {
        if (ar.hasOwnProperty(v)) {
            let ans;
            if (ar.hasOwnProperty(Number(v) + 1)) {
                ans = Math.abs(ar[v] + ar[Number(v) + 1]);
            }
            if (ar.hasOwnProperty(Number(v) - 1)) {
                ans = Math.abs(ar[v] + ar[Number(v) - 1]);
            }
            if (ans > answer) answer = ans;
            if (ar[v] > answer) answer = ar[v];
        }
    }
    return answer;
}

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    var result = pickingNumbers(a);
    process.stdout.write("" + result + "\n");
}