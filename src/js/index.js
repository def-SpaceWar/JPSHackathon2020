window.onload = () => {
  var component = new Component(100, 100, 100, 100, "#FF0000", undefined);

  function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Game Loop
  setInterval(() => {
    clear();

    component.draw();
    component.getPhysics();
  }, 20);
};
