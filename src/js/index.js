var player, player2;

window.onload = () => {
  player = new Player(300, 100, 100, 100, "#00ddff", undefined, {
    left: "a",
    right: "d",
    up: "w",
    down: "s",
  });

  player2 = new Player(800, 100, 100, 100, "#aa0000", undefined, {
    left: "ArrowLeft",
    right: "ArrowRight",
    up: "ArrowUp",
    down: "ArrowDown",
  });

  document.addEventListener("keydown", (event) => {
    player.listenKeyDown(event);
    player2.listenKeyDown(event);
  });

  document.addEventListener("keyup", (event) => {
    player.listenKeyUp(event);
    player2.listenKeyUp(event);
  });

  const platforms = [
    //Base
    new Platform(150, 700, 900, 30, undefined, longPlatform),
    //2 top platforms
    new Platform(300, 450, 225, 30, "#00FF00", undefined),
    new Platform(675, 450, 225, 30, "#00FF00", undefined),
    
  ];

  function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Game Loop
  setInterval(() => {
    clear();

    player.draw();
    player.getPhysics(platforms);

    player2.draw();
    player2.getPhysics(platforms);

    for (var i = 0; i < platforms.length; i++) {
      platforms[i].draw();
    }
  }, 20);
};
