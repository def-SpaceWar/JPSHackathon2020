// This stuff loads up first

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// constants
const DRAG = 0.95;
const GRAVITY = 0.35;
const JUMP_POWER = 5;
const JUMP_SPEED_MARGIN = 10;
