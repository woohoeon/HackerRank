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

function jumpingOnClouds(c, k) {
    // Complete this function
    let dec = 100;
    let cloude = 0;
    let clen = c.length;

    do {
        cloude += k;
        if (cloude >= clen) cloude -= clen;
        dec--;
        if (c[cloude] === 1) dec -= 2;
    } while (cloude !== 0);

    return dec;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    c = readLine().split(' ');
    c = c.map(Number);
    var result = jumpingOnClouds(c, k);
    process.stdout.write("" + result + "\n");
}