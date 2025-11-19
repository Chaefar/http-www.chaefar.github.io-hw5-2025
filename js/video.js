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
	video=this.document.querySelector("#player1");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	video=this.document.querySelector("#player1");
	video.pause();
});

// document.querySelector("#slower").addEventListener("click", function() {
// 	console.log();
// });

// document.querySelector("#faster").addEventListener("click", function() {
// 	console.log("Speed Up Video");
// });

// document.querySelector("#skip").addEventListener("click", function() {
// 	console.log("Skip Video");
// });

// document.querySelector("#mute").addEventListener("click", function() {
// });