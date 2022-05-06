AFRAME.registerComponent("loading-screen", {
	init() {
		this.loadingScreen = document.getElementById("loading-page");

		this.el.addEventListener("model-loaded", () => {
			this.loadingScreen.classList.add("hide");
		});
	},
});
