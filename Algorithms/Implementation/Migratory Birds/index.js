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

function migratoryBirds(n, ar) {
    // Complete this function
    const newAr = ar.reduce((a, x) => {
        if (!a[x]) a[x] = 1;
        else a[x] += 1;
        return a;
    }, {});

    let max = 0,
        answer;

    for (let index in newAr) {
        if (newAr.hasOwnProperty(index) && newAr[index] > max) {
            max = newAr[index];
            answer = index;
        }
    }

    return answer;
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = migratoryBirds(n, ar);
    process.stdout.write("" + result + "\n");
}