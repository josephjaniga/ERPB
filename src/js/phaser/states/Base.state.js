
import * as CONSTANT from './../class/Constants.js';

export default class Base extends Phaser.State {
    constructor(){
        super();

        this.game = window.game;
        this.game.emitters = {};

        // the center position
        this.cx = window.innerWidth/2;
        this.cy = window.innerHeight/2;

    }

    preload(){

        // logo screen
        this.game.load.spritesheet('fire', './img/Logos/fire_sheet.jpg', 576, 384, 6);
        this.game.load.image('logo', './img/Logos/FireHazard_Logo.png');

        this.game.load.script('ascii', './filters/AsciiFilter.js');
        this.game.load.script('glow', './filters/GlowFilter.js');
        this.game.load.script('gray', './filters/GrayFilter.js');

        //particles
        this.game.load.image('fleck', './img/bad/particles/fleck.png');
        this.game.load.image('spark', './img/bad/particles/spark.png');
        this.game.load.image('splash', './img/bad/particles/splash.png');
        this.game.load.image('smoke', './img/bad/particles/smoke.png');

        // sounds
        this.game.load.audio('talking-1', './sfx/speaking_test.wav');
        this.game.load.audio('talking-2', './sfx/speaking_test2.wav');
        this.game.load.audio('talking-3', './sfx/speaking_test3.wav');
        this.game.load.audio('blip-1', './sfx/blip1.wav');
        this.game.load.audio('random-1', './sfx/random1.wav');
        this.game.load.audio('bleep-1', './sfx/bleep1.wav');
        this.game.load.audio('human-1', './sfx/human-test-1.wav');
        this.game.load.audio('human-2', './sfx/human-test-2.wav');
        this.game.load.audio('fireloop', './sfx/fireloop2.wav');

    }

    create(){}
    update(){}
    render(){}

    emitterSetup(){
        // // BEHIND ITEM EMITTER
        // this.fleckEmitter = this.game.myGroups[CONSTANT.BARSTACK_GROUP].add(new FleckEmitter({}));
        // this.game.emitters.fleckEmitter = this.fleckEmitter;
        //
        // // ABOVE ITEM EMITTERS
        // this.sparkEmitter = this.game.myGroups[CONSTANT.EMITTER_GROUP].add(new SparkEmitter({}));
        // this.game.emitters.sparkEmitter = this.sparkEmitter;
        //
        // this.smokeEmitter = this.game.myGroups[CONSTANT.EMITTER_GROUP].add(new SmokeEmitter({}));
        // this.game.emitters.smokeEmitter = this.smokeEmitter;
        //
        // this.splashEmitter = this.game.myGroups[CONSTANT.EMITTER_GROUP].add(new SplashEmitter({}));
        // this.game.emitters.splashEmitter = this.splashEmitter;
    }

    groupSetup(){
        /**
         * Groups for sprite layers
         * earlier groups are underneath newer ones
         */
        // the groups for layering
        var background = this.game.add.group(),
            middle = this.game.add.group(),
            foreground = this.game.add.group();

        this.game.myGroups = {
            [CONSTANT.BACKGROUND_GROUP]: background,
            [CONSTANT.MIDDLE_GROUP]: middle,
            [CONSTANT.FOREGROUND_GROUP]: foreground,
        };
    }
}