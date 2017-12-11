"use strict";

const glsl = require("glslify");
const twgl = require("twgl.js");

const vertexShader = glsl.file("./shader/vertex.glsl");
const fragmentShader = glsl.file("./shader/fragment.glsl");

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const gl = canvas.getContext("webgl");

const programInfo = twgl.createProgramInfo(gl, [vertexShader, fragmentShader]);
let mouse = [0, 0];

const arrays = {
  position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0]
};
const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

function render(time) {
  twgl.resizeCanvasToDisplaySize(gl.canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  const uniforms = {
    u_time: time * 0.001,
    u_resolution: [gl.canvas.width, gl.canvas.height],
    u_mouse: mouse
  };

  gl.useProgram(programInfo.program);
  twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
  twgl.setUniforms(programInfo, uniforms);
  twgl.drawBufferInfo(gl, bufferInfo);

  requestAnimationFrame(render);
}
requestAnimationFrame(render);

document.addEventListener("mousemove", e => {
  mouse[0] = e.pageX;
  mouse[1] = e.pageY;
});