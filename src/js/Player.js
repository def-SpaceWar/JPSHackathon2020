class Player extends Component {
  constructor(x, y, w, h, color, image, controls, health_params) {
    super(x, y, w, h, color, image);
    this.controls = controls;
    this.moving = false;
    this.health = new Health(
      health_params.max_health,
      health_params.health_rect,
      health_params.color,
      health_params.border_margin,
      health_params.border_color
    );
    this.attack_range = ATTACK_RANGE;
    this.other_player = undefined;
  }

  draw() {
    super.draw();
    this.health.draw();
  }

  getPhysics(platforms) {
    if (this.moving) {
      this.drag = 1;
    } else {
      this.drag = DRAG;
    }
    super.getPhysics(platforms);

    if (this.x + this.w < 0) {
      this.health.health = 0;
    } else if (this.y + this.h < 0) {
      this.health.health = 0;
    } else if (this.x - this.w > canvas.width) {
      this.health.health = 0;
    } else if (this.y - this.h > canvas.height) {
      this.health.health = 0;
    }
  }

  listenKeyDown(event) {
    if (!(this.health.health <= 0)) {
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
          this.jump();
          break;
        case this.controls.down:
          this.gravity = GRAVITY * 3;
          break;
      }
    }
  }

  listenKeyUp(event) {
    if (!(this.health.health <= 0)) {
      switch (event.key) {
        case this.controls.left:
          this.moving = false;
          break;
        case this.controls.right:
          this.moving = false;
          this.x_speed = 5;
          break;
        case this.controls.up:
          this.jump();
          break;
        case this.controls.down:
          this.gravity = GRAVITY;
          break;
      }
    }
  }

  jump() {
    if (Math.abs(this.y_speed) < JUMP_SPEED_MARGIN) {
      this.y_speed = -JUMP_POWER;
    }
  }
}
