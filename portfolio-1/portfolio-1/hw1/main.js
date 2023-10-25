let myGraph1 = document.getElementById('myGraph1');

let trace1 = {};
trace1.mode = "lines+markers";
trace1.type = "scatter";
trace1.visible = "true";
trace1.name = "基本時薪變化";
trace1.marker = {
    size: 10
};
trace1.text = [];
trace1.textposition = "bottom center";
trace1.textfont = {
    family: "Raleway, sans-serif",
    size: 10
};
trace1.x = [];
trace1.y = [];
for (let i = 0; i < set1.length; i++) {
    trace1.x[i] = set1[i][0];
    trace1.y[i] = set1[i][1];
    trace1.text[i] = set1[i][2];
}

let trace2 = {};
trace2.mode = "lines+markers";
trace2.type = "scatter";
trace2.visible = "false";
trace2.name = "基本工資變化";
trace2.text = [];
trace2.x = [];
trace2.y = [];
for (let i = 0; i < set2.length; i++) {
    trace2.x[i] = set2[i][0];
    trace2.y[i] = set2[i][1];
    trace2.text[i] = set2[i][2];
}

let trace3 = {};
trace3.mode = "lines+markers";
trace3.type = "scatter";
trace3.visible = "false";
trace3.name = "平均工資變化";
trace3.marker = {
    size: 10
};
trace3.text = [];
trace3.x = [];
trace3.y = [];
trace3.line = {
    color: "green",
    shape: "spline"
};
for (let i = 0; i < set3.length; i++) {
    trace3.x[i] = set3[i][0];
    trace3.y[i] = set3[i][1];
    trace3.text[i] = set3[i][2];
}

let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);

let layout = {
    margin: {
        t: 0
    },
    xaxis: {
        range: [100, 110]
    },
    yaxis: {
        range: [0, 15]
    },
    title: "Scatter and Line",
    updatemenus: [
        {
            y: 1.2, 
            x: 0.3, 
            yanchor: 'top', 
            buttons: [
                { 
                    method: 'restyle', 
                    args: ['visible', [true, false, false]], 
                    label: '基本時薪變化' 
                }, 
                { 
                    method: 'restyle', 
                    args: ['visible', [false, true, false]], 
                    label: '基本工資變化' 
                }, 
                { 
                    method: 'restyle', 
                    args: ['visible', [false, false, true]], 
                    label: '平均工資變化' 
                }, 
                { 
                    method: 'restyle', 
                    args: ['visible', [true, true, true]], 
                    label: 'Display All' 
                }
            ]
        }
    ]
};
Plotly.newPlot(myGraph1, data, layout);
