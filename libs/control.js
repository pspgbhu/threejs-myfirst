;(function functionName() {
  var camera = window.three.camera;

  var inputPosition = {
    x: document.querySelector('#positionX'),
    y: document.querySelector('#positionY'),
    z: document.querySelector('#positionZ'),
  };

  inputPosition.x.value = window.three.camera.position.x;
  inputPosition.y.value = window.three.camera.position.y;
  inputPosition.z.value = window.three.camera.position.z;

  var inputLookAt = {
    x: document.querySelector('#lookAtX'),
    y: document.querySelector('#lookAtY'),
    z: document.querySelector('#lookAtZ'),
  };

  var btnLookAt = document.querySelector("#toLookAt");
  btnLookAt.onclick = function () {
    camera.lookAt(camera.target);
  }

  inputLookAt.x.value = window.three.camera.target.x;
  inputLookAt.y.value = window.three.camera.target.y;
  inputLookAt.z.value = window.three.camera.target.z;

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
