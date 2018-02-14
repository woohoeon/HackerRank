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

function solve(year) {
    // Complete this function
    if (year === 1918) return `26.09.${year}`;

    const isLeapYear = y => {
        if (y % 4 === 0) {
            if (y < 1918 && y % 100 === 0) {
                return true;
            } else {
                if (y % 100 !== 0) return true;
                if (y % 100 === 0 && y % 400 === 0) return true;
            }
        }
        return false;
    };

    return isLeapYear(year) ? `12.09.${year}` : `13.09.${year}`;
}

function main() {
    var year = parseInt(readLine());
    var result = solve(year);
    process.stdout.write("" + result + "\n");
}