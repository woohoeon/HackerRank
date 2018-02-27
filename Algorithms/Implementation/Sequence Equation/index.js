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

function permutationEquation(p) {
    // Complete this function
    return p.reduce((a, v, i) => {
        const x = i + 1;
        const pi = p.indexOf(x) + 1;
        const y = p.indexOf(pi) + 1;
        a.push(y);
        return a;
    }, []);
}

function main() {
    var n = parseInt(readLine());
    p = readLine().split(' ');
    p = p.map(Number);
    var result = permutationEquation(p);
    console.log(result.join("\n"));



}
