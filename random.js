var r = new Rune({
  container: "#canvas",
  width: 1600,
  height: 1200,
  debug: false
});

function randomColor() {
  return new Rune.Color('hsv', Rune.random(0, 360), Rune.random(20, 100), Rune.random(20, 100));
}

//var show = Rune.random(1) > .3;


//if(show) {
for(var i = 0; i < 16; i++) {
	for(var j = 0; j < r.width; j++) {
		r.rect(20 * j, 20 * i + r.random(200,600), 20, 20)
		.stroke(255)
		.fill(randomColor());
	}
}
//}



r.draw();