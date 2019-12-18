// We want to show a graph in browsers that support canvas,
// but a data table in browsers that don't.
var elem = document.createElement("canvas");

if (elem.getContext && elem.getContext("2d")) {
    showGraph();
} else {
    showTable();
}

//Modernizr helper library
if (Modernizr.canvas) {
    showGraphWithCanvas();
} else {
    showTable();
}