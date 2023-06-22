
window.onload = function () {
    var outputLabel = document.getElementById("outputLabel");

    document.getElementById("printBtn").onclick = function () {
        outputLabel.innerHTML = "Hello World";
    };

    document.getElementById("boldBtn").onclick = function () {
        outputLabel.style.fontWeight = "bold";
    };

    document.getElementById("italicBtn").onclick = function () {
        outputLabel.style.fontStyle = "italic";
    };

    document.getElementById("underlineBtn").onclick = function () {
        outputLabel.style.textDecoration = "underline";
    };

    document.getElementById("resetBtn").onclick = function () {
        outputLabel.style.fontWeight = "normal";
        outputLabel.style.fontStyle = "normal";
        outputLabel.style.textDecoration = "none";
    };
};
