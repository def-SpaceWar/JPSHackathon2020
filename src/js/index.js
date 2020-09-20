var player, player2, winner;

function startScreen() {
  var playGameButton;
}

function game() {
  player1 = new Player(
    300,
    100,
    100,
    100,
    "#00ddff",
    undefined,
    {
      left: "a",
      right: "d",
      up: "w",
      down: "s",
    },
    {
      max_health: MAX_HEALTH,
      health_rect: { x: 100, y: 100, w: 300, h: 50 },
      color: "#00ddff",
      border_margin: 25,
      border_color: "#333",
    }
  );

  player2 = new Player(
    800,
    100,
    100,
    100,
    "#aa0000",
    undefined,
    {
      left: "ArrowLeft",
      right: "ArrowRight",
      up: "ArrowUp",
      down: "ArrowDown",
    },
    {
      max_health: MAX_HEALTH,
      health_rect: { x: 800, y: 100, w: 300, h: 50 },
      color: "#aa0000",
      border_margin: 25,
      border_color: "#333",
    }
  );

  document.addEventListener("keydown", (event) => {
    player1.listenKeyDown(event);
    player2.listenKeyDown(event);
  });

  document.addEventListener("keyup", (event) => {
    player1.listenKeyUp(event);
    player2.listenKeyUp(event);
  });

  const platforms = [
    //Base
    new Platform(150, 700, 900, 20, "#00FF00", undefined),
    new Platform(150, 720, 900, 30, "#A0522D", undefined),
    //2 top platforms
    new Platform(290, 450, 225, 20, "#00FF00", undefined),
    new Platform(290, 470, 225, 25, "#A0522D", undefined),

    new Platform(685, 450, 225, 20, "#00FF00", undefined),
    new Platform(685, 470, 225, 25, "#A0522D", undefined),
  ];

  function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Game Loop
  let interval = setInterval(() => {
    clear();

    player1.draw();
    player1.getPhysics(platforms);

    player2.draw();
    player2.getPhysics(platforms);

    if (player1.health.health == 0) {
      winner = "2";
      interval.clearInterval();
    } else if (player2.health.health == 0) {
      winner = "1";
      interval.clearInterval();
    }
    for (var i = 0; i < platforms.length; i++) {
      platforms[i].draw();
    }
  }, 20);
}

startScreen();
