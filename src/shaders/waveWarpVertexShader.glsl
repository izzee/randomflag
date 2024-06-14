uniform float time;
uniform float amplitude;
uniform float frequency;
uniform float speed;
varying vec2 vUv;

void main() {
     vUv = uv;
    vec3 newPosition = position;
    // newPosition.y += amplitude * sin(newPosition.x * frequency + time * speed);
    newPosition.z += amplitude * sin(newPosition.x * frequency + time * speed);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}