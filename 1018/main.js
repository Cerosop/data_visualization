let myGraph = document.getElementById('myGraph');

let trace1 ={};
trace1.type ="pie";
trace1.title = "機器學習概論";
trace1.hole = 0.5;
trace1.labels =[];
trace1.values =[];
trace1.domain = {
    row: 0,
    column: 0
};
for(let x = 0; x < evaluation_ratio.length; x++){
    trace1.labels[x] = evaluation_ratio[x]['name'];
    trace1.values[x] = evaluation_ratio[x]['count'];
}

let trace2 ={};
trace2.type ="pie";
trace2.title = "資料視覺化";
trace2.hole = 0.5;
trace2.labels =[];
trace2.values =[];
trace2.domain = {
    row: 0,
    column: 1
};
for(let x = 0; x < evaluation_ratio2.length; x++){
    trace2.labels[x] = evaluation_ratio2[x]['name'];
    trace2.values[x] = evaluation_ratio2[x]['count'];
}

let data = [];
data.push(trace1);
data.push(trace2);
let layout = {
    margin:{
        t:10,
        l:0
    },
    grid:{
        rows: 2,
        columns: 2
    }
};
Plotly.newPlot(myGraph, data, layout);
