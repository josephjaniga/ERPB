
import { toggleUiComponent } from './../react/actions.js';
import { store } from './../react/store.js';

import FireHazardScreen from './states/FireHazardScreen.state.js';

Math.randomRange = (min, max)=>{
    return Math.floor(Math.random() * (max - min)) + min;
};

export default class Game {

    constructor(){
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        window.game = this.game = new Phaser.Game(
            this.width,
            this.height,
            Phaser.AUTO,
            'canvas',
            {
                create: this.create,
                preload: this.preload,
                render: this.render
            }
        );

        window.game.sprites = [];
        window.Find = function(key, value, first=true){
            var out = first ? null : [];
            window.game.sprites.forEach((obj)=>{
                if ( obj[key] === value ){
                    if ( first ){
                        out = obj;
                    } else {
                        out.push(obj);
                    }
                }
            });
            return out;
        };

        window.game.cx = window.innerWidth/2;
        window.game.cy = window.innerHeight/2;

        // mask debugger
        window.game.debugMasks = false;

    }

    preload (){}
    render(){}

    create (){

        this.game.stage.disableVisibilityChange = true;

        this.game.state.add(
            "FireHazardScreen",
            FireHazardScreen,
            true
        );

    }

}