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

function catAndMouse(x, y, z) {
    // Complete this function
    const getCatch = v => {
        let count = 1;
        if (v < z) {
            while (v <= 100) {
                if (v === z) {
                    return count;
                } else {
                    count++;
                    v++;
                }
            }
        } else {
            while (v >= 1) {
                if (v === z) {
                    return count;
                } else {
                    count++;
                    v--;
                }
            }
        }
    };

    const catA = getCatch(x),
        catB = getCatch(y);

    if (catA === catB) return ['Mouse C'];
    if (catA < catB) return ['Cat A'];
    else return ['Cat B'];
}

function main() {
    var q = parseInt(readLine());
    for (var a0 = 0; a0 < q; a0++) {
        var x_temp = readLine().split(' ');
        var x = parseInt(x_temp[0]);
        var y = parseInt(x_temp[1]);
        var z = parseInt(x_temp[2]);
        var result = catAndMouse(x, y, z);
        console.log(result.join(" "));
    }
}