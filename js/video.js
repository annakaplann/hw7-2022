var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.load();
	video.autoplay = false;
	video.loop = false;
	if (video.autoplay === false){
		console.log("Autoplay is turned off")
	}
	if (video.loop === false){
		console.log("Looping is turned off")
	}
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	volume = document.getElementById("slider").value;
	document.getElementById("volume").innerHTML = volume + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.9;
	console.log("New speed is: " +video.playbackRate +"%");
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate *= 1.10;
	console.log("New speed is: " +video.playbackRate+"%");
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime + 10 >= video.duration){
		video.currentTime = 0
	}
	else{
		video.currentTime += 10
	}
	console.log("Current location:" +video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if (video.muted === false){
		video.muted = true
		document.getElementById("mute").innerHTML = "Unmute";
	}
	else{
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("Volume");
	vol = document.getElementById("slider").value * 0.01;
	video.volume = vol;
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "oldSchool";
});

document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video";
});