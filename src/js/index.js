window.onload(() => {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  var component = new Component(100, 100, 100, 100, "#FF0000", undefined);

  function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Game Loop
  setInterval(() => {
    clear();

    component.draw(context);
  }, 20);
});
