class Health {
  constructor(max_health, health_rect, color, border_margin) {
    this.health = max_health;
    this.max_health = max_health;

    // health_rect = {x: 0, y: 0, w: 0, h: 0}
    this.health_rect = health_rect;
    this.color = color;
    this.border_margin = border_margin;
  }

  draw() {
    //
  }
}