import { Container, Sprite } from 'pixi.js';
import Counter from './Counter';
import Game from './Game';
import MyLoader from './MyLoader';

export default class Scene extends Container {
    private bg: Sprite;
    private counter: Counter;
    private game: Game;

    constructor() {
        super();

        // this.game = Game.instance();

        this.init();
    }

    private init() {
        this.bg = new Sprite(MyLoader.getResource('bg').texture);
        this.addChild(this.bg);

        this.counter = new Counter();
        // this.counter.x = (this.bg.width - this.counter.width) / 2;
        this.addChild(this.counter);
    }
}
