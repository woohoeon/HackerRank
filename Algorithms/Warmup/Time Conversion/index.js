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

function timeConversion(s) {
    // Complete this function
    const splitHourAndOther = time => {
        const hour = time[0].substring(0, 2),
            other = time[0].substring(2);
        return { hour, other };
    };

    let time = s.split('AM');

    if (time.length === 1) {
        time = s.split('PM');
        const { hour, other } = splitHourAndOther(time);
        if (hour == 12) return hour + other;
        else return (parseInt(hour, 10) + 12) + other;
    } else {
        const { hour, other } = splitHourAndOther(time);
        if (hour == 12) return '00' + other;
        else return time[0];
    }
}

function main() {
    var s = readLine();
    var result = timeConversion(s);
    process.stdout.write("" + result + "\n");
}