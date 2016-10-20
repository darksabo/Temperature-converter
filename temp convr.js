/**
 * Created by edwin.pena489 on 10/18/16.
 */

function convert(degree) {
    "use strict";
    if (degree == "C") {
        var d;
        d = document.getElementById("c").value * 9/5 + 32;
        document.getElementById("f").value = Math.round(d);
    } else {
        d = (document.getElementById("f").value - 32) * 5/9;
        document.getElementById("c").value = Math.round(d);
    }
}
