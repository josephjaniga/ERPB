
export default class Splash extends Phaser.Particles.Arcade.Emitter {

    constructor(p){
        super(p.game || window.game, p.x || 0, p.y || 0, 100);
        this.makeParticles('splash');
        this.minParticleSpeed.setTo(-50, -50);
        this.maxParticleSpeed.setTo(50, -65);
        this.width = 30;
        this.height = 5;
        this.setAlpha(1, 0, 1000, Phaser.Easing.Exponential.InOut);
        this.setScale(1, 1.5, 1, 1.5, 1000, Phaser.Easing.Exponential.Out);
    }

    emit(pointer){
        this.x = pointer.x;
        this.y = pointer.y;
        this.start(true, 1000, null, 6);
    }

}