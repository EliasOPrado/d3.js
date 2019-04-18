//javascript
var dataset = [1,2,3,4,5];

d3.select('body')
.selectAll('p')
.data(dataset)//  binded a paragraph with the dataset
.enter()
.append('p') // appends paragraph for each data element
/*.text('D3 is awesome!!');*/
.text(function(d){return d;});// the text will be changed by the data.