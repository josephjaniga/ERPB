
import * as Phaser from 'phaser';

// Phaser EntryPoint
import Game from './phaser/Game.class.js';

// React EntryPoint
import { uiRender } from './react/reactInit.js';

window.onload = ()=>{
    const game = new Game();
    uiRender();
};