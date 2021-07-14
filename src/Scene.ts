import { Container, Sprite } from 'pixi.js';
import Counter from './Counter';
import Enemy from './Enemy';
import Game from './Game';
import MyLoader from './MyLoader';

export default class Scene extends Container {
    private bg: Sprite;
    private counter: Counter;
    private game: Game;
    private count: number;
    private arrPos: [];

    constructor() {
        super();

        this.game = Game.instance();
        this.count = 0;
        this.init();
    }

    private async init() {
        this.bg = new Sprite(MyLoader.getResource('bg').texture);
        this.addChild(this.bg);

        this.counter = new Counter();
        this.counter.x = (this.game.widthApp - this.counter.width) / 2;
        this.addChild(this.counter);

        // const enemy = new Enemy();
        // enemy.click(this.updateCount.bind(this));
        // this.addChild(enemy);

        await fetch('config.json')
            .then((response) => response.json())
            .then((result) => {
                this.arrPos = result.position;
            });

        console.log('blob', this.arrPos);

        for (let i = 0; i < this.arrPos.length; i++) {
            const element: any = this.arrPos[i];
            const enemy = new Enemy();
            enemy.setPos(element.x, element.y);
            enemy.click(this.updateCount.bind(this));
            this.addChild(enemy);
        }
    }

    private updateCount() {
        this.count++;
        this.counter.updateCount(this.count);
    }
}
