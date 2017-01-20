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
// var div3 = $('.mainMenu');
var pos1 = div1.offset();
var pos2 = div2.offset();
// var pos3 = 

line1.attr('x1',pos1.left + div1.width()/2).attr('y1',pos1.top + div1.height()/2).attr('x2',pos2.left + div2.width()/2).attr('y2',pos2.top + div2.height()/2);