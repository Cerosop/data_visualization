let myGraph2 = document.getElementById('myGraph2');
let trace12 = {};
trace12.type ="bar";
trace12.name = "基隆市"
trace12.x =[];
trace12.y =[];
for(let i = 0; i < animals_Taipei_Zoo.length; i++){
    trace12.x[i] = animals_Taipei_Zoo[i]['name'];
    trace12.y[i] = animals_Taipei_Zoo[i]['count'];
} 

let trace22 = {};
trace22.type ="bar";
trace22.name = "嘉義市"
trace22.x =[];
trace22.y =[];
for(let i = 0; i < animals_Taoyuan_Zoo.length; i++){
    trace22.x[i] = animals_Taoyuan_Zoo[i]['name'];
    trace22.y[i] = animals_Taoyuan_Zoo[i]['count'];
} 

let data2 =[];
data2.push(trace12);
data2.push(trace22);
let layout2 = {
    margin:{
        t:0
    },
    // barmode:'stack'
};
Plotly.newPlot(myGraph2, data2, layout2);


// let myGraph2 = document.getElementById("myGraph2");
// let trace12 = {};
// trace12.type = "bar";
// trace12.name = "Lion";
// trace12.x = [];
// trace12.y = [];

// trace12.x[0] = "Taipei Zoo";
// trace12.y[0] = animals_Taipei_Zoo[0]['count'];
// trace12.x[1] = "Taoyuan Zoo";
// trace12.y[1] = animals_Taoyuan_Zoo[0]['count'];

// let trace22 = {};
// trace22.type = "bar";
// trace22.name = "Tiger";
// trace22.x = [];
// trace22.y = [];

// trace22.x[0] = "Taipei Zoo";
// trace22.y[0] = animals_Taipei_Zoo[1]['count'];
// trace22.x[1] = "Taoyuan Zoo";
// trace22.y[1] = animals_Taoyuan_Zoo[1]['count'];

// let trace32 = {};
// trace32.type = "bar";
// trace32.name = "Monkey";
// trace32.x = [];
// trace32.y = [];

// trace32.x[0] = "Taipei Zoo";
// trace32.y[0] = animals_Taipei_Zoo[2]['count'];
// trace32.x[1] = "Taoyuan Zoo";
// trace32.y[1] = animals_Taoyuan_Zoo[2]['count'];

// for(let i=0;i<animals_Taipei_Zoo.length;i++){
//     trace12.x[i] = animals_Taipei_Zoo[i]['name'];
//     trace12.y[i] = animals_Taipei_Zoo[i]['count'];
// }

// let trace22 = {};
// trace22.type = "bar";
// trace22.name = "Taoyuan Zoo";
// trace22.x = [];
// trace22.y = [];

// for (let i = 0; i < animals_Taoyuan_Zoo.length; i++) {
//     trace22.x[i] = animals_Taoyuan_Zoo[i]['name'];
//     trace22.y[i] = animals_Taoyuan_Zoo[i]['count'];
// }

// let data2 = [];
// data2.push(trace12);
// data2.push(trace22);
// data2.push(trace32);

// let layout2 = {
//     margin: {
//         t: 50
//     },
//     barmode:'stack'
// };

// Plotly.newPlot(myGraph2, data2, layout2);