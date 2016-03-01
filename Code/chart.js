var wrapper;

google.load('visualization', '1.0', {'packages':['corechart']});



function drawVisualization() {

  // Draw a column chart
  wrapper = new google.visualization.ChartWrapper({
    chartType: 'ColumnChart',
    dataTable: [['Germany', 'USA', 'Brazil', 'Canada', 'France', 'RU'],
                [700, 300, 400, 500, 600, 800]],
    options: {'title': 'Countries'},
    containerId: 'visualization'
  });

  // Never called.
  google.visualization.events.addListener(wrapper, 'onmouseover', uselessHandler);
 
  // Must wait for the ready event in order to
  // request the chart and subscribe to 'onmouseover'.
  google.visualization.events.addListener(wrapper, 'ready', onReady);

  wrapper.draw();

  // Never called
  function uselessHandler() {
    alert("I am never called!");
  }

  function onReady() {
    google.visualization.events.addListener(wrapper.getChart(), 'onmouseover', usefulHandler);
  }

  // Called
  function usefulHandler() {
    alert("Mouseover event!");
  }
}

model = [{ nodelist: {C_0: {color: 'blue', style: 'filled'}, 
    H_0: {type: 's', shape: 'record', color: 'blue', label: 'foo'}, 
    H_1: {type: 's'}, H_2: {type: 's'}, 
    C_1: {type: 's'}, H_3: {type: 's'}, 
    H_4: {type: 's'}, H_5: {type: 's'}}, 
    edgelist: {C_0: ['H_0:f1', 'H_1', 'H_2', 'C_1'], C_1: ['H_3', 'H_4', 'H_5']}, 
    params: {node: {shape: 'circle', color: 'red'}, edge: {color: 'blue'}}},

{ nodelist: {C_0: {}, 
    H_0: {type: 's', shape: 'record', color: 'blue', label: 'foo', style: 'filled'}, 
    H_1: {type: 's'}, H_2: {type: 's'}, 
    C_1: {type: 's'}, H_3: {type: 's'}, 
    H_4: {type: 's'}, H_5: {type: 's'}}, 
    edgelist: {C_0: ['H_0:f1', 'H_1', 'H_2', 'C_1'], C_1: ['H_3', 'H_4', 'H_5']}, 
    params: {node: {shape: 'circle', color: 'red'}, edge: {color: 'blue'}}},

{ nodelist: {C_0: {}, 
    H_0: {type: 's', shape: 'record', label: 'foo'}, 
    H_1: {type: 's', style: 'filled', color: 'blue'}, H_2: {type: 's'}, 
    C_1: {type: 's'}, H_3: {type: 's'}, 
    H_4: {type: 's'}, H_5: {type: 's'}}, 
    edgelist: {C_0: ['H_0:f1', 'H_1', 'H_2', 'C_1'], C_1: ['H_3', 'H_4', 'H_5']}, 
    params: {node: {shape: 'circle', color: 'red'}, edge: {color: 'blue'}}},

     ]

tcount = 0;
animationLoop = function() {

  $('#visualization').gchart($.gchart.graphviz(true, model[tcount].nodelist,
    model[tcount].edgelist, model[tcount].params ))

  tcount = tcount + 1 % 3
}

startAnim = function() {
  t = setInterval(animationLoop,500)
}

//google.setOnLoadCallback(drawVisualization);
window.onready = startAnim;