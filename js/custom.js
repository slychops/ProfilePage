// $("#cat").click(

// 	function(){
// 		console.log($("#cat"));
// 		$(".container").html('<img id="cat" src ="https://www.samanthasbell.com/wp-content/uploads/2015/01/dog-drawing-5.jpg">')

// }
// );


// $("#buttonA").mouseover(function() {
// })

// $("#eight-but").click(function() {
// 	$(".mainPage").hide("slow",function(){}
// 	)

// })
var line1 = $('#line1');
var div2 = $('#lineDiv');
// var div1 = $('#one-but');
$('.buttonA').mouseenter(function(e) {

var div1 = $(e.target);
var pos1 = div1.position();
var pos2 = div2.position();
console.log(div1);
console.log(pos1);

line1.attr('x1',pos1.left + div1.width()/2).attr('y1',pos1.top + div1.height()/2).attr('x2',div2.width()/2).attr('y2',div2.height()/2);

})