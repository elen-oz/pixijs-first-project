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

export const createSprite = (
  textureName,
  position = { x: 0, y: 0 },
  anchor = { x: 0.5, y: 0.5 }
) => {
  const sprite = new Sprite(Texture.from(textureName));
  sprite.position.copyFrom(position);
  sprite.anchor.copyFrom(anchor);
  return sprite;
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

    this._view.addChild(createSprite('HeavyGunB', { x: 140, y: -27 }));
    this._view.addChild(createSprite('HeavyGunB', { x: 160, y: 29 }));
  }

  get view() {
    return this._view;
  }
}
