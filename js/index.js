import { Application, Graphics, Rectangle } from './pixi.mjs';
import { assetsMap } from './assetsMap.js';
import { Tank } from './Tank.js';

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

  const tank = new Tank();
  app.stage.addChild(tank.view);
  app.stage.addChild(marker);

  app.stage.position.set(800 / 2, 800 / 2);

  window['TANK'] = tank;

  const pointerdown = ({ data }) => {
    console.log(data);

    const positions = data.getLocalPosition(app.stage);
    app.stage.addChild(
      new Graphics()
        .beginFill(0x8ff559, 1)
        .drawCircle(positions.x, positions.y, 8)
    );
  };
  app.stage.on('pointerdown', pointerdown, undefined);
  app.stage.interactive = true;
  app.stage.interactiveChildren = false;
  app.stage.hitArea = new Rectangle(-400, -400, 800, 800);
};

assetsMap.sprites.forEach((value) => app.loader.add(value));
app.loader.load(runGame);
