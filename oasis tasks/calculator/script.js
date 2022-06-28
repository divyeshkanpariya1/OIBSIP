function clearScreen() {
    document.getElementById("result").value = "";
}

function delele() {
    var onscreen = document.getElementById("result").value;

    if (onscreen != "") {
        var x = onscreen.substring(0, onscreen.length - 1);
        document.getElementById("result").value = x;
    }

}

function calculate() {
    var p = document.getElementById("result").value;
    while (char_count(p, "(") > char_count(p, ")")) {
        p += ")"
    }
    var q = eval(p);
    document.getElementById("result").value = q;
}

function display(value) {
    var onscreen = document.getElementById("result").value;
    var lastchar = onscreen.charAt(onscreen.length - 1);

    if (value == ")") {

        if (char_count(onscreen, "(") > char_count(onscreen, ")") && lastchar != "(") {
            document.getElementById("result").value += value;
        }

    } else if (value == "(") {
        if (onscreen == "") {
            document.getElementById("result").value += value;
        } else if (lastchar == ")") {
            document.getElementById("result").value += "*(";
        } else if (!isNaN(lastchar)) {
            document.getElementById("result").value += "*(";
        } else {
            document.getElementById("result").value += value;
        }
    }
    else if (value == "%" || value == "-" || value == "*" || value == "/" || value == "+") {

        if (onscreen != "") {

            if (lastchar == "%" || lastchar == "-" || lastchar == "*" || lastchar == "/" || lastchar == "+") {
                delele();
                document.getElementById("result").value += value;
            } else if (lastchar == "(") {
                if (value == "+" || value == "-") {
                    document.getElementById("result").value += value;
                }
            }
            else {
                document.getElementById("result").value += value;
            }

        }

    } else if (value == "±") {
        if (onscreen == "" || lastchar == "%" || lastchar == "-" || lastchar == "*" || lastchar == "/" || lastchar == "+") {
            document.getElementById("result").value += "(-";
        }
        else {
            for (i = onscreen.length; i > 0; i--) {
                if (onscreen[i - 1] == "" || onscreen[i - 1] == "%" || onscreen[i - 1] == "-" || onscreen[i - 1] == "*" || onscreen[i - 1] == "/" || onscreen[i - 1] == "+") {
                    var newscreen = onscreen.substring(0, i) + "(-" + onscreen.substring(i, onscreen.length);
                    document.getElementById("result").value = newscreen;
                    break;
                }
                if (i == 1) {

                    document.getElementById("result").value = "(-" + onscreen;
                }
            }

        }
    }
    else {
        document.getElementById("result").value += value;
    }

}

function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}