import { Application, Container } from 'pixi.js';
import Scene from './Scene';

export default class Game extends Container {
    public app: Application;
    public widthApp: number;
    public heightApp: number;

    protected mainContainer: Container;
    protected scene: Scene;
    private static _instance: Game;

    constructor() {
        super();
    }

    public static instance(): Game {
        if (!Game._instance) {
            Game._instance = new Game();
        }
        return Game._instance;
    }

    public init(): void {
        this.widthApp = window.innerWidth;
        this.heightApp = window.innerHeight;
        this.app = new Application({
            width: this.widthApp,
            height: this.heightApp,
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
