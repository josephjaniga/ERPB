
export default class Smoke extends Phaser.Particles.Arcade.Emitter {

    constructor(p){
        super(p.game || window.game, p.x || 0, p.y || 0, 100);
        this.makeParticles('smoke');
        this.minParticleSpeed.setTo(-50, -100);
        this.maxParticleSpeed.setTo(50, 25);
        this.width = 100;
        this.height = 50;
        this.setAlpha(1, 0, 1000, Phaser.Easing.Exponential.InOut);
        this.setScale(1, 2, 1, 2, 1000, Phaser.Easing.Elastic.In);
    }

    emit(pointer){
        this.x = pointer.x;
        this.y = pointer.y;
        this.start(true, 1000, null, 12);
    }

}