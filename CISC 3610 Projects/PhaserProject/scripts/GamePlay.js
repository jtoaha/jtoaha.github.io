var gamePlayState = new Phaser.Class({
  // Define scene
  Extends: Phaser.Scene,
  initialize:
  function GamePlay(){
      Phaser.Scene.call(this, {key: 'GamePlay'});
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
    this.load.image('groundLeft', 'assets/tiles/ground-left.png')
    this.load.image('groundMiddle', 'assets/tiles/ground-middle.png')
    this.load.image('groundRight', 'assets/tiles/ground-right.png')
    this.load.image('floatL', 'assets/tiles/ground-float-l.png')
    this.load.image('floatM', 'assets/tiles/ground-float-m.png')
    this.load.image('floatR', 'assets/tiles/ground-float-r.png')

    //Misc Items
    this.load.image('heartContainer', 'assets/sprites/heart-container.png');
    this.load.image('heartLife', 'assets/sprites/heart-life.png');
    this.load.image('flowerBullets', 'assets/sprites/flower-bullets.png');
    this.load.image('flowerHealing', 'assets/sprites/flower-healing.png');

  },
  create: function() {
      // Create objects
      console.log("GamePlay");

      //Add background and platforms
      var bg = this.add.image(550, 225, 'bg')
      bg.scale = 1.25;
      var platforms;
      platforms = this.physics.add.staticGroup();
      this.buildBGandPlatforms(platforms);

      //Add Player, physics and animation settings
      this.player = this.physics.add.sprite(config.width/2, 200, 'tenIdle').setScale(.20);
      this.buildPlayerPhysicsAndAnims(this.player, platforms);

      this.cursors = this.input.keyboard.createCursorKeys();


  },

  update: function() {
      // Update objects & variables

      this.addPlayerControls(this.cursors, this.player);
  },

  buildBGandPlatforms: function(platforms){

    //tile groundMiddle across bottom of screen
    for (let i = 64*.5; i < 1200; i += 128*.5 ){
      platforms.create(i, 540, 'groundMiddle').setScale(.5).refreshBody();
    }
      //tile floating ground near top of screen
    for (let i = 64*.5; i < 800; i += 128*.5){
        platforms.create(i, 150, 'floatM').setScale(.5).refreshBody();
        if(i + 128*.5 >= 800)
          platforms.create(i + 128*.5, 150, 'floatR').setScale(.5).refreshBody();
    }
  },
  buildPlayerPhysicsAndAnims: function (player, platforms){

      player.setBounce(0.2);
      player.setCollideWorldBounds(true);

      this.physics.add.collider(player, platforms);

      // player.animations.add('tenIdle', Phaser.Animation.generateFrameNumbers('tenIdle'), 30, true);


      this.anims.create({
          key: 'left',
          frames:  this.anims.generateFrameNumbers('tenRun', { start: 0, end: 10 }),
          frameRate: 10,
          repeat: true
      });
      this.anims.create({
          key: 'turn',
          // frames: [ { key: 'tenIdle' } ],
          // frameRate: 20
          frames: this.anims.generateFrameNumbers('tenIdle', { start: 0, end: 10 }),
          frameRate: 10,
          repeat: true
      });



      this.anims.create({
          key: 'right',
          frames: this.anims.generateFrameNumbers('tenRun', { start: 0, end: 10 }),
          frameRate: 10,
          repeat: true
      });

      this.anims.create({
        key: 'inplacejump',
        frames: this.anims.generateFrameNumbers('tenJump', { start: 0, end: 0 }),
        frameRate: 10,
        repeat: true
    });

    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNumbers('tenJump', { start: 0, end: 20 }),
      frameRate: 10,
      repeat: true
  });
  },
  addPlayerControls(cursors, player){
    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);

        if(!player.flipX) player.flipX = true;

        if (cursors.up.isDown)  player.anims.play('jump', true);

    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
        if(player.flipX) player.flipX = false;
        if (cursors.up.isDown)  player.anims.play('jump', true);

    }
    else if (cursors.up.isDown)
    {

        player.anims.play('inplacejump', true);

    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }

  }
});

// Add scene to list of scenes
myGame.scenes.push(gamePlayState);
