//original code tweeked https://labs.phaser.io/edit.html?src=src/input/dragging/enable%20for%20drag%20test%202.js&v=3.22.0

var config = {
  type: Phaser.AUTO,
  width: 700,
  height: 640,
  _parent: 'phaser-example',
  backgroundColor: '#efefef',
  scene: {
      preload: preload,
      create: create
  }
};

var game = new Phaser.Game(config);

function preload ()
{
  this.load.image('cupcake', 'assets/sprites/cupcake.png');
}

function create ()
{
  var cupcake = this.add.sprite(100, 100, 'cupcake');

  cupcake.setInteractive();

  this.input.setDraggable(cupcake);

  this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

      gameObject.x = dragX;
      gameObject.y = dragY;

  });
}
