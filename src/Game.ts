import { Application, Container } from 'pixi.js';
import Scene from './Scene';

export default class Game extends Container {
    public app: Application;
    protected mainContainer: Container;
    protected scene: Scene;
    private static _instance: Game;

    constructor() {
        super();

        this.init();
    }

    public static instance(): Game {
        console.log('instance', this._instance);

        if (!Game._instance) {
            Game._instance = new Game();
        }
        return Game._instance;
    }

    protected init(): void {
        this.app = new Application({
            width: window.innerWidth,
            height: window.innerHeight,
            // width: document.documentElement.clientWidth * window.devicePixelRatio,
            // height: document.documentElement.clientHeight * window.devicePixelRatio,
            antialias: true,
        });
        document.body.appendChild(this.app.view);
        this.mainContainer = new PIXI.Container();
        this.mainContainer.name = 'mainContainer';
        this.app.stage.addChild(this.mainContainer);

        this.scene = new Scene();
        this.mainContainer.addChild(this.scene);
    }
}
