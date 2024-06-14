/**
 * Full-screen textured quad shader
 */

const WaveShader = {

	name: 'WaveShader',

	uniforms: {
    'time': { value: 0.0 },
    'amplitude': { value: 1.0 },
    'frequency': { value: 2.0 },
    'speed': { value: 1.0 },
	},

	vertexShader: /* glsl */`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

	fragmentShader: /* glsl */`
    uniform float time;
    uniform float amplitude;
    uniform float frequency;
    uniform float speed;
    varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`

};

export { WaveShader };