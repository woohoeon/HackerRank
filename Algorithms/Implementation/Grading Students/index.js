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

function solve(grades) {
    // Complete this function
    return grades.reduce((a, x) => {
        const rest = x % 5;
        if (x > 37 && rest === 4) x += 1;
        if (x > 37 && rest === 3) x += 2;
        a.push(x);
        return a;
    }, []);
}

function main() {
    var n = parseInt(readLine());
    var grades = [];
    for (var grades_i = 0; grades_i < n; grades_i++) {
        grades[grades_i] = parseInt(readLine());
    }
    var result = solve(grades);
    console.log(result.join("\n"));
}

