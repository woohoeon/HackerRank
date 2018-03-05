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

function circularArrayRotation(n, k, q, a, m) {
    // Complete this function
    const d = k % n;
    return m.reduce((acc, x) => {
        const i = (x - d);
        if (i + 1 === 0) acc.push(a.slice(i));
        else acc.push(a.slice(i, i + 1));
        return acc;
    }, []);
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    var q = parseInt(n_temp[2]);
    a = readLine().split(' ');
    a = a.map(Number);
    var m = [];
    for (var m_i = 0; m_i < q; m_i++) {
        m[m_i] = parseInt(readLine());
    }
    var result = circularArrayRotation(n, k, q, a, m);
    console.log(result.join("\n"));
}

