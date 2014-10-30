// inner variables
var canvas, ctx;
var clockRadius = 50;
var clockImage;

// draw functions :
function clear() { // clear canvas function
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function drawScene(ctx, timeOffset) { // main drawScene function
    clear(); // clear canvas
	ctx.fillStyle="#FF0000";

	// circle background
	ctx.beginPath();
	ctx.arc(ctx.canvas.width/2, ctx.canvas.height/2, clockRadius-20, 0, 2 * Math.PI);
	ctx.stroke();

    //  current time
    var date = new Date();
    var hours = date.getUTCHours() + timeOffset;
    var minutes = date.getUTCMinutes();
    var hour = hours + minutes / 60;

    // save current context
    ctx.save();
    
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.beginPath();

    // draw hour
    ctx.save();
    var theta = (hour - 3) * 2 * Math.PI / 12;
    ctx.rotate(theta);
    ctx.beginPath();
    ctx.moveTo(-15, -5);
    ctx.lineTo(-15, 5);
    ctx.lineTo(clockRadius * 0.5, 1);
    ctx.lineTo(clockRadius * 0.5, -1);
    ctx.fill();
    ctx.restore();

    // draw minute
    ctx.save();
    var theta = (minutes - 15) * 2 * Math.PI / 60;
    ctx.rotate(theta);
    ctx.beginPath();
    ctx.moveTo(-15, -4);
    ctx.lineTo(-15, 4);
    ctx.lineTo(clockRadius * 0.8, 1);
    ctx.lineTo(clockRadius * 0.8, -1);
    ctx.fill();
    ctx.restore();

}

// initialization
$(function(){
	
	$('.miniclock').each(function(i, el) {
		canvas = el;
		
	    ctx = el.getContext('2d');
		var timeOffset = $(el).data("timezone");
	    var width = el.width;
	    var height = el.height;
	
	    setInterval(drawScene(ctx, timeOffset), 1000); // loop drawScene
	})

});