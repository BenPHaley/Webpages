/* Function is not called when button is clicked because of parameter */
function style(x) {
    var text = "";
    text += "<div id=\"style\">\n";
    switch (x) {
        case 1:
            text += "<link rel=\"stylesheet\" type=\"text/css\" href=\"style1.css\" id=\"stylesheet\">";
            break;
        case 2:
            text += "<link rel=\"stylesheet\" type=\"text/css\" href=\"style2.css\" id=\"stylesheet\">";
            break;
        case 3:
            text += "<link rel=\"stylesheet\" type=\"text/css\" href=\"style3.css\" id=\"stylesheet\">";
            break;
        case 4:
            text += "<link rel=\"stylesheet\" type=\"text/css\" href=\"style4.css\" id=\"stylesheet\">";
            break;
    }
    text += "\n</div>";
    document.getElementsById("style").innerHTML = text;
}


function style1 () {
    var text = "";
    text += "<div id=\"style\">\n";
    text += "<link rel=\"stylesheet\" type=\"text/css\" href=\"style1.css\">\n";
    text += "</div>";
    document.getElementById("style").innerHTML = text;
}

function style2 () {
    var text = "";
    text += "<div id=\"style\">\n";
    text += "<link rel=\"stylesheet\" type=\"text/css\" href=\"style2.css\">\n";
    text += "</div>";
    document.getElementById("style").innerHTML = text;
}

function style3 () {
    var text = "";
    text += "<div id=\"style\">\n";
    text += "<link rel=\"stylesheet\" type=\"text/css\" href=\"style3.css\">\n";
    text += "</div>";
    document.getElementById("style").innerHTML = text;
}

function style4 () {
    var text = "";
    text += "<div id=\"style\">\n";
    text += "<link rel=\"stylesheet\" type=\"text/css\" href=\"style4.css\">\n";
    text += "</div>";
    document.getElementById("style").innerHTML = text;
}
