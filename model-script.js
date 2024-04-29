var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var scene = new BABYLON.Scene(engine);


var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
camera.attachControl(canvas, true);


var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
light.intensity = 0.7;

var car; 

BABYLON.SceneLoader.ImportMesh("", "", "car.glb", scene, function (newMeshes) {
    car = newMeshes[0];
    car.position = BABYLON.Vector3.Zero();
    car.scaling = new BABYLON.Vector3(1.0, 1.0, 1.0); 
});
scene.registerBeforeRender(function () {
    if (car) {
        car.rotation.y += 0.01;
    }
});

engine.runRenderLoop(function () {
    scene.render();
});

window.addEventListener("resize", function () {
    engine.resize();
});
