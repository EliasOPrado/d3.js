//javascript
var data = [80, 100, 56, 120, 180, 30, 40, 120, 160];

// set 3

var svgWidth = 500, svgHeight = 300;

var svg = d3.select('svg')
.attr('width', svgWidth)
.attr('height', svgHeight);

var xScale = d3.scaleLinear()
.domain([0, d3.max(data)])
.range([0, svgWidth]);

var yScale = d3.scaleLinear()
.domain([0, d3.max(data)])
.range([svgHeight, 0]);

var x_axis = d3.axisBottom()
.scale(xScale);

var y_axis = d3.axisLeft()
.scale(yScale);

svg.append('g')
.attr('transform', 'translate(50, 10)')
.call(y_axis);

var xAxisTranslate = svgHeight - 20;

svg.append('g')
.attr('transform', 'translate(50, ' + xAxisTranslate +')')
.call(x_axis);

//set 2

/*var svgWidth = 500, svgHeight = 300, barPadding = 5;// will be used to give the svg width/height and padding
var barWidth = (svgWidth/dataset.lenght);


var svg =d3.select('svg')
.attr('width', svgWidth)
.attr('height', svgHeight);

var yScale = d3.scaleLinear()
.domain([0, d3.max(dataset)])
.range([0, svgHeight]);

var barChart = svg.selectAll('rect')
.data(dataset)
.enter()
.append('rect')
.attr('y', function(d){
    return svgHeight - yScale(d); // will draw the bar based on the data number
})
.attr('height', function(d){
    return yScale(d);
})
.attr('width', barWidth - barPadding)
.attr('transform', function (d, i){
    var translate = [barWidth * i, 0];
    return 'translate('+translate+')';
});*/


//set 1


/*d3.select('body')
.selectAll('p')
.data(dataset)//  binded a paragraph with the dataset
.enter()
.append('p') // appends paragraph for each data element
/*.text('D3 is awesome!!');*/
/*.text(function(d){return d;});// the text will be changed by the data.*/