import {
    AnimatedSprite, Container, Texture,
} from 'pixi.js';

export default class Enemy extends Container {
    private enemy: AnimatedSprite;
    private textureArrayDeath: Texture[];

    constructor() {
        super();

        this.init();
    }

    private init() {
        const textureArray = [];
        for (let i = 0; i < 20; i++) {
            const val = i < 10 ? `0${i}` : i;
            const texture = PIXI.Texture.from(`sniper_move_${val}.png`);
            textureArray.push(texture);
        }

        this.textureArrayDeath = [];
        for (let i = 0; i < 20; i++) {
            const val = i < 10 ? `0${i}` : i;
            const texture = PIXI.Texture.from(`death_${val}.png`);
            this.textureArrayDeath.push(texture);
        }

        this.enemy = new AnimatedSprite(textureArray);
        this.enemy.play();
        this.enemy.animationSpeed = 0.5;
        this.enemy.interactive = true;
        this.addChild(this.enemy);
    }

    public setPos(x: number, y: number): void {
        this.enemy.x = x;
        this.enemy.y = y;
    }

    public click(callback): void {
        this.enemy.on('pointerup', () => {
            this.death(callback);
        });
    }

    private death(fn) {
        this.enemy.textures = this.textureArrayDeath;
        this.enemy.interactive = false;
        this.enemy.play();
        this.enemy.loop = false;
        this.enemy.onComplete = () => {
            fn();
            this.destroy();
        };
    }
}
