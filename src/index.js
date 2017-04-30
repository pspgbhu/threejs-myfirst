var Three = require('three/build/three.min.js');

var app = document.querySelector('#app');
var scene = new Three.Scene();

/**
 *  PerspectiveCamera( fov, aspect, near, far );
 *
 * fov — Camera frustum vertical field of view.
 * aspect — Camera frustum aspect ratio.
 * near — Camera frustum near plane.
 * far — Camera frustum far plane.
 */
var camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new Three.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
app.appendChild(renderer.domElement);

var geometry = new Three.BoxGeometry(1, 1, 1);
var material = new Three.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new Three.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
camera.lookAt(new Three.Vector3(0, 0, 0));

render();

function render() {
	requestAnimationFrame(render);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
}
