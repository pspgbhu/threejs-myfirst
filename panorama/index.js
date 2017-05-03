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

	var geometry = new THREE.SphereGeometry(500, 60, 40);

  geometry.scale(-1, 1, 1);

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
	camera.position.z = 0;

	mesh.position.x = 0;
	mesh.position.y = 0;
	mesh.position.z = 0;

  window.three = {
    camera: camera,
    mesh: mesh,
  };

	render();
  var lat = 0,
  phi = 0,
  theta = 0,
  lon = 0;
	function update() {
        lat = Math.max( - 85, Math.min( 85, lat ) );
				phi = THREE.Math.degToRad( 90 - lat );
				theta = THREE.Math.degToRad( lon );
        lon += 0.1;

				camera.target.x = 500 * Math.sin( phi ) * Math.cos( theta );
				camera.target.y = 500 * Math.cos( phi );
				camera.target.z = 500 * Math.sin( phi ) * Math.sin( theta );

				camera.lookAt( camera.target );

				/*
				// distortion
				camera.position.copy( camera.target ).negate();
				*/

				renderer.render( scene, camera );
	}

	function render() {
		update();
		requestAnimationFrame(render);
	}
})();
