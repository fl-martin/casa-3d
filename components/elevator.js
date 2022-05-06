AFRAME.registerComponent("elevator", {
	schema: {inOut: {type: 'string', default: "out"}},
	init() {
		this.actualFloor = "ground";
		this.elevator = document.getElementById("elevator");
		this.elevator.innerText = "1era planta";
		this.camRig = document.getElementById("rig");

		this.elevator.addEventListener("click", () => {
			if (this.actualFloor === "ground") {
				this.elevator.innerText = "Planta baja";
				this.camRig.emit("upstairs");
				this.actualFloor = "1st";
			} else {
				this.elevator.innerText = "1era planta";
				this.camRig.emit("downstairs");
				this.actualFloor = "ground";
			}
		});
	},
	update() {
		  if(this.actualFloor === "1st") {
			this.camRig.emit("downstairs");
			this.elevator.innerText = "1era planta";
			this.actualFloor = "ground";
		  }
	},
});
