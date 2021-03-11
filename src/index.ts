import { Application, Sprite } from "pixi.js";

const app = new Application({
    backgroundColor: 0xff0000,
    width: 1000,
    height: 700,
});

document.body.appendChild(app.view);
