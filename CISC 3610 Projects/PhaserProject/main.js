//All to be updated

//Jamila Toaha - 05/01/2020- This code uses the Phaser library to create a drag and drop menu for a picnic setting. This lab modifies, builds and expands on this original code - drag and drop test  https://labs.phaser.io/edit.html?src=src/input/dragging/enable%20for%20drag%20test%202.js&v=3.22.0

// var config = {
//   type: Phaser.AUTO,
//   width: 1000,gi
//   height: 550,
//   _parent: 'phaser-example',
//   backgroundColor: '#efefef',
//   scene: {
//       preload: preload,
//       create: create
//   }
// };

// var game = new Phaser.Game(config);

// function preload ()
// {
//   this.load.image('background', 'assets/sprites/dragdropbg.png');
//   this.load.image('cupcake', 'assets/sprites/cupcake.png');
//   this.load.image('pizza', 'assets/sprites/pizza.png');
//   this.load.image('icedtea', 'assets/sprites/icedtea.png');
//   this.load.image('pudding', 'assets/sprites/pudding.png');
//   this.load.image('sandwich', 'assets/sprites/sandwich.png');
//   this.load.image('doughnut', 'assets/sprites/doughnut.png');

// }

// function create ()
// {

//   this.add.image(500, 275, 'background');

//   let createFoodItem = (x, y, itemName, scale) => {
//     var cupcake = this.add.sprite(x, y, itemName);

//     cupcake.setInteractive();
//     cupcake.scale = scale;
//     this.input.setDraggable(cupcake);
//     //console.log(cupcake.texture.key)
//   }

//   createFoodItem(75, 75, 'cupcake', .25);
//   createFoodItem(200, 75, 'pizza', .15);
//   createFoodItem(300, 75, 'icedtea', .20);
//   createFoodItem(390, 75, 'pudding', .15);
//   createFoodItem(500, 75, 'sandwich', .04);
//   createFoodItem(600, 75, 'doughnut', .15);

//   this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

//       gameObject.x = dragX;
//       gameObject.y = dragY;
//       if(gameObject.texture.key == 'cupcake')
//         createFoodItem(75, 75, 'cupcake', gameObject.scale);

//       if(gameObject.texture.key == 'pizza')
//         createFoodItem(200, 75, 'pizza', gameObject.scale);

//       if(gameObject.texture.key == 'icedtea')
//         createFoodItem(300, 75, 'icedtea', gameObject.scale);

//       if(gameObject.texture.key == 'pudding')
//       createFoodItem(390, 75, 'pudding', .15);

//       if(gameObject.texture.key == 'sandwich')
//       createFoodItem(500, 75, 'sandwich', .04);

//       if(gameObject.texture.key == 'doughnut')
//       createFoodItem(600, 75, 'doughnut', .15);
//       });


// }


