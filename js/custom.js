var mainPage = $(".mainPage");
var photoPage = $(".photoPage");
var photoPal = $(".photoPalette");
var photoBig = $(".mainPhoto");
var clickFunc
var imageStr

$("#butOne").click(function() {
		$(mainPage).css("display","none")
		$(photoPage).css("display", "inherit")
});
$(".photoPage").click(function(e) {
	// console.log(e.target)
	clickFunc = $(e.target)
	// console.log(clickFunc)
	if (clickFunc[0].className == "photoPage") {
		$(mainPage).css("display", "inherit")
		$(photoPage).css("display", "none")
	} else if (clickFunc[0].className == "onePhoto") {
		// console.log("YES")
		imageStr = "images/" + clickFunc[0].id.substr(3) + ".jpg"
		console.log(clickFunc)
		console.log(imageStr)

		$(photoBig).css("display", "inherit")
		$(photoBig).html('<img src=' + imageStr + '>')
	}
})


// $("#buttonA").mouseover(function() {
// })

// $("#eight-but").click(function() {
// 	$(".mainPage").hide("slow",function(){}
// 	)

// })
// var line1 = $('#line1');
// var div2 = $('#lineDiv');
// // var div1 = $('#one-but');
// $('.buttonA').mouseenter(function(e) {

// var div1 = $(e.target);
// var pos1 = div1.position();
// var pos2 = div2.position();
// console.log(div1);
// console.log(pos1);

// line1.attr('x1',pos1.left + div1.width()/2).attr('y1',pos1.top + div1.height()/2).attr('x2',div2.width()/2).attr('y2',div2.height()/2);

// })