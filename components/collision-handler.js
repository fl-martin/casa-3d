AFRAME.registerComponent("collision-handler", {
	init() {
		this.elevator = document.getElementById("elevator");
		const {sceneEl} = this.el;

		this.el.addEventListener("hitstart", () => {
			this.elevator.classList.remove("hide");
			this.elevator.classList.add("show");
			sceneEl.setAttribute('elevator', {inOut: 'in'});
		});

		this.el.addEventListener("hitend", () => {
			this.elevator.classList.remove("show");
			this.elevator.classList.add("hide");
			sceneEl.setAttribute('elevator', {inOut: 'out'});
		});
	},
});
