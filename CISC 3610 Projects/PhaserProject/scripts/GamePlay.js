/* eslint-disable complexity*/
/* eslint-disable max-statements*/

//Important variables: this.levelWon = false
var gamePlayState = new Phaser.Class({
  // Define scene
  Extends: Phaser.Scene,
  initialize: function GamePlay() {
    Phaser.Scene.call(this, { key: 'GamePlay' })
  },

  preload: function () {
    // Preload images for this state

    this.lives = 3 //placed here so lives can be updated when needed
  },
  create: function () {
    console.log(myGame.scenes, "TESTING");
    // Create objects
    console.log('GamePlay')
    //Set these to false by default, until purposefully set to true
    this.levelWon = false
    this.levelLoss = false
    //Add background and platforms
    var bg = this.add.image(550, 225, 'bg')
    bg.scale = 1.25

    //Add Score
    this.score = 0
    this.scoreText = this.add.text(16, 16, 'score: 0', {
      fontSize: '32px',
      fill: '#000',
    })
    //Add Hearts
    this.hearts = []
    for (let i = 0; i < this.lives; i++) {
      let h = 1000
      let heart = this.add.sprite(h + i * 33, 30, 'heartLife').setScale(0.1)
      this.hearts.push(heart)
    }

    this.platforms = this.physics.add.staticGroup()
    this.buildBGandPlatforms(this.platforms)

    //Add animations
    this.addAnims()

    //Add Player, physics and animation settings
    var playerScale = 0.17
    this.player = this.physics.add
      .sprite(config.width/2, 400, 'tenIdle')
      .setScale(playerScale)
    this.buildPhysics(this.player, this.platforms)
    this.cursors = this.input.keyboard.createCursorKeys()
    console.log(this.cursors)
    this.player.on('animationcomplete', this.animComplete, this)

    //Add Player bullets reference so bullets launch in correct direction
    this.kunai = this.add
      .sprite(this.player.x, this.player.y + 10, 'redKunai')
      .setScale(0.2)
    //Add actual bullets
    this.kunais = this.add.group({
      key: 'star',
      setScale: { x: 0.2, y: 0.2 },
      repeat: 200,
      setXY: { x: this.player.x, y: this.player.y, stepX: 0 },
    })

    //this is to save future launched kunai
    this.kunaiBullets = []
    console.log(this.kunais)
    //visible false
    this.kunai.visible = false
    this.buildKunaiAnimations()

    //Create and Add stars
    this.stars = this.physics.add.group({
      key: 'star',
      setScale: { x: 0.04, y: 0.04 },
      repeat: 7,
      setXY: { x: 20, y: 200, stepX: 125 },
      lives: 2,
    })
    this.addStars(this.stars, this.player, this.platforms)
    //numDisabledStars will track if all stars have been collected, if so will activate telepoint
    this.numDisabledStars = 0

    //Setting up telepoint to be defined when all stars collected
    this.telepointSprite = undefined
    this.telepointEnd = undefined
    //Add Enemy Ball, physics, and animation settings
    this.enemyBall = this.physics.add.sprite(0, 200, 'ballEnemy').setScale(0.1)
    this.addBallEnemyPhysicsAndAnims(this.enemyBall, this.platforms)
    this.enemyBall.easeX = 0
    this.enemyBall.switchCosToSin= false
    console.log(this.enemyBall)

    this.currentLife = 3

    //add Android
    this.android = this.physics.add.sprite(400, 10, 'androidIdle').setScale(0.2)
    this.buildPhysics(this.android, this.platforms)

    this.physics.add.overlap(
      this.android,
      this.player,
      this.playerLose,
      null,
      this
    )
    this.android.anims.play('aIdle', true)
    //Give android 5 lives
    this.androidNumLives = 10

    // this collider was added in the kunaiLaunch method
    //this.physics.add.collider(this.android, kunaiBullet.visible, this.androidLose, null, this);

    //add Red
    this.red = this.physics.add.sprite(100, 10, 'redIdle').setScale(0.17)
    this.buildPhysics(this.red, this.platforms)
    this.red.rescued = false
    this.red.anims.play('rIdle', true)

    //Set up keyboard input for PAUSE/ HELP MODE and NEW GAME mode
    this.hKey = this.input.keyboard.addKey('h');  // Get key object

    this.pKey = this.input.keyboard.addKey('p');  // Get key object

    this.nKey = this.input.keyboard.addKey('n');  // Get key object


    this.nKey.on('down', (event) => {
      if(!myGame.isGamePlayPaused) this.scene.switch('MainMenu')

      myGame.isGamePlayPaused = true
      myGame.isGamePlayPausedState = this.scene;
    });

    this.hKey.on('down', (event) => {
      if(!myGame.isGamePlayPaused) this.scene.switch('MainMenu')
      myGame.isGamePlayPaused = true
      myGame.isGamePlayPausedState = this.scene;
    });
    this.pKey.on('down', (event) => {
      if(!myGame.isGamePlayPaused) this.scene.switch('MainMenu')
      myGame.isGamePlayPaused = true
      myGame.isGamePlayPausedState = this.scene;
    });

    this.victoryMusic = this.sound.add('victory');

  },

  update: function () {
    // Update objects & variables
    if (this.lives > 0)
      this.addPlayerControls(this.cursors, this.player, this.kunai)


      this.addKeyboardControls();



    if (this.lives === 0) {
      this.player.anims.play('ko', true)
    }

    this.updateEnemyBall()

    this.updateKunais()

     if(this.levelLoss){
        this.displayLoss();
        this.levelLoss = false; // so function doesn't get called multiple times
     }

     if(this.levelWon){
      this.displayWin();
      this.levelWon = false; // so function doesn't get called multiple times
     }
  },
  addKeyboardControls(){



    // this.hKey.on('down', function(event) {
    //   console.log("it's working")
    //   this.gamePlayPaused = true;
    //   this.scene.start('MainMenu');
    // });
    //this.pKey.on('down', function(event) { /* ... */ });
    // this.nKey.on('down', () => {
    //   this.scene.launch(myGame.scenes[1]);
    //   this.scene.pause()

      // this.add.text(
      //   100,
      //   200,
      //   "Are you sure you would like to start a new game?",
      //   {
      //     shadow: {
      //       offsetX: '10px',
      //       offsetY: '10px',
      //       color: '#000',
      //       blur: 3,
      //       stroke: true,
      //       fill: true,
      //     },
      //     fontSize: '40px',
      //     fontFamily: 'Arial',
      //     fontWeight: 'bold',
      //     color: '#ff3333',
      //    stroke: '#000000',
      //    strokeThickness: 2
      //   }
      // )
      // var resetButton = this.add.sprite(config.width / 2, 400, 'reset').setScale(.3)
      // resetButton.setInteractive()
      // resetButton.on('pointerup', () => {
      //   this.scene.launch('mainMenuState');
      // })

    //  });


  },
  buildBGandPlatforms: function (platforms) {
    //64 represents the center of the tiles

    //tile groundMiddle across bottom of screen
    var scale = 0.3

    for (let i = 64 * scale; i < 1200; i += 128 * scale) {
      //save this into an array so that ball can collide on with bottom tiles
      platforms.create(i, 540, 'groundMiddle').setScale(scale).refreshBody()
    }
    //tiles floating-ground at top of screen
    for (let i = 64 * scale; i < 800; i += 128 * scale) {
      platforms.create(i, 150, 'floatM').setScale(scale).refreshBody()
      if (i + 128 * scale >= 800)
        platforms
          .create(i + 128 * scale, 150, 'floatR')
          .setScale(scale)
          .refreshBody()
    }

    //tiles on upper right
    for (let i = 1000; i < 1200; i += 128 * scale) {
      //if first tile add floatL tileto the left
      if (i == 1000) {
        platforms
          .create(i - 128 * scale, 280, 'floatL')
          .setScale(scale)
          .refreshBody()
      }
      platforms.create(i, 280, 'floatM').setScale(scale).refreshBody()
    }

    //tiles floating ground near bottom of screen
    for (let i = 64 * scale; i < 200; i += 128 * scale) {
      platforms.create(i, 400, 'floatM').setScale(scale).refreshBody()
      if (i + 128 * scale >= 200)
        platforms
          .create(i + 128 * scale, 400, 'floatR')
          .setScale(scale)
          .refreshBody()
    }

    //ground floating near middle of screen
    for (let i = 400; i < 600; i += 128 * scale) {
      if (i == 400) {
        platforms
          .create(i - 128 * scale, 300, 'floatL')
          .setScale(scale)
          .refreshBody()
      }
      platforms.create(i, 300, 'floatM').setScale(scale).refreshBody()
      if (i + 128 * scale >= 600)
        platforms
          .create(i + 128 * scale, 300, 'floatR')
          .setScale(scale)
          .refreshBody()
    }
    console.log(this.platforms)
  },
  addAnims() {
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('tenRun', { start: 0, end: 10 }),
      frameRate: 10,
      repeat: true,
    })
    this.anims.create({
      key: 'turn',
      // frames: [ { key: 'tenIdle' } ],
      // frameRate: 20
      frames: this.anims.generateFrameNumbers('tenIdle', { start: 0, end: 20 }),
      frameRate: 10,
      repeat: true,
    })

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('tenRun', { start: 0, end: 10 }),
      frameRate: 10,
      repeat: true,
    })

    this.anims.create({
      key: 'inplacejump',
      frames: this.anims.generateFrameNumbers('tenJump', { start: 0, end: 0 }),
      frameRate: 10,
      repeat: true,
    })

    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNumbers('tenJump', { start: 0, end: 20 }),
      frameRate: 10,
      repeat: true,
    })

    this.anims.create({
      key: 'crouch',
      frames: this.anims.generateFrameNumbers('tenSlide', { start: 0, end: 5 }),
      frameRate: 10,
      repeat: true,
    })

    this.anims.create({
      key: 'ko',
      frames: this.anims.generateFrameNumbers('tenDead', { start: 0, end: 8 }),
      frameRate: 10,
      hideOnComplete: true,
      repeat: 0,
    })

    this.anims.create({
      key: 'throw',
      frames: this.anims.generateFrameNumbers('tenJumpThrow', {
        start: 0,
        end: 9,
      }),
      frameRate: 9,
      repeat: 0,
    })

    this.anims.create({
      key: 'tele',
      frames: this.anims.generateFrameNumbers('telepoint', {
        start: 0,
        end: 49,
      }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'rIdle',
      // frames: [ { key: 'tenIdle' } ],
      // frameRate: 20
      frames: this.anims.generateFrameNumbers('redIdle', { start: 0, end: 15 }),
      frameRate: 5,
      repeat: 400,
    })

    this.anims.create({
      key: 'aIdle',
      // frames: [ { key: 'tenIdle' } ],
      // frameRate: 20
      frames: this.anims.generateFrameNumbers('androidIdle', {
        start: 0,
        end: 8,
      }),
      frameRate: 5,
      repeat: 400,
    })

    this.anims.create({
      key: 'rRun',
      // frames: [ { key: 'tenIdle' } ],
      // frameRate: 20
      frames: this.anims.generateFrameNumbers('redRun', { start: 0, end: 20 }),
      frameRate: 10,
      repeat: 400,
    })
  },
  buildPhysics: function (sprite, platforms) {
    sprite.setBounce(0.2)
    sprite.setCollideWorldBounds(true)

    this.physics.add.collider(sprite, platforms)

    // player.animations.add('tenIdle', Phaser.Animation.generateFrameNumbers('tenIdle'), 30, true);
  },
  addPlayerControls: function (cursors, player, kunai) {


    let count = 0

    if (
      cursors.space.isDown ||
      (cursors.space.isDown && cursors.left.isDown) ||
      (cursors.space.isDown && cursors.right.isDown)
    ) {
      player.setVelocityX(0)
      //player.anims.currentFrame.index = 0

      //console.log(player.anims.currentFrame)

      player.anims.play('throw', true)

      if (player.anims.currentFrame.textureFrame === 9 && count === 0) {
        //this.kunaiLaunch();
        // console.log("YO")
        count++
      }
    } else if (cursors.left.isDown) {
      player.setVelocityX(-180)

      if (!player.flipX) player.flipX = true
      if (cursors.up.isDown) player.anims.play('jump', true)
      player.anims.play('left', true)
    } else if (cursors.right.isDown) {
      player.setVelocityX(180)
      player.anims.play('right', true)
      if (player.flipX) player.flipX = false

      if (cursors.up.isDown) player.anims.play('jump', true)
    } else if (cursors.up.isDown) {
      player.anims.play('inplacejump', true)
    } //else if(cursors.down.isDown)
    // {
    //   //player.setVelocityX(-1);
    //     player.anims.play('crouch', false);
    // }
    else if (this.lives > 0) {
      // player.anims.currentFrame.index = 0
      player.setVelocityX(0)
      player.anims.play('turn')
    }

    if (cursors.up.isDown && player.body.touching.down && this.lives > 0) {
      player.setVelocityY(-300)
    }

    // if(cursors.space.isDown){
    //   player.setVelocityX(0);
    //   player.anims.stop();
    //   player.anims.play('throw', true)
    //   // this.kunaiLaunch();
    // }

    if (cursors.space.isDown) {
      player.setVelocityX(0)
      player.anims.currentFrame.index = 0

      player.anims.play('throw', true)
      // this.kunaiLaunch();
    }
  },
  addBallEnemyPhysicsAndAnims: function (enemy, platforms) {
    enemy.setBounce(0.2)

    //enemy.setCollideWorldBounds(true); //removed this for now

    //added this so that ball only collides with platform on ground
    for (let i = 0; i < 31; i++) {
      this.physics.add.collider(enemy, this.platforms.children.entries[i])
    }

    this.physics.add.collider(enemy, this.player, this.playerLose, null, this)
  },
  playerLose: function () {
    console.log(this.lives)
    this.sound.play('punch');
    this.player.anims.play('ko', true)
    console.log(this.hearts)
  },
  addStars: function (stars, player, platforms) {
    stars.children.iterate(function (child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
      child.lives = 2
    })

    this.physics.add.collider(stars, platforms)

    this.physics.add.overlap(player, stars, this.collectStar, null, this)
  },
  collectStar: function (player, star) {
    //each star has two lives. First time it is collect, it will disappear and appear in random place. Second time it is collected it will disappear
    if (star.lives === 1) {
      star.disableBody(true, true)
      this.numDisabledStars++
    }

    if (this.numDisabledStars === 8) {
      this.addTeleportationPoint('star')
    }

    if (star.lives > 1) {
      star.x = Math.floor(Math.random() * 900)
      star.y = 200
      star.lives--
    }
    this.sound.play('pop');
    this.score += 2
    this.scoreText.setText('Score: ' + this.score)
  },
  buildKunaiAnimations: function () {},
  kunaiLaunch: function () {
    var kunaiBullet = this.kunais.children.entries.pop()
    kunaiBullet.visible = true
    kunaiBullet.hit = false // hasn't hit anything yet
    //no physics on bullets so difficult to implement
    // this.physics.add.collider(this.android, kunaiBullet, this.androidLose, null, this);
    //adding to an array, so multiple kunais can be launched and the position updated in the update function
    this.kunaiBullets.push(kunaiBullet)
    console.log(kunaiBullet)
    console.log(this.kunais)
    //console.log(this.kunai)
  },
  playerJumpThrow: function () {},
  animComplete: function (animation, frame) {
    if (animation.key === 'throw') {
      this.kunaiLaunch()
      // this.animKeyStack.pop();
      // this.currentAnim = this.animKeyStack[this.animKeyStack.length - 1];
      // this.anims.play(this.currentAnim, true);
    }
    if (animation.key === 'ko') {
      if (this.lives > 0) {
        this.hearts[--this.lives].visible = false

        this.player.setTint(0xff0000)

        this.player.x =
          this.enemyBall.x - config.width / 2 > 0
            ? config.width / 2 - (this.enemyBall.x - config.width / 2)
            : config.width - (this.enemyBall.x - config.width / 2)
        this.player.y = 400
        this.player.setTint(0xffffff)
      } else {
        this.levelLoss = true
      }
    }
  },
  easeInQuad: function (x) {
    //return 1 - Math.pow(1 - x, 3);
    return x * x //ease in
  },
  updateKunais: function () {
    //Manually setting kunais to initially launch from where player is standing
    for (let kunai of this.kunais.children.entries) {
      kunai.visible = false
      kunai.x = this.player.x
      kunai.y = this.player.y + 10
      kunai.flipX = this.player.flipX
    }

    for (let kunai of this.kunaiBullets) {
      //trying to make launched Kunai more physics friendly. applying an easing function
      //if starting value not defined already defined it
      //easeInQuad source: https://easings.net/#easeInQuad
      if (!this.android.visible) kunai.visible = false
      if (!kunai.easeX) kunai.easeX = 0

      if (!kunai.flipX) kunai.x += this.easeInQuad((kunai.easeX += 0.1)) + 2
      else kunai.x -= this.easeInQuad((kunai.easeX += 0.1)) + 2

      //all this to ensure- the this.androidLose function is called only once per kunai ( will be only only if player is at a certain height, as long as android is visible, as long as kunai doesn't have a hit history)
      if (
        this.player.y < 100 &&
        this.android.visible &&
        kunai.x <= this.android.x &&
        !kunai.hit
      ) {
        this.androidLose()
        kunai.visible = false
        kunai.hit = true
      }
    }
  },
  addTeleportationPoint() {
    this.sound.play('get')
    this.telepointSprite = this.physics.add
      .sprite(100, 400, 'telepoint')
      .setScale(0.3)

    this.buildPhysics(this.telepointSprite)
    this.telepointSprite.anims.play('tele', true)

    this.physics.add.overlap(
      this.player,
      this.telepointSprite,
      this.teleportPlayer,
      null,
      this
    )
  },
  addTeleportationPoint2() {
    this.telepointEnd = this.physics.add
      .sprite(700, 0, 'telepoint')
      .setScale(0.3)

    this.buildPhysics(this.telepointEnd, this.platforms)
    this.telepointEnd.anims.play('tele', true)
    this.physics.add.overlap(
      this.red,
      this.telepointEnd,
      this.redTeleport,
      null,
      this
    )
    this.redWalk()
  },
  //transport player to top platform
  teleportPlayer: function () {
    //this is to ensure this the score is only increased once
    if (this.player.x != 1000) {
      this.score += 10
      this.scoreText.setText('Score: ' + this.score)
    }

    this.player.x = 1000
    this.player.y = 100
  },
  updateEnemyBall: function () {
    this.enemyBall.angle++

    if(!this.enemyBall.switchCosToSin){
      this.enemyBall.x += this.enemyBall.easeX
      this.enemyBall.y =
        -(
          Math.pow(1, this.enemyBall.easeX) *
          Math.abs(300 * Math.cos(this.enemyBall.easeX))
        ) + 500
      this.enemyBall.easeX += 0.02
    } else {
      this.enemyBall.x += this.enemyBall.easeX
      this.enemyBall.y =
        -(
          Math.pow(1, this.enemyBall.easeX) *
          Math.abs(300 * Math.sin(this.enemyBall.easeX))
        ) + 500
      this.enemyBall.easeX += 0.02

    }


    if (this.enemyBall.x > 1150) {
      //this.enemyBall.x = Math.floor(Math.random() * 50) - 100
      this.enemyBall.x = -100
      this.enemyBall.easeX = 0
      this.enemyBall.switchCosToSin = !this.enemyBall.switchCosToSin
    }
  },
  androidLose: function () {
    this.sound.play('thud');
    this.androidNumLives--
    this.score += 5
    this.scoreText.setText('Score: ' + this.score)
    if (this.androidNumLives < 0) {
      this.sound.play('explosion');
      this.android.visible = false
      this.android.disableBody(true, true)
      this.red.rescued = true
      this.addTeleportationPoint2()
    }
  },
  redWalk: function () {
    this.red.setVelocityX(50)
    this.red.anims.currentFrame.textureFrame = 0
    this.red.anims.play('rRun')
  },
  redTeleport() {
    //to ensure the score is only increased once
    if (this.red.visible) {
      this.score += 10
      this.scoreText.setText('Score: ' + this.score)
    }

    this.red.visible = false
    //once red teleports, player Ten can teleport
    this.physics.add.overlap(
      this.player,
      this.telepointEnd,
      this.tenTeleport,
      null,
      this
    )
  },
  tenTeleport: function() {

    if (this.player.visible) {
      this.score += 10
      this.scoreText.setText('Score: ' + this.score)
      this.victoryMusic.play();

      }

    this.player.visible = false
    this.levelWon = true
  },
  displayLoss: function(){
    //this.stars.disableBody(true, true);
    if(this.red.visible) this.sound.play('gameover');
    this.red.visible = false
    this.android.visible = false
    this.add.text(
      300,
      200,
      "Game Over! Try Again",
      {
        shadow: {
          offsetX: '10px',
          offsetY: '10px',
          color: '#000',
          blur: 3,
          stroke: true,
          fill: true,
        },
        fontSize: '50px',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#ff0000',
       stroke: '#000000',
       strokeThickness: 2
      }
    )
    this.displayResetButton();
  },
  displayWin: function(){


    this.add.text(
      100,
      200,
      "You win! Another child has been rescued! ",
      {
        shadow: {
          offsetX: '10px',
          offsetY: '10px',
          color: '#000',
          blur: 3,
          stroke: true,
          fill: true,
        },
        fontSize: '50px',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#ff00ff',
       stroke: '#000000',
       strokeThickness: 2
      }
    )
    this.displayResetButton();
  },
  displayResetButton: function(){

    this.resetButton = this.add.sprite(config.width / 2, 400, 'reset').setScale(.3)
    this.resetButton.setInteractive()
    this.resetButton.on('pointerup', () => {
      this.victoryMusic.stop();
      this.scene.start('MainMenu');
    })
  }
})

// Add scene to list of scenes
myGame.scenes.push(gamePlayState)
