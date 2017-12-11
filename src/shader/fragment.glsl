precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

#pragma glslify: snoise3 = require(glsl-noise/simplex/3d)
#pragma glslify: tint = require("./tint.glsl");

void main() {
     vec2 st = gl_FragCoord.xy/u_resolution; // get the screen space
     
    vec3 pos = vec3(st.xy, u_time); // travel along the Z-dimension in time.
    vec3 rgb = vec3(0.1, cos(u_time), 0.5); // cycle the green color
    vec3 noise = vec3(snoise3(pos),snoise3(pos),snoise3(pos)); // generate the noise

    gl_FragColor = vec4(tint(noise, rgb), 1.0); // tint the noise with our function and draw the pixel
}