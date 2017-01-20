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
var div1 = $('#one-but');
var div2 = $('.profilePic');
var pos1 = div1.position();
var pos2 = div2.position();

line1.attr('x1',pos1.left).attr('y1',pos1.top).attr('x2',pos2.left).attr('y2',pos2.top);