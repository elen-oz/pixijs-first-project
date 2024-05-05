import { Container, AnimatedSprite, Texture } from './pixi.mjs';

export class Tank {
  constructor() {
    this._view = new Container();

    this._tracksLeft = new AnimatedSprite([
      Texture.from('TrackCFrame1'),
      Texture.from('TrackCFrame2'),
    ]);
    this._tracksLeft.animationSpeed = 0.25;
    this._tracksLeft.position.set(0, -80);
    this._tracksLeft.anchor.set(0.5); // центр координат посередине

    this._view.addChild(this._tracksLeft);

    this._tracksRight = new AnimatedSprite([
      Texture.from('TrackCFrame1'),
      Texture.from('TrackCFrame2'),
    ]);
    this._tracksRight.animationSpeed = 0.25;
    this._tracksRight.position.set(0, 80);
    this._tracksRight.anchor.set(0.5); // центр координат посередине

    this._view.addChild(this._tracksRight);
  }

  get view() {
    return this._view;
  }
}
