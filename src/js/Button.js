class Button {
  constructor(
    x,
    y,
    w,
    h,
    colors,
    border_margin,
    border_color,
    text,
    text_color,
    font,
    on_click
  ) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.colors = colors;
    this.border_margin = border_margin;
    this.border_color = border_color;
    this.text = text;
    this.text_color = text_color;
    this.font = font;
    this.on_click = on_click;
  }

  draw() {
    context.fillStyle = this.border_color;
    context.fillRect(
      this.x - this.border_margin,
      this.y - this.border_margin,
      this.w + this.border_margin * 2,
      this.h + this.border_margin * 2
    );
    context.fillStyle = this.colors.inactive;
    context.fillRect(this.x, this.y, this.w, this.h);
    context.fillStyle = this.text_color;
    context.font = this.font;
    context.fillText(
      this.text,
      this.x + this.border_margin / 2,
      this.y + this.h / 1.5,
      this.w,
      this.h
    );
  }
}
