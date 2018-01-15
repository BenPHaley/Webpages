/*
//test to see how external javascript files work
function daySelect() {
    //will be substituted in for html and create two newlines with "Hello World!"
    //at the end of it
    text = "<br><br>Hello World!"
    document.getElementById('day').innerHTML = text;
}
*/
function param (x) {
    document.getElementById("sub").innerHTML = x+5;
}


function monthSelect() {
    var text = "<p float=\"left\">Month:</p>\n<select name=\"month\">\n<option value=\"none\"></option>\n";
    var x = 0;
    for (x = 0; x < 13; x++) {
        text += "<option value=\"" + x + "\">" + x + "</option>\n";
    }
    text += "</select>";
    document.getElementById("month").innerHTML = text;
}


function daySelect() {
    var text = "<p float=\"left\">Day:</p>\n<select name=\"day\">\n<option value=\"none\"></option>\n";
    var x = 0;
    for (x = 0; x < 32;x++) {
        text += "<option value=\"" + x + "\">" + x + "</option>\n";
    }
    text += "</select>";
    document.getElementById("day").innerHTML = text;
}


function yearSelect() {
    var text = "<p float=\"left\">Year:</p>\n<select name=\"year\">\n<option value=\"none\"></option>\n";
    var x = 0;
    for (x = 2018; x > 1949; x--) {
        text += "<option value=\"" + x + "\">" + x + "</option>\n";
    }
    text += "</select>";
    document.getElementById("year").innerHTML = text;
}
