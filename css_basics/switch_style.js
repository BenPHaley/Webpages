function style(x) {
    window.alert("Here is x : " + x);
    var text = "";
    switch (x) {
        case 1:
            text = "<link rel=\"stylesheet\" type=\"text/css\" href=\"style1.css\" id=\"stylesheet\">";
            break;
        case 2:
            text = "<link rel=\"stylesheet\" type=\"text/css\" href=\"style2.css\" id=\"stylesheet\">";
            break;
        case 3:
            text = "<link rel=\"stylesheet\" type=\"text/css\" href=\"style3.css\" id=\"stylesheet\">";
            break;
        case 4:
            text = "<link rel=\"stylesheet\" type=\"text/css\" href=\"style4.css\" id=\"stylesheet\">";
            break;
    }
    document.getElementsByTagName("link").innerHTML = text;
}
