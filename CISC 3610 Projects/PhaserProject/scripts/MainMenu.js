var mainMenuState = new Phaser.Class({
  // Define scene
  Extends: Phaser.Scene,
  initialize:
  function MainMenu(){
      Phaser.Scene.call(this, {key: 'MainMenu'});
  },

  preload: function() {
      // Preload images for this state
  },

  create: function() {
      console.log("MainMenu");

      this.add.image(config.width/2, config.height/2, 'bg').setScale(1.1)

      var intro = this.add.text(20, 20, 'There have been a string of abductions of youth with metagenes. The mysterious special forces entity known as the Rescue Ops has sent Ten on a stealth mission to rescue Little Red and Little Blue. Ten must defeat the Android guarding them and guide them to safety. ', { fontFamily: 'Monaco, Georgia, "Goudy Bookletter 1911", Times, serif', color:  '#ff00ff', fontSize: '26px', align: 'justify', fontWeight: 'bold',   strokeThickness: 5,
      wordWrap: {
        width: 1075,
        callback: null,
        callbackScope: null,
        useAdvancedWrap: false}});





      //game.scene.start('GamePlay');
  },

  update: function() {
      // Update objects & variables
  }
});

// Add scene to list of scenes
myGame.scenes.push(mainMenuState);
