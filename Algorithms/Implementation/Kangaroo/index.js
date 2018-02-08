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

function kangaroo(x1, v1, x2, v2) {
    // Complete this function
    let i = 0,
        ans = 'NO',
        c1 = x1,
        c2 = x2;

    const getPostion = (x, v) => x + v;

    while (i <= 10000) {
        c1 = getPostion(c1, v1);
        c2 = getPostion(c2, v2);
        if (c1 === c2) {
            ans = 'YES';
            break;
        }
        i++;
    }

    return ans;
}

function main() {
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);
    var result = kangaroo(x1, v1, x2, v2);
    process.stdout.write("" + result + "\n");
}
