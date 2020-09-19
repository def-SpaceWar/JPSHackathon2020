class Player extends Component {
  constructor(x, y, w, h, color, image, controls) {
    super(x, y, w, h, color, image);
    this.controls = controls;
  }

  listen(event) {
    switch (event.key) {
      case this.controls.left:
        this.x_speed += -5;
        break;
      case this.controls.right:
        this.x_speed += 10;
        break;
      case this.controls.up:
        break;
      case this.controls.down:
        break;
    }
  }
}
