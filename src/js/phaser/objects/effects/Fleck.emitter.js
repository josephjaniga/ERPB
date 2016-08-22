
export default class Fleck extends Phaser.Particles.Arcade.Emitter {

    constructor(p){
        super(p.game || window.game, p.x || 0, p.y || 0, 100);
        this.makeParticles('fleck');
        this.minParticleSpeed.setTo(-2, -2);
        this.maxParticleSpeed.setTo(2, 2);
        this.setScale(0.3, 0.2, 0.3, 0.2, 5000);
        this.maxParticles = 0;
        this.width = 50;
        this.height = 50;
        this.gravity = 0;
        this.setRotation(-100, 100);
    }

    /**
     * Call this function to start emitting particles.
     *
     * @method Phaser.Particles.Arcade.Emitter#start
     * @param {boolean} [explode=true] - Whether the particles should all burst out at once (true) or at the frequency given (false).
     * @param {number} [lifespan=0] - How long each particle lives once emitted in ms. 0 = forever.
     * @param {number} [frequency=250] - Ignored if Explode is set to true. Frequency is how often to emit 1 particle. Value given in ms.
     * @param {number} [quantity=0] - How many particles to launch. 0 = "all of the particles" which will keep emitting until Emitter.maxParticles is reached.
     * @param {number} [forceQuantity=false] - If `true` and creating a particle flow, the quantity emitted will be forced to the be quantity given in this call. This can never exceed Emitter.maxParticles.
     * @return {Phaser.Particles.Arcade.Emitter} This Emitter instance.
     */
    emit(pointer){
        this.x = pointer.x;
        this.y = pointer.y;
        this.on = true;
        this.start(false, 5000, 400);
    }

}