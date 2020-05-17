/* eslint-disable complexity*/
/* eslint-disable max-statements*/

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
      this.load.spritesheet('tenJumpThrow', 'assets/sprites/ten-jump-throw.png', {frameWidth: 425, frameHeight: 497});

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

    this.load.image('ballEnemy', 'assets/sprites/ball-purple.png');
    this.load.image('star', 'assets/sprites/star.png');
    this.load.spritesheet('telepoint', 'assets/sprites/tele-compact.png', {frameWidth: 438, frameHeight: 480});

    this.lives = 3; //placed here so lives can be updated when needed
  },
  create: function() {
      // Create objects
      console.log("GamePlay");
      console.log(this.lives);
      //Add background and platforms
      var bg = this.add.image(550, 225, 'bg')
      bg.scale = 1.25;

      //Add Score
      this.score = 0;
      this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
      //Add Hearts
      this.hearts = []
      for (let i=0; i< this.lives; i++){
        let h=1000
        let heart = this.add.sprite(h+ i*33, 30, 'heartLife').setScale(.10);
        this.hearts.push(heart);
      }

      this.platforms = this.physics.add.staticGroup();
      this.buildBGandPlatforms(this.platforms);

      //Add animations
      this.addAnims();

      //Add Player, physics and animation settings
      var playerScale = .17
      this.player = this.physics.add.sprite(config.width-100, 100, 'tenIdle').setScale(.17);
      this.buildPhysics(this.player, this.platforms);
      this.cursors = this.input.keyboard.createCursorKeys();
      this.player.on('animationcomplete', this.animComplete, this);

      //Add Player bullets reference
      this.kunai = this.add.sprite(this.player.x, this.player.y+10, 'redKunai').setScale(.2);

      this.kunais = this.add.group({
        key: 'redKunai',
        setScale: {x: .2, y: .2},
        repeat: 100,
        setXY: { x: this.player.x, y: this.player.y, stepX: 0 }
     });

     //this is to save future launched kunai
     this.kunaiBullets = []
      console.log(this.kunais)
      //visible false
        this.kunai.visible = false
        this.buildKunaiAnimations()

    //Create and Add stars
    this.stars = this.physics.add.group({
      key: 'star',
      setScale: {x: .04, y: .04},
      repeat: 7,
      setXY: { x: 20, y: 200, stepX: 125 },
      lives: 2
  });
    this.addStars(this.stars, this.player, this.platforms)
    //numDisabledStars will track if all stars have been collected, if so will activate telepoint
    this.numDisabledStars = 0

    //Setting up telepoint to be defined when all stars collected
    this.telepointSprite = undefined;

      //Add Enemy Ball, physics, and animation settings
      this.enemyBall = this.physics.add.sprite(config.width/4, 200, 'ballEnemy').setScale(.10);
      this.buildPhysics(this.enemyBall, this.platforms);
      this.enemyBall.easeX = 0
      this.enemyBall.easeXFlip = false;
      console.log(this.enemyBall)
  },

  update: function() {
      // Update objects & variables

      if(this.lives > 0)
      this.addPlayerControls(this.cursors, this.player, this.kunai);

      this.enemyBall.angle++;


      if(!this.enemyBall.easeXFlip){
        this.enemyBall.x+=this.enemyBall.easeX;
        this.enemyBall.y = -(Math.pow(1, this.enemyBall.easeX )* Math.abs(300*Math.cos(this.enemyBall.easeX )))+500
        this.enemyBall.easeX+=.02;
      } else{
          this.enemyBall.x-=this.enemyBall.easeX;
          this.enemyBall.y = -(Math.pow(1, this.enemyBall.easeX*-1 )* Math.abs(300*Math.cos(this.enemyBall.easeX*-1 )))+500
          this.enemyBall.easeX+=.02;
        }


      if (this.enemyBall.x>1050) {
        this.enemyBall.easeXFlip = true;
        console.log("maybe you're right")
        // this.enemyBall.easeX = 1
      }

      if(this.enemyBall.x <50) {
        this.enemyBall.easeXFlip = false;
        // this.enemyBall.easeX = 1
      }

      this.updateKunais();

      if (this.numDisabledStars === 8 && !this.telepointSprite) {
        this.addTeleportationPoint();
      }

      //ball movement

  },

  buildBGandPlatforms: function(platforms){
    //64 represents the center of the tiles

    //tile groundMiddle across bottom of screen
    var scale =.3
    for (let i = 64*scale; i < 1200; i += 128*scale ){
      platforms.create(i, 540, 'groundMiddle').setScale(scale).refreshBody();
    }

    //tiles floating-ground at top of screen
    for (let i = 64*scale; i < 800; i += 128*scale){
        platforms.create(i, 150, 'floatM').setScale(scale).refreshBody();
        if(i + 128*scale >= 800)
          platforms.create(i + 128*scale, 150, 'floatR').setScale(scale).refreshBody();
    }


        //tiles on upper right
        for (let i = 1000; i < 1200; i += 128*scale ){
          //if first tile add floatL tileto the left
          if(i==1000) {
            platforms.create(i-128*scale, 280, 'floatL').setScale(scale).refreshBody();
          }
          platforms.create(i, 280, 'floatM').setScale(scale).refreshBody();
        }


    //tiles floating ground near bottom of screen
    for (let i = 64*scale; i < 200; i += 128*scale){
      platforms.create(i, 400, 'floatM').setScale(scale).refreshBody();
      if(i + 128*scale >= 200)
        platforms.create(i + 128*scale, 400, 'floatR').setScale(scale).refreshBody();
  }

      //ground floating near middle of screen
      for (let i = 400; i < 600; i += 128*scale){
        if(i==400) {
          platforms.create(i-128*scale, 300, 'floatL').setScale(scale).refreshBody();
        }
        platforms.create(i, 300, 'floatM').setScale(scale).refreshBody();
        if(i + 128*scale >= 600)
          platforms.create(i + 128*scale, 300, 'floatR').setScale(scale).refreshBody();
    }

  },
  addAnims(){

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
          frames: this.anims.generateFrameNumbers('tenIdle', { start: 0, end: 20 }),
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

    this.anims.create({
    key: 'crouch',
    frames: this.anims.generateFrameNumbers('tenSlide', { start: 0, end: 5 }),
    frameRate: 10,
    repeat: true
    });

    this.anims.create({
    key: 'ko',
    frames: this.anims.generateFrameNumbers('tenDead', { start: 0, end: 8}),
    frameRate: 10,
    hideOnComplete: true,
    repeat: -1
    });

    this.anims.create({
    key: 'throw',
    frames:  this.anims.generateFrameNumbers('tenJumpThrow', { start: 0, end: 9 }),
    frameRate: 9,
    repeat: 100,
    });

    this.anims.create({
      key: 'tele',
      frames:  this.anims.generateFrameNumbers('telepoint', { start: 0, end: 49 }),
      frameRate: 10,
      repeat: -1,
      });
  },
  buildPhysics: function (sprite, platforms){

      sprite.setBounce(0.2);
      sprite.setCollideWorldBounds(true);

      this.physics.add.collider(sprite, platforms);

      // player.animations.add('tenIdle', Phaser.Animation.generateFrameNumbers('tenIdle'), 30, true);

  },
  addPlayerControls: function (cursors, player, kunai){
    let count = 0

    if(cursors.space.isDown ||
       (cursors.space.isDown && cursors.left.isDown) ||
       (cursors.space.isDown && cursors.right.isDown)
      ){
      player.setVelocityX(0);
      //player.anims.currentFrame.index = 0

     //console.log(player.anims.currentFrame)

      player.anims.play('throw', true)


      if(player.anims.currentFrame.textureFrame === 9 && count===0){
        //this.kunaiLaunch();
       // console.log("YO")
        count++;
      }


    } else if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        if(!player.flipX) player.flipX = true;
        if (cursors.up.isDown)
          player.anims.play('jump', true)
        player.anims.play('left', true);

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
    } //else if(cursors.down.isDown)
    // {
    //   //player.setVelocityX(-1);
    //     player.anims.play('crouch', false);
    // }
    else if (this.lives > 0)
    {
      // player.anims.currentFrame.index = 0
        player.setVelocityX(0);
        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down && this.lives > 0)
    {
        player.setVelocityY(-300);
    }

    // if(cursors.space.isDown){
    //   player.setVelocityX(0);
    //   player.anims.stop();
    //   player.anims.play('throw', true)
    //   // this.kunaiLaunch();
    // }

    if(cursors.space.isDown){
      player.setVelocityX(0);
     player.anims.currentFrame.index = 0


      player.anims.play('throw', true)
      // this.kunaiLaunch();
    }

  },
  addBallEnemyPhysicsAndAnims: function (enemy, platforms){
    enemy.setBounce(0.2);
    enemy.setCollideWorldBounds(true);
    this.physics.add.collider(enemy, platforms);
    this.physics.add.collider(enemy, this.player);
    this.physics.add.overlap(enemy, this.player, this.playerLose, null, this);
  },
  playerLose: function(){
    console.log(this.lives)
    if(this.lives>0) this.hearts[--this.lives].visible = false;
    this.player.anims.play('ko', true);
    console.log(this.hearts)

  },
  addStars: function(stars, player, platforms){
        stars.children.iterate(function (child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        child.lives = 2;
    });

    this.physics.add.collider(stars, platforms);

    this.physics.add.overlap(player, stars, this.collectStar, null, this);
  },
  collectStar: function (player, star){

    //each star has two lives. First time it is collect, it will disappear and appear in random place. Second time it is collected it will disappear
    if(star.lives===1){
      star.disableBody(true, true);
      this.numDisabledStars++
    }

    if(star.lives > 1){
      star.x = Math.floor(Math.random()*900);
      star.y = 200;
      star.lives--
    }

    this.score+=2;
    this.scoreText.setText('Score: ' + this.score)
  },
  buildKunaiAnimations: function(){

  },
  kunaiLaunch: function(){
    var kunaiBullet = this.kunais.children.entries.pop();
    kunaiBullet.visible = true;
    //adding to an array, so multiple kunais can be launched and the position updated in the update function
    this.kunaiBullets.push(kunaiBullet)
    console.log(kunaiBullet)
    console.log(this.kunais)
    //console.log(this.kunai)
  },
  playerJumpThrow: function(){
  },
  animComplete: function (animation, frame)
    {
        if(animation.key === 'throw' && this.player.anims.currentFrame.textureFrame> 2)
        {
           this.kunaiLaunch();
            // this.animKeyStack.pop();
            // this.currentAnim = this.animKeyStack[this.animKeyStack.length - 1];
            // this.anims.play(this.currentAnim, true);
        }
    },
  easeInQuad: function (x) {
       //return 1 - Math.pow(1 - x, 3);
       return x * x;//ease in

      },
  updateKunais: function(){
          //Manually setting kunais to initially launch from where player is standing
          for (let kunai of this.kunais.children.entries){
            kunai.visible = false;
            kunai.x = this.player.x;
            kunai.y = this.player.y+10;
            kunai.flipX = this.player.flipX;
          }

          for (let kunai of this.kunaiBullets) {
            //trying to make launched Kunai more physics friendly. applying an easing function
            //if starting value not defined already defined it
            //easeInQuad source: https://easings.net/#easeInQuad
            if(!kunai.easeX) kunai.easeX = 0

            if(!kunai.flipX)
            kunai.x +=this.easeInQuad(kunai.easeX+=.1)+2
            else
             kunai.x -=this.easeInQuad(kunai.easeX+=.1)+2

          }
  },
  addTeleportationPoint(){
    this.telepointSprite = this.physics.add.sprite(100, 400, 'telepoint').setScale(.3)

    this.buildPhysics(this.telepointSprite)
    this.telepointSprite.anims.play('tele', true);

    this.physics.add.overlap(this.player, this.telepointSprite, this.teleportPlayer, null, this);
  },
  //transport player to top platform
  teleportPlayer: function(){
    this.player.x = 1000;
    this.player.y =  100;
  }
});

// Add scene to list of scenes
myGame.scenes.push(gamePlayState);
