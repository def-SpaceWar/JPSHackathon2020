class Component {
  constructor(x, y, w, h, color, image) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.image = image;

    this.x_speed = 0;
    this.y_speed = 0;
    this.gravity = 0.1;
    this.bounce = -0.6;
  }

  draw() {
    if (!this.image) {
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, this.w, this.h);
    } else {
      context.drawImage(this.image, this.x, this.y, this.w, this.h);
    }
  }

  getPhysics() {
    this.x += this.x_speed;
    this.y += this.y_speed;
    this.y_speed += this.gravity;
  }
}
