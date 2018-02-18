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

function getMoneySpent(keyboards, drives, s) {
    // Complete this function
    const cheapKeyboard = Math.min.apply(null, keyboards),
        cheapDrive = Math.min.apply(null, drives);

    if (s <= cheapKeyboard || s <= cheapDrive) return -1;

    const filterKeyboards = keyboards.filter(x => x + cheapDrive <= s),
        filterDrives = drives.filter(x => x + cheapKeyboard <= s);

    if (filterKeyboards.length === 0 || filterKeyboards.length === 0) return -1;

    return filterKeyboards.reduce((a, x, i) => {
        const v = filterDrives.reduce((acc, y, index) => {
            const _case = x + y;
            if (_case >= acc && _case <= s) acc = _case;
            return acc;
        }, 0);
        if (v >= a) a = v;
        return a;
    }, 0);
}

function main() {
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);
    var n = parseInt(s_temp[1]);
    var m = parseInt(s_temp[2]);
    keyboards = readLine().split(' ');
    keyboards = keyboards.map(Number);
    drives = readLine().split(' ');
    drives = drives.map(Number);
    //  The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
    var moneySpent = getMoneySpent(keyboards, drives, s);
    process.stdout.write("" + moneySpent + "\n");
}