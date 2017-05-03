;(function functionName() {
  var camera = window.three.camera;
  var mesh = window.three.mesh;

  var inputPosition = {
    x: document.querySelector('#positionX'),
    y: document.querySelector('#positionY'),
    z: document.querySelector('#positionZ'),
  };

  var inputLookAt = {
    x: document.querySelector('#lookAtX'),
    y: document.querySelector('#lookAtY'),
    z: document.querySelector('#lookAtZ'),
  };

  inputPosition.x.value = camera.position.x;
  inputPosition.y.value = camera.position.y;
  inputPosition.z.value = camera.position.z;

  inputLookAt.x.value = camera.target.x;
  inputLookAt.y.value = camera.target.y;
  inputLookAt.z.value = camera.target.z;


  if (mesh) {
    var inputMesh = {
      x: document.querySelector('#meshX'),
      y: document.querySelector('#meshY'),
      z: document.querySelector('#meshZ'),
    }

    inputMesh.x.value = mesh.position.x;
    inputMesh.y.value = mesh.position.y;
    inputMesh.z.value = mesh.position.z;

    for(var key in inputMesh) {
      ;(function (_key) {
        inputMesh[_key].oninput = function () {
          mesh.position[_key] = this.value * 1;
        }
      })(key);
    }
  }


  var btnLookAt = document.querySelector("#toLookAt");
  btnLookAt.onclick = function () {
    camera.lookAt(camera.target);
  }

  for(var key in inputPosition) {
    ;(function (_key) {
      inputPosition[_key].oninput = function () {
        camera.position[_key] = this.value * 1;
      }
    })(key);
  }

  for(var key in inputLookAt) {
    ;(function (_key) {
      inputLookAt[_key].oninput = function () {
        camera.target[_key] = this.value * 1;
      }
    })(key);
  }
})();
