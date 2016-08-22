
export default class Spark extends Phaser.Particles.Arcade.Emitter {

    constructor(p){
        super(p.game || window.game, p.x || 0, p.y || 0, 100);
        this.makeParticles('spark');
        this.minParticleSpeed.setTo(-1000, -600);
        this.maxParticleSpeed.setTo(1000, 600);
        this.setAlpha(1, 0.1, 600);
        this.setScale(.75, 0.05, .75, 0.05, 600);
    }

    emit(pointer){
        this.x = pointer.x;
        this.y = pointer.y;
        this.start(true, 600, null, 25);
    }

}