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
      this.load.spritesheet('tenJump', 'assets/sprites/ten-jump.png', {frameWidth: 399, frameHeight: 543});
      this.load.spritesheet('tenDead', 'assets/sprites/ten-dead-9.png', {frameWidth: 578, frameHeight: 599});
      this.load.spritesheet('tenAttack', 'assets/sprites/ten-attack.png', {frameWidth: 524, frameHeight: 565});
      this.load.spritesheet('tenGlide', 'assets/sprites/ten-glide.png', {frameWidth: 505, frameHeight: 574});
      this.load.spritesheet('tenSlide', 'assets/sprites/ten-Slide.png', {frameWidth: 397, frameHeight: 401});
      this.load.spritesheet('tenJumpThrow', 'assets/sprites/ten-jump-throw.png', {frameWidth: 425, frameHeight: 497});

      this.load.image('kunai', 'assets/sprites/kunai.png');


    // Red Character spritesheets
    this.load.spritesheet('redDead', 'assets/sprites/red-dead-30.png', {frameWidth: 601, frameHeight: 502});
    this.load.spritesheet('redIdle', 'assets/sprites/red-idle-16.png', {frameWidth: 416, frameHeight: 454});
    this.load.spritesheet('redJump', 'assets/sprites/red-jump-30.png', {frameWidth: 415, frameHeight: 454});
    this.load.spritesheet('redRun', 'assets/sprites/red-run-20.png', {frameWidth: 416, frameHeight: 454});


    //Android Character spritesheets
    this.load.spritesheet('androidIdle', 'assets/sprites/android-idle.png', {frameWidth: 567, frameHeight: 556});


    //Background Items
    this.load.image('bg', 'assets/sprites/BG.png')
    this.load.image('groundLeft', 'assets/tiles/ground-left.png')
    this.load.image('groundMiddle', 'assets/tiles/ground-middle.png')
    this.load.image('groundRight', 'assets/tiles/ground-right.png')
    this.load.image('floatL', 'assets/tiles/ground-float-l.png')
    this.load.image('floatM', 'assets/tiles/ground-float-m.png')
    this.load.image('floatR', 'assets/tiles/ground-float-r.png')

    //Control Items
    this.load.image('title', 'assets/title/rescue-ops-logo.png')
    this.load.image('name', 'assets/title/logo-name.png')
    this.load.image('start', 'assets/title/start-button.png')
    this.load.image('spacebar', 'assets/title/spacebar.png')
    this.load.image('rightleft', 'assets/title/right-left.png')
    this.load.image('up', 'assets/title/up.png')

    //Misc Items
    this.load.image('heartContainer', 'assets/sprites/heart-container.png');
    this.load.image('heartLife', 'assets/sprites/heart-life.png');
    this.load.image('flowerBullets', 'assets/sprites/flower-bullets.png');
    this.load.image('flowerHealing', 'assets/sprites/flower-healing.png');

    this.load.image('ballEnemy', 'assets/sprites/ball-purple.png');
    this.load.image('star', 'assets/sprites/star.png');
    this.load.spritesheet('telepoint', 'assets/sprites/tele-compact.png', {frameWidth: 438, frameHeight: 480});



      //this.scene.start('MainMenu');


  },

  create: function() {
      console.log("Preload");
      this.addAnims();

      this.add.image(config.width/2, config.height/2, 'bg').setScale(1.1)
      this.player = this.add.sprite(150, 400, 'tenIdle').setScale(.50);
      this.player.anims.play('tIdle')
      this.red = this.add.sprite(950, 410, 'redIdle').setScale(.50);
      this.red.flipX = true;
      this.red.anims.play('rIdle')

      this.add.image(config.width/2, 110, 'title');
      this.add.image(config.width/2, 210, 'name')

        this.startButton = this.add.sprite(config.width/2, 400, 'start')
        this.startButton.scale = .5;
        this.startButton.setInteractive();
        this.startButton.on('pointerup', ()=>{
              //temp while I get Main menu set up
              // this.scene.start('GamePlay');
              this.scene.start('MainMenu');

      });

  },
  update: function() {
      // Update objects & variables
  },
  addAnims: function(){

    this.anims.create({
      key: 'tIdle',
      // frames: [ { key: 'tenIdle' } ],
      // frameRate: 20
      frames: this.anims.generateFrameNumbers('tenIdle', { start: 0, end: 2 }),
      frameRate: 2,
      repeat: 400
  });
    this.anims.create({
      key: 'rIdle',
      // frames: [ { key: 'tenIdle' } ],
      // frameRate: 20
      frames: this.anims.generateFrameNumbers('redIdle', { start: 0, end: 15 }),
      frameRate: 4,
      repeat: 400
  });

  }
});

// Add scene to list of scenes
myGame.scenes.push(preloadState);
