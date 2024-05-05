import { Application, Graphics } from './pixi.mjs';
import { assetsMap } from './assetsMap.js';

// Create the application
const app = new Application({
  width: 800,
  height: 800,
  backgroundColor: 0xc2c2c2,
  view: document.getElementById('canvas'),
});

const runGame = () => {
  const marker = new Graphics();
  marker.beginFill(0xff0000, 1);
  marker.drawCircle(0, 0, 5);
  marker.endFill();

  app.stage.addChild(marker);

  // window['RECTANGLE'] = marker;

  app.stage.position.set(800 / 2, 800 / 2);
};

assetsMap.sprites.forEach((value) => app.loader.add(value));
app.loader.load(runGame);
