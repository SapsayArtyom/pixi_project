import { Container, Graphics, Text } from 'pixi.js';

export default class Counter extends Container {
    private count: Text;
    private bg: Graphics;

    constructor() {
        super();

        this.init();
    }

    private init() {
        this.bg = new Graphics();
        this.bg.beginFill(0x00ff00, 1);
        this.bg.drawRect(0, 0, 200, 40);
        this.addChild(this.bg);

        this.count = new Text('0', {
            fontSize: 32,
        });
        this.count.x = (this.bg.width - this.count.width) / 2;
        this.addChild(this.count);
    }

    public updateCount(value: number): void {
        this.count.text = `${value}`;
        this.count.x = (this.bg.width - this.count.width) / 2;
    }
}
