
window.addEventListener('load', function () {

	var game = new Phaser.Game({

		width: 1080,
		height: 1090,

		width: 1080,
		height: 1090,
		type: Phasehir.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		}
	});
	
	game.scene.add("Boot", Boot, true);

});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.sceneFile("Preloader", "assets/scenes/Preloader.js")
	}

	create() {
		
		this.scene.start("Preloader");
	}
}
