var player;

window.onload = () => {
  player = new Player(100, 100, 100, 100, "#FF0000", undefined, {
    left: "a",
    right: "d",
    up: "w",
    down: "s",
  });

  document.addEventListener("keydown", (event) => {
    player.listenKeyDown(event);
  });

  document.addEventListener("keyup", (event) => {
    player.listenKeyUp(event);
  });

  const platforms = [
    new Platform(100, 450, 225, 10, "#00FF00", undefined),
    new Platform(475, 450, 225, 10, "#00FF00", undefined),
    new Platform(100, 450, 225, 10, "#00FF00", undefined),
    new Platform(475, 450, 225, 10, "#00FF00", undefined),
  ];

  function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Game Loop
  setInterval(() => {
    clear();

    player.draw();
    player.getPhysics(platforms);

    for (var i = 0; i < platforms.length; i++) {
      platforms[i].draw();
    }
  }, 20);
};
