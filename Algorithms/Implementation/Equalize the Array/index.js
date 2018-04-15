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

function equalizeArray(arr) {
    // Complete this function
    const obj = arr.reduce((a, x) => {
        if (a.hasOwnProperty(x)) a[x]++;
        else a[x] = 1;
        if (a[x] > a.max) {
            a.max = a[x];
            a.key = x;
        }
        return a;
    }, { max: 0, key: null });

    const maxCount = obj[obj.key];

    return arr.length - maxCount;
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var result = equalizeArray(arr);
    process.stdout.write("" + result + "\n");

}