class Player extends Component {
  constructor(x, y, w, h, color, image, controls) {
    super(x, y, w, h, color, image);
    this.controls = controls;
  }

  listen(event) {
    switch (event.key) {
      case this.controls.left:
        break;
      case this.controls.right:
        break;
      case this.controls.up:
        break;
      case this.controls.down:
        break;
    }
  }
}
