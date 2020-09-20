class Platform {
  constructor(x, y, w, h, color, image) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.image = image;
  }

  draw() {
    if (this.image !== undefined) {
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, this.w, this.h);
    } else {
      context.save();
      context.scale(1, -1);
      context.drawImage(this.image, this.x, this.y, this.w, this.h);
      context.restore();
    }
  }
}