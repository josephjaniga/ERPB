/**
 * GlowFilter, originally by mishaa
 * http://www.html5gamedevs.com/topic/12756-glow-filter/?hl=mishaa#entry73578
 * http://codepen.io/mishaa/pen/raKzrm
 *
 * @class
 * @param viewWidth {number} The width of the view to draw to, usually renderer.width.
 * @param viewHeight {number} The height of the view to draw to, usually renderer.height.
 * @param outerStrength {number} The strength of the glow outward from the edge of the sprite.
 * @param innerStrength {number} The strength of the glow inward from the edge of the sprite.
 * @param color {number} The color of the glow.
 * @param quality {number} A number between 0 and 1 that describes the quality of the glow.
 *
 * @example
 *  someSprite.filters = [
 *      new GlowFilter(renderer.width, renderer.height, 15, 2, 1, 0xFF0000, 0.5)
 *  ];
 */

PIXI.GlowFilter = function (textureWidth, textureHeight, distance, outerStrength, innerStrength, color, quality) {

    PIXI.AbstractFilter.call(this);

    quality = Math.pow(quality, 1/3);
    distance *= quality;
    textureWidth *= quality;
    textureHeight *= quality;

    this.uniforms = {
        distance: {type: '1f', value: distance},
        outerStrength: {type: '1f', value: null},
        innerStrength: {type: '1f', value: null},
        glowColor: {type: '4f', value: null},
        pixelWidth: {type: '1f', value: null},
        pixelHeight: {type: '1f', value: null},
        time: {type:'1f', value: 1},
    };

    this.color = color;
    this.outerStrength = outerStrength;
    this.innerStrength = innerStrength;
    this.textureWidth = textureWidth;
    this.textureHeight = textureHeight;
    this.padding = 20;
    this.passes = [this];

    this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'uniform sampler2D texture;',
        'uniform float distance;',
        'uniform float outerStrength;',
        'uniform float innerStrength;',
        'uniform vec4 glowColor;',
        'uniform float pixelWidth;',
        'uniform float pixelHeight;',
        'uniform float time;',
        'vec2 px = vec2(pixelWidth, pixelHeight);',
        'void main(void) {',
        '    const float PI = 3.14159265358979323846264;',
        '    vec4 ownColor = texture2D(texture, vTextureCoord);',
        '    vec4 curColor;',
        '    float totalAlpha = 0.;',
        '    float maxTotalAlpha = 0.;',
        '    float cosAngle;',
        '    float sinAngle;',
        '    for (float angle = 0.; angle <= PI * 2.; angle += ' + (1 / quality / distance).toFixed(7) + ') {',
        '        cosAngle = cos(angle);',
        '        sinAngle = sin(angle);',
        '        for (float curDistance = 1.; curDistance <= ' + distance.toFixed(7) + '; curDistance++) {',
        '            curColor = texture2D(texture, vec2(vTextureCoord.x + cosAngle * curDistance * px.x, vTextureCoord.y + sinAngle * curDistance * px.y));',
        '            totalAlpha += (distance - curDistance) * curColor.a;',
        '            maxTotalAlpha += (distance - curDistance);',
        '        }',
        '    }',
        '    maxTotalAlpha = max(maxTotalAlpha, 0.0001);',
        '    ownColor.a = max(ownColor.a, 0.0001);',
        '    ownColor.rgb = ownColor.rgb / ownColor.a;',
        '    float outerGlowAlpha = (totalAlpha / maxTotalAlpha) * outerStrength * (1. - ownColor.a) * time;',
        '    float innerGlowAlpha = ((maxTotalAlpha - totalAlpha) / maxTotalAlpha) * innerStrength * ownColor.a;',
        '    float resultAlpha = (ownColor.a + outerGlowAlpha);',
        '    gl_FragColor = vec4(mix(mix(ownColor.rgb, glowColor.rgb, innerGlowAlpha / ownColor.a), glowColor.rgb, outerGlowAlpha / resultAlpha) * resultAlpha, resultAlpha);',
        '}'
    ];
};

PIXI.GlowFilter.prototype = Object.create(PIXI.AbstractFilter.prototype);
PIXI.GlowFilter.prototype.constructor = PIXI.GlowFilter;

Object.defineProperty(PIXI.GlowFilter.prototype, 'color', {
    set: function(value) {
        var r = ((value & 0xFF0000) >> 16) / 255,
            g = ((value & 0x00FF00) >> 8) / 255,
            b = (value & 0x0000FF) / 255;
        this.uniforms.glowColor.value = {x: r, y: g, z: b, w: 1};
        this.dirty = true;
    }
});

Object.defineProperty(PIXI.GlowFilter.prototype, 'outerStrength', {
    set: function (value) {
        this.uniforms.outerStrength.value = value;
        this.dirty = true;
    }
});

Object.defineProperty(PIXI.GlowFilter.prototype, 'innerStrength', {
    set: function (value) {
        this.uniforms.innerStrength.value = value;
        this.dirty = true;
    }
});

Object.defineProperty(PIXI.GlowFilter.prototype, 'textureWidth', {
    set: function(value) {
        this.uniforms.pixelWidth.value = 1 / value;
        this.dirty = true;
    }
});

Object.defineProperty(PIXI.GlowFilter.prototype, 'textureHeight', {
    set: function(value) {
        this.uniforms.pixelHeight.value = 1 / value;
        this.dirty = true;
    }
});

Object.defineProperty(PIXI.GlowFilter.prototype, 'time', {
    set: function(value) {
        this.uniforms.time.value = value;
        this.dirty = true;
    }
});