import { Container, AnimatedSprite, Texture, Sprite } from './pixi.mjs';

export const createAnimatedSprite = (
  textureNames,
  position = { x: 0, y: 0 },
  anchor = { x: 0.5, y: 0.5 }
) => {
  const textures = textureNames.map((name) => Texture.from(name));

  const animatedSprite = new AnimatedSprite(textures);
  animatedSprite.position.copyFrom(position);
  animatedSprite.anchor.copyFrom(anchor);
  return animatedSprite;
};

export class Tank {
  constructor() {
    this._view = new Container();

    this._tracksLeft = createAnimatedSprite(['TrackCFrame1', 'TrackCFrame2'], {
      x: 0,
      y: -80,
    });
    this._tracksRight = createAnimatedSprite(['TrackCFrame1', 'TrackCFrame2'], {
      x: 0,
      y: 80,
    });
    this._tracksLeft.animatedSpeedm = 0.25;
    this._tracksRight.animatedSpeedm = 0.25;

    this._view.addChild(this._tracksLeft, this._tracksRight);

    this._hull = new Sprite(Texture.from('HeavyHullB'));
    this._hull.anchor.set(0.5);

    this._view.addChild(this._hull);

    const gunLeft = new Sprite(Texture.from('HeavyGunB'));
    gunLeft.position.set(140, -27);
    gunLeft.anchor.set(0.5);

    this._view.addChild(gunLeft);

    const gunRight = new Sprite(Texture.from('HeavyGunB'));
    gunRight.position.set(160, 29);
    gunRight.anchor.set(0.5);

    this._view.addChild(gunRight);
  }

  get view() {
    return this._view;
  }
}
