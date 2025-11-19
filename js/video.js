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
	video.playbackRate = 0.9;
	console.log("Video Slowed to" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = 1.1;
	console.log("Video Sped to" + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video");

});

// document.querySelector("#mute").addEventListener("click", function() {
// });