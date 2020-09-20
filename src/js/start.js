// This stuff loads up first

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
/** @type {CanvasRenderingContext2D} */
const context = canvas.getContext("2d");

// constants
const DRAG = 0.95;
const GRAVITY = 0.35;
const JUMP_POWER = 5;
const JUMP_SPEED_MARGIN = 10;

// images
/** @type {HTMLImageElement} */
const shortPlatform = new Image();
shortPlatform.src = "./../images/platforms/ShortPlatform.png";
/** @type {HTMLImageElement} */
const longPlatform = document.getElementById('LongPlatform');
