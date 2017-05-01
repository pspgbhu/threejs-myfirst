var Three = require('three/build/three.min.js');
var PANORAMA = require('./assets/panorama.jpg');

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
var camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

var geometry = new Three.SphereGeometry(5, 100, 100);
var material = new Three.MeshBasicMaterial({
	map: new Three.TextureLoader().load('./assets/panorama.jpg'),
});
var mesh = new Three.Mesh(geometry, material);
scene.add(mesh);

var renderer = new Three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

app.appendChild(renderer.domElement);

camera.target = new Three.Vector3(10, 10, 0);
camera.lookAt(camera.target);

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 0;

mesh.position.x = 10;
mesh.position.y = 10;
mesh.position.z = 0;


render();

function render() {
	requestAnimationFrame(render);
	mesh.rotation.x += 0.03;
	mesh.rotation.y += 0.03;

	renderer.render(scene, camera);
}
