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
	var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

	var geometry = new THREE.SphereGeometry(5, 100, 100);

	var material = new THREE.MeshBasicMaterial({
		map: new THREE.TextureLoader().load('../assets/panorama.jpg'),
	});

	var mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	app.appendChild(renderer.domElement);

	camera.target = new THREE.Vector3(0, 0, 0);
	camera.lookAt(camera.target);

	camera.position.x = 0;
	camera.position.y = 0;
	camera.position.z = 20;

	mesh.position.x = 0;
	mesh.position.y = 0;
	mesh.position.z = 5;


  var ctrl = {
    mesh: {
      position: {
        x: function (val) {
          mesh.position.x = val;
        },
        y: function (val) {
          mesh.position.y = val;
        },
        z: function (val) {
          mesh.position.z = val;
        },
      },
    },

    camera: {
      position: {
        x: function (val) {
          mesh.position.x = val;
        },
        y: function (val) {
          mesh.position.y = val;
        },
        z: function (val) {
          mesh.position.z = val;
        },
      },
    },
  };

  window.ctrl = ctrl;

	render();

	function update() {
		mesh.rotation.x += 0.03;
		mesh.rotation.y += 0.03;
		renderer.render(scene, camera);
	}

	function render() {
		update();
		requestAnimationFrame(render);
	}
})();
