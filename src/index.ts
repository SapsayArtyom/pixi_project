/* eslint-disable import/no-extraneous-dependencies */
import 'pixi-spine';
import 'pixi.js';
import * as PIXI from 'pixi.js';
import Game from './Game';

// import Player from '../Elements/Player';

// import MainGame from '../../../Core/CoreGame/Data/MainGame';
import MyLoader from './MyLoader';
// import Animation from '../Elements/Animation';

declare function require(name: string);
require('babel-core/register');
require('babel-polyfill');

window.PIXI = PIXI;

class Main {
    // protected player: Player;
    // protected character: Animation;
    protected game: Game;

    constructor() {
        this.initGame();
    }

    // initGame(): void {
    //     const { loader } = MyLoader;

    //     loader.add('error_popup', '../shared_assets/general_assets/Slot_Nugget_error_popup.png')
    //         .add('home_icon', '../shared_assets/general_assets/Flipit_Emma_home_icon.png')
    //         .add('back_btn', '../shared_assets/general_assets/back_btn.png')
    //         .add('back_btn_white', '../shared_assets/general_assets/back_btn_white.png');

    //     loader.load(() => {
    //         this.player = new Player();

    //         this.game = MainGame.instance({
    //             player: this.player,
    //             preloaderPath: '../shared_assets/general_assets/loadingCircle.png',
    //         });
    //         this.game.init();
    //     });
    // }

    protected initGame() {
        console.log('init!!!');

        const { loader } = MyLoader;
        loader.add('bg', './bg.jpg');

        loader.load(() => {
            this.game = Game.instance();
            // this.game = new Game();
        });
    }
}

const main = new Main();
