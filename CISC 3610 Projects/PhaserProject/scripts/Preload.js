var preloadState = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize:
  function Preload(){
      Phaser.Scene.call(this, {key: 'Preload'});
  },
  preload: function() {
  // Preload images for this state


      //Ten character spritesheets
      this.load.spritesheet('tenIdle', 'assets/sprites/ten-idle.png',{frameWidth: 290, frameHeight: 500});
      this.load.spritesheet('tenRun', 'assets/sprites/ten-run.png', {frameWidth: 376, frameHeight: 520});
      this.load.spritesheet('tenJump', 'assets/sprites/ten-jump.png', {frameWidth: 376, frameHeight: 520});
      this.load.spritesheet('tenDead', 'assets/sprites/ten-dead-9.png', {frameWidth: 578, frameHeight: 599});
      this.load.spritesheet('tenAttack', 'assets/sprites/ten-attack.png', {frameWidth: 524, frameHeight: 565});
      this.load.spritesheet('tenGlide', 'assets/sprites/ten-glide.png', {frameWidth: 505, frameHeight: 574});
      this.load.spritesheet('tenSlide', 'assets/sprites/ten-Slide.png', {frameWidth: 397, frameHeight: 401});
      this.load.spritesheet('tenJumpThrow', 'assets/sprites/ten-jump-throw.png', {frameWidth: 425, frameHeight: 597});

      this.load.image('redKunai', 'assets/sprites/kunai.png');


    // Red Character spritesheets
    this.load.spritesheet('redDead', 'assets/sprites/red-dead-30.png', {frameWidth: 601, frameHeight: 502});
    this.load.spritesheet('redIdle', 'assets/sprites/red-idle-16.png', {frameWidth: 416, frameHeight: 454});
    this.load.spritesheet('redJump', 'assets/sprites/red-jump-30.png', {frameWidth: 416, frameHeight: 454});
    this.load.spritesheet('redRun', 'assets/sprites/red-run-20.png', {frameWidth: 416, frameHeight: 454});


    //Android Character spritesheets
    this.load.spritesheet('androidIdle', 'assets/sprites/android-idle.png', {frameWidth: 290, frameHeight: 500});


    //Background Items
    this.load.image('bg', 'assets/sprites/BG.png')

    //Misc Items
    this.load.image('heartContainer', 'assets/sprites/heart-container');
    this.load.image('heartLife', 'assets/sprites/heart-life');
    this.load.image('flowerBullets', 'assets/sprites/flower-bullets');
    this.load.image('flowerHealing', 'assets/sprites/flower-healing');

      this.scene.start('MainMenu');


  },

  create: function() {
      console.log("Preload");

  },
  update: function() {
      // Update objects & variables
  }
});

// Add scene to list of scenes
myGame.scenes.push(preloadState);
