import Base from './Base.state.js';

export default class FireHazardScreen extends Base {
    constructor(){
        super();
        this.fireSprite = Phaser.Sprite;
        this.burn = Phaser.Animation;
        this.logo = Phaser.Sprite;
        this.fireloop = Phaser.Sound;
        this.timeout = null;
    }

    preload(){
        super.preload();
    }

    create(){
        /**
         * Animated Fire Sprite Sheet Background scaling up x & y to fit 100%
         */
        this.fireSprite = this.game.add.sprite(0, 0, 'fire');
        this.burn = this.fireSprite.animations.add('burn');
        this.fireSprite.animations.play('burn', 9, true);
        var xFireBase = 576,
            yFireBase = 384,
            xScale = window.innerWidth/xFireBase,
            yScale = window.innerHeight/yFireBase;
        this.fireSprite.scale.setTo(xScale, yScale);

        /**
         * Centered Logo occupying % of the screen size
         */
        var xLogoBase = 800,
            yLogoBase = 475,
            desiredX = window.innerWidth * 0.6,
            logoScale = desiredX / xLogoBase,
            width = xLogoBase * logoScale,
            height = yLogoBase * logoScale,
            x = window.innerWidth / 2 - width / 2,
            y = window.innerHeight / 2 - height / 2;
        this.logo = this.game.add.sprite(x, y, 'logo');
        this.logo.scale.setTo(logoScale, logoScale);

        /**
         * Play animated fire loop
         */
        this.fireloop = this.game.sound.play('fireloop', 0.75, true);

        // this.timeout = setTimeout(()=>{
        //     this.advanceToNextScreen();
        // }, 6000);
    }

    update(){
        // if (this.game.input.mousePointer.isDown) {
        //     clearTimeout(this.timeout);
        //     this.advanceToNextScreen();
        // }
    }

    advanceToNextScreen(){
        // this.fireloop.stop();
        // this.game.state.add(
        //     "NextState",
        //     NextState,
        //     true
        // );
    }
}