letmyGraph = document.getElementById("myGraph");
Plotly.newPlot(myGraph, [{ x: [1, 2, 3, 4, 5], y: [1, 2, 4, 8, 16] }], {
    margin: { t: 25 },
});