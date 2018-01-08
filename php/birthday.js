var day = "<select name='day'>";
var x = 0;
for (x = 0; x < 32;x++) {
    day += "<option value=\'" + x + "\'>" + x + "</option>";
}
day += "</select>";
document.getElementById('day').innerHTML = text;
