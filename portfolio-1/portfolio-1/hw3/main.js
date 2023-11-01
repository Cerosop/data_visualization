let myGraph3 = document.getElementById('myGraph3');

let trace13 ={};
trace13.type ="pie";
trace13.title = "10/04 jcg";
trace13.hole = 0.5;
trace13.labels =[];
trace13.values =[];
trace13.domain = {
    row: 0,
    column: 0
};
for(let x = 0; x < evaluation_ratio.length; x++){
    trace13.labels[x] = evaluation_ratio[x]['name'];
    trace13.values[x] = evaluation_ratio[x]['count'];
}

let trace23 ={};
trace23.type ="pie";
trace23.title = "10/07 jcg";
trace23.hole = 0.5;
trace23.labels =[];
trace23.values =[];
trace23.domain = {
    row: 0,
    column: 1
};
for(let x = 0; x < evaluation_ratio2.length; x++){
    trace23.labels[x] = evaluation_ratio2[x]['name'];
    trace23.values[x] = evaluation_ratio2[x]['count'];
}

let data3 = [];
data3.push(trace13);
data3.push(trace23);
let layout3 = {
    margin:{
        t:10,
        l:0
    },
    grid:{
        rows: 1,
        columns: 2
    }
};
Plotly.newPlot(myGraph3, data3, layout3);
