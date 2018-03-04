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

function saveThePrisoner(n, m, s) {
    // Complete this function
    let last;

    if (n === 1) { // 죄수가 1명일 경우
        last = 1;
    } else if (s === 1) { // 시작 번호가 1일 경우
        if (m % n === 0) last = n;
        else last = m % n;
    } else if (n >= m) { // 죄수가 스위츠보다 같거나 많을 경우
        last = s + (m - 1);
        if (last > n) last -= n; // 1번부터 다시 나누어주어서 마지막 번호를 찾음
    } else {
        m = m % n; // 죄수들에게 모두 똑같이 나누어 주고 나머지 
        last = s + (m - 1);
        if (last > n) last -= n;
    }

    return last;
}

function main() {
    var t = parseInt(readLine());
    for (var a0 = 0; a0 < t; a0++) {
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var m = parseInt(n_temp[1]);
        var s = parseInt(n_temp[2]);
        var result = saveThePrisoner(n, m, s);
        process.stdout.write("" + result + "\n");
    }
}