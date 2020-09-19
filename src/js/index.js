var player;

window.onload = () => {
  player = new Player(100, 100, 100, 100, "#00ddff", undefined, {
    left: "a",
    right: "d",
    up: "w",
    down: "s",
  });

  player2 = new Player(canvas.width - 100, 100, 100, 100, "#ff0000", undefined, {
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
    new Platform(150, 700, 800, 10, "#00FF00", undefined),
    new Platform(475, 450, 225, 10, "#00FF00", undefined),
    new Platform(275, 300, 225, 10, "#00FF00", undefined),
    new Platform(475, 300, 225, 10, "#00FF00", undefined),
    new Platform(0, canvas.height, canvas.width, 0, "#00FF00", undefined),
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
var player;

window.onload = () => {
  player = new Player(200, 100, 100, 100, "#00ddff", undefined, {
    left: "a",
    right: "d",
    up: "w",
    down: "s",
  });

  player2 = new Player(canvas.width - 300, 100, 100, 100, "#ff0000", undefined, {
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
    new Platform(150, 700, 900, 10, "#00FF00", undefined),
    
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
