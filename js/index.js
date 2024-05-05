import { Application, Graphics, Rectangle } from './pixi.mjs';
import { assetsMap } from './assetsMap.js';
import { Tank } from './Tank.js';
import { TweenManager, Tween } from './Tween.js';

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

  const tweenManager = new TweenManager(app.ticker);

  const moveTank = ({ data }) => {
    const distanceToCenter = data.getLocalPosition(app.stage);
    const distanceToTank = data.getLocalPosition(tank.view);
    const angle = Math.atan2(distanceToTank.y, distanceToTank.x);
    console.log(angle);
  };

  app.stage.on('pointerdown', moveTank, undefined);
  app.stage.interactive = true;
  app.stage.interactiveChildren = false;
  app.stage.hitArea = new Rectangle(-400, -400, 800, 800);
};

assetsMap.sprites.forEach((value) => app.loader.add(value));
app.loader.load(runGame);
