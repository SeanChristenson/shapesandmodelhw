var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var scene = new BABYLON.Scene(engine);


var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
camera.attachControl(canvas, true);


var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
light.intensity = 0.7;


var box = BABYLON.MeshBuilder.CreateBox("box", {size: 1}, scene);
var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 1}, scene);
var torus = BABYLON.MeshBuilder.CreateTorus("torus", {diameter: 1, thickness: 0.4}, scene);
var cylinder = BABYLON.MeshBuilder.CreateCylinder("cylinder", {diameter: 1, height: 1}, scene);
var plane = BABYLON.MeshBuilder.CreatePlane("plane", {size: 1}, scene);


box.position.x = -2;
sphere.position.x = -1;
torus.position.x = 0;
cylinder.position.x = 1;
plane.position.x = 2;


scene.registerBeforeRender(function () {
    box.rotation.y += 0.01;
    sphere.rotation.y += 0.02;
    torus.rotation.y += 0.03;
    cylinder.rotation.y += 0.04;
    plane.rotation.y += 0.05;
});


engine.runRenderLoop(function () {
    scene.render();
});


window.addEventListener("resize", function () {
    engine.resize();
});
