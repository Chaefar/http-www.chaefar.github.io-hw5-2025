var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video=this.document.querySelector("#player1");
	video.autoplay=false;
	console.log("autoplay set to"+ video.autoplay);
	video.loop=false;
	console.log("autoplay set to"+ video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Video Plays")
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Video Pause")
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate*0.9;
	console.log("Video Slowed to " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate/0.9;
	console.log("Video Sped to " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
	}
	else {
		video.currentTime = video.currentTime + 10;
	}
	console.log("Video Skipped To " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted===false) {
		video.muted=true;
		document.querySelector("#mute").innerHTML="Unmute";
		console.log("Video Muted");
	}
	else {
		video.muted=false;
		document.querySelector("#mute").innerHTML="Mute";
		console.log("Video Unmuted");
	};
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = document.querySelector("#slider").value/100;
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value;
	console.log("Video Volume is " + video.volume);

});

document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector("player1").class + "oldschool"
	console.log("Video Is Old School")
});

document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector("player1").style =
	console.log("Video Is Original")
});