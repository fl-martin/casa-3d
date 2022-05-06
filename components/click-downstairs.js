AFRAME.registerComponent("click-downstairs", {
	init() {
		this.camRig = document.getElementById("rig");
		this.cam = document.getElementById("camera");
		this.el.addEventListener("click", () => this.camRig.emit("downstairs"));
		//this.el.addEventListener("click", () => this.cam.emit("reset-pos"));
	},
});
