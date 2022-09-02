
function showTime(){
    var date = new Date(); //returns a static date value
    var h = date.getHours(); //between 0-23
    var m = date.getMinutes(); //btw 0-59
    var s = date.getSeconds(); //btw 0-59
    var session = 'AM';

    //this block resets btw 12 to 0
    if (h == 0) {
        h = 12;
    }

    //this block subt hrs greater than 12 and also set PM
    if(h > 12){
        h = h-12;
        session = 'PM';
    }

    //we use ternary operators to make the h, m, s become two digit values
    // syntax = (condition ? if true: if false);
    //we use this to add 0 before digit less than 10
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    //this is the time var which displays the time format
    var time = h + ":" + m + ":" + s + " " + session; 

    document.getElementById('time').innerHTML = time;

    //this method is used to update time and keep it running.
    //synthax = setTimeout(funciton, milliseconds, param1, param2, ...)
    setTimeout(showTime, 1000);
}
showTime();