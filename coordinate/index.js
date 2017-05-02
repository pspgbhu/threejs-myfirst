;(function() {
	var app = document.querySelector('#app');
	var scene = new THREE.Scene();

	/**
	 *  PerspectiveCamera( fov, aspect, near, far );
	 *
	 * fov — Camera frustum vertical field of view.
	 * aspect — Camera frustum aspect ratio.
	 * near — Camera frustum near plane.
	 * far — Camera frustum far plane.
	 */
	var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

  var material = new THREE.LineBasicMaterial({
    color: 0x00FF00,
  });

  // coordinate
  var geometryX = line([0, 0, 0], [10, 0, 0]);
  var geometryY = line([0, 0, 0], [0, 10, 0]);
  var geometryZ = line([0, 0, 0], [0, 0, 10]);

  var lineX = new THREE.Line(geometryX, material);
  var lineY = new THREE.Line(geometryY, material);
  var lineZ = new THREE.Line(geometryZ, material);

  // text
  // var textX = new THREE.TextGeometry( 'X', {
	// 	font: 'font',
	// 	size: 10,
	// 	height: 3,
	// 	curveSegments: 12,
	// 	bevelEnabled: true,
	// 	bevelThickness: 10,
	// 	bevelSize: 8,
	// 	bevelSegments: 5
	// });

  scene.add(lineX, lineY, lineZ);

	app.appendChild(renderer.domElement);

  camera.target = new THREE.Vector3(0, 0, 0);
  camera.lookAt(camera.target);

  camera.position.x = 4;
  camera.position.y = 02;
  camera.position.z = 20;

  window.three = {
    camera: camera,
  };

	render();

  function line(start, end) {
    var geometry = new THREE.Geometry();

    geometry.vertices.push(newApply(THREE.Vector3, start));
    geometry.vertices.push(newApply(THREE.Vector3, end));
    return geometry;
  }

  function newApply(Fn, argsArray) {
    argsArray.unshift(null);
    return new (Fn.bind.apply(Fn, argsArray));
  }

	function update() {
		renderer.render(scene, camera);
	}

	function render() {
		update();
		requestAnimationFrame(render);
	}
})();
