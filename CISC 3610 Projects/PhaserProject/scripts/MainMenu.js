var mainMenuState = new Phaser.Class({
  // Define scene
  Extends: Phaser.Scene,
  initialize: function MainMenu() {
    Phaser.Scene.call(this, { key: 'MainMenu' })
  },

  preload: function () {
    // Preload images for this state
  },

  create: function () {
    console.log('MainMenu')

    this.add.image(config.width / 2, config.height / 2, 'bg').setScale(1.1)

    var intro = this.add.text(
      15,
      10,
      'There have been a string of abductions of youth with metagenes. The mysterious special forces entity known as the Rescue Ops has sent Ten on a stealth mission to rescue Little Red and Little Blue. Help Ten defeat the Android guarding them and guide them to safety. ',
      {
        fontFamily: 'Consolas, Inconsolata, futura, Georgia, "Goudy Bookletter 1911", Times, serif',
        color: '#ff00ff',
        fontSize: '30px',
        align: 'justify',
        fontWeight: '900',
        stroke: 0x000000,
        strokeThickness: 2,
        wordWrap: {
          width: 1075,
          callback: null,
          callbackScope: null,
          useAdvancedWrap: false,
        },
        shadow: {
            offsetX: '5px',
            offsetY: '2px',
            color: '#000',
            blur: 4,
            stroke: true,
            fill: true,
          },
      }
    )

    //THIS IS FOR COLLECT STARS SECTION
    this.addCollectStarSection()

    //THIS IS FOR CONTROLS SECTION
    this.addControlsSection()

    //THIS FOR WARNINGS SECTION
    this.addWarningSection()

    //ADD KEYBOARD CONTROL DIRECTIONS
    this.add.text(
      300,
      183,
      "Press \t 'H' : help \t 'P': pause \t 'N': new game",
      {
        shadow: {
          offsetX: '2px',
          offsetY: '2px',
          color: '#000',
          blur: 1,
          stroke: true,
          fill: true,
        },
        fontSize: '25px',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '0x000',
      }
    )

    //Add Continue button
    this.continue = this.add
      .sprite(config.width / 2, 300, 'continue')
      .setScale(0.5)
    this.continue.setInteractive()
    this.continue.on('pointerup', () => {
      game.scene.start('GamePlay')
    })
  },

  update: function () {
    // Update objects & variables
    this.enemyBall.angle += 0.5
  },
  addCollectStarSection: function () {
    var rect = new Phaser.Geom.Rectangle(0, 30, 210, 600)

    var graphics = this.add.graphics({ x: 15, y: 150 })

    graphics.fillStyle(0xff00ff, 0.8) // color: 0xRRGGBB
    graphics.fillRectShape(rect)

    this.add.text(25, 183, 'Collect Stars:', {
      shadow: {
        offsetX: '2px',
        offsetY: '2px',
        color: '#000',
        blur: 1,
        stroke: true,
        fill: true,
      },
      fontSize: '32px',
      fontFamily: 'Futura',
      fontWeight: 'bold',
    })
    this.add.image(60, 250, 'star').setScale(0.05)

    this.add.image(180, 250, 'star').setScale(0.05)

    this.add.image(120, 300, 'star').setScale(0.05)

    this.add.text(35, 325, 'To Activate \nTeleportation \nPortal:', {
      shadow: {
        offsetX: '2px',
        offsetY: '2px',
        color: '#000',
        blur: 1,
        stroke: true,
        fill: true,
      },
      fontSize: '28px',
      fontFamily: 'Futura',
      fontWeight: 'bold',
      align: 'center',
    })

    this.telepoint = this.add.sprite(120, 490, 'telepoint').setScale(0.28)

    this.anims.create({
      key: 'teleMain',
      frames: this.anims.generateFrameNumbers('telepoint', {
        start: 0,
        end: 49,
      }),
      frameRate: 10,
      repeat: -1,
    })

    this.telepoint.anims.play('teleMain', true)
  },
  addControlsSection: function () {
    var rect2 = new Phaser.Geom.Rectangle(0, 30, 220, 600)

    var graphics2 = this.add.graphics({ x: 865, y: 150 })

    graphics2.fillStyle(0xff00ff, 0.8) // color: 0xRRGGBB
    graphics2.fillRectShape(rect2)

    this.add.text(910, 183, 'Controls:', {
      shadow: {
        offsetX: '2px',
        offsetY: '2px',
        color: '#000',
        blur: 1,
        stroke: true,
        fill: true,
      },
      fontSize: '32px',
      fontFamily: 'Futura',
      fontWeight: 'bold',
    })

    this.add.image(970, 250, 'spacebar').setScale(0.7)
    this.add.text(885, 275, 'To Launch Kunai:', {
      shadow: {
        offsetX: '2px',
        offsetY: '2px',
        color: '#000',
        blur: 1,
        stroke: true,
        fill: true,
      },
      fontSize: '23px',
      fontFamily: 'Futura',
      fontWeight: 'bold',
    })
    this.add.image(950, 320, 'redKunai').setScale(0.4)

    //add left and right
    this.add.image(975, 375, 'rightleft')

    this.add.text(885, 410, 'To walk left/ right', {
      shadow: {
        offsetX: '2px',
        offsetY: '2px',
        color: '#000',
        blur: 1,
        stroke: true,
        fill: true,
      },
      fontSize: '23px',
      fontFamily: 'Futura',
      fontWeight: 'bold',
    })

    //add up
    this.add.image(975, 475, 'up')

    this.add.text(925, 510, 'To jump', {
      shadow: {
        offsetX: '2px',
        offsetY: '2px',
        color: '#000',
        blur: 1,
        stroke: true,
        fill: true,
      },
      fontSize: '23px',
      fontFamily: 'Futura',
      fontWeight: 'bold',
    })
  },
  addWarningSection: function () {
    var rect3 = new Phaser.Geom.Rectangle(0, 30, 500, 300)

    var graphics3 = this.add.graphics({ x: 300, y: 400 })

    graphics3.fillStyle(0xff0000, 0.5) // color: 0xRRGGBB
    graphics3.fillRectShape(rect3)

    this.add.text(390, 460, 'Avoid:', {
      shadow: {
        offsetX: '2px',
        offsetY: '2px',
        color: '#000',
        blur: 1,
        stroke: true,
        fill: true,
      },
      fontSize: '32px',
      fontFamily: 'Futura',
      fontWeight: 'bold',
    })

    this.add.image(350, 475, 'warning').setScale(0.03)
    this.enemyBall = this.add.image(570, 500, 'ballEnemy').setScale(0.1)
    this.add.image(700, 490, 'androidIdle').setScale(0.2)
  },
})

// Add scene to list of scenes
myGame.scenes.push(mainMenuState)
