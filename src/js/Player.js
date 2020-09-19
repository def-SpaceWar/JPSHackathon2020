class Player extends Component {
  constructor(x, y, w, h, color, image, controls) {
    super(x, y, w, h, color, image);
    this.controls = controls;
    this.moving = false;
  }

  getPhysics(platforms) {
    if (this.moving) {
      this.drag = 1;
    } else {
      this.drag = DRAG;
    }
    super.getPhysics(platforms);
  }

  listenKeyDown(event) {
    switch (event.key) {
      case this.controls.left:
        this.moving = true;
        this.x_speed = -5;
        break;
      case this.controls.right:
        this.moving = true;
        this.x_speed = 5;
        break;
      case this.controls.up:
        break;
      case this.controls.down:
        break;
    }
  }

  listenKeyUp(event) {
    switch (event.key) {
      case this.controls.left:
        this.moving = false;
        break;
      case this.controls.right:
        this.moving = false;
        this.x_speed = 5;
        break;
      case this.controls.up:
        jump();
        break;
      case this.controls.down:
        break;
    }
  }
}
