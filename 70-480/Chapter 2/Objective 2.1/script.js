var userAge = 10, gender = 'M';
var minimumAge = 11;
if (userAge > minimumAge) {
    if (gender == 'M') {
        //do logic for above age male
    } else {
        //do logic for above age female.
    }
} else if (gender == 'M') {
    //do logic for underage male
} else {
    //do logic for underage female.
}

var canvas = document.getElementById("canvas1");
if (canvas.style.backgroundColor == 'green' || canvas.style.backgroundColor == 'yellow') {
    alert('proceed');
} else if (canvas.style.backgroundColor == 'red') {
    alert('stop');
}

switch (canvas.style.backgroundColor) {
    case 'yellow':
    case 'green':
        alert('proceed');
        break;
    case 'red':
        alert('stop');
        break;
    default:
        alert('unknown condition');
        break;
}

canvas.style.backgroundColor == 'green' ? document.write('proceed') :
    document.write('stop');

var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby', 'tennis', 'badminton');
var index = sports.indexOf('football', 0);
var joined = sports.join(',');
sports.reverse();
alert(sports.indexOf('soccer'));
sports.sort();
alert(sports.indexOf('soccer'));
var someSports = sports.slice(1, 2);
var splicedItems = sports.splice(1, 3, 'golf', 'curling', 'darts');

sports.push('soccer', 'basketball', 'hockey');
sports.push('football');
var nextSport = sports.pop();

sports.unshift('soccer', 'basketball', 'hockey');
sports.unshift('football');
var nextSport = sports.shift();

sports.push('soccer');
sports.push('basketball');
sports.push('hockey');
var get1 = sports.shift();
sports.push('golf');
var get2 = sports.shift();

var evenNumbers = new Array(0, 2, 4, 6, 8, 9, 10, 12);
var allEven = evenNumbers.every(evenNumberCheck, this);
if (allEven) {
    // do something.
} else {
    // do something.
}
function evenNumberCheck(value, index, array) {
    return (value % 2) == 0;
}