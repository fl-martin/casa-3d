AFRAME.registerComponent("auto-shape", {
	init() {
		this.el.addEventListener("model-loaded", () => {
			this.el.setAttribute("ammo-shape", "type: mesh");
		});
	},
});
