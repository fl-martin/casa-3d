AFRAME.registerComponent("click-upstairs", {
	init() {
		this.camRig = document.getElementById("rig");
		this.cam = document.getElementById("camera");
		this.el.addEventListener("click", () => this.camRig.emit("upstairs"));
		//this.el.addEventListener("click", () => this.cam.emit("reset-pos"));
	},
});
