window.onload = () => {
  var component = new Component(100, 100, 100, 100, "#FF0000", undefined);
  var platforms = [new Platform(100, 450, 225, 10, "#00FF00", undefined),new Platform(475, 450, 225, 10, "#00FF00", undefined), new Platform(100, 450, 225, 10, "#00FF00", undefined),new Platform(475, 450, 225, 10, "#00FF00", undefined)];

  function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Game Loop
  setInterval(() => {
    clear();

    component.draw();
    component.getPhysics(platforms);

    for (var i = 0; i < platforms.length; i++) {
      platforms[i].draw()
    }
  }, 20);
};
