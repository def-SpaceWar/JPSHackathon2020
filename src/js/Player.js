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
        this.x_speed = -20;
        break;
      case this.controls.right:
        this.moving = true;
        this.x_speed = 20;
        break;
      case this.controls.up:
        this.jump();
        break;
      case this.controls.down:
        this.gravity = GRAVITY * 3;
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
        break;
      case this.controls.down:
        this.gravity = GRAVITY;
        break;
    }
  }

  jump() {
    if (this.isGrounded) {
      this.y_speed = -JUMP_SPEED;
    }
  }
}
