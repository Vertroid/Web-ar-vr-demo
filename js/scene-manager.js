var global = {
    camera: null,
    scene: null,
    renderer: null,
    isInteracting: false,
    mouse: {
        x: 0,
        y: 0,
        lat: 0,
        lon: 0
    },
    lat: 0,
    lon: 0,
    theta: 0
};
var lat = 0;
var lon = 0;
var phi = 0;
var theta = 0;
var sphere = null;


function init(){
    var container = document.querySelector('#container');


    // Initialize scene
    global.scene = new THREE.Scene();

    // Initialize camera
    global.camera = new THREE.PerspectiveCamera(75, window.innerWidth, window.innerHeight, 1, 1100);
    global.camera.target = new THREE.Vector3(0, 0, 0);
    global.scene.add(global.camera);

    // Create sphere geometry
    sphere = new PanoSphere();
    global.scene.add(sphere.obj);

    // Initialize renderer
    global.renderer = new THREE.WebGLRenderer();
    global.renderer.setPixelRatio((window.devicePixelRatio)? window.devicePixelRatio : 1);
    global.renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(global.renderer.domElement);

    // Add event listeners
    document.addEventListener('mousedown', onMouseDown, false);
    document.addEventListener('mousemove', onMouseMove, false);
    document.addEventListener('mouseup', onMouseUp, false);
    document.addEventListener('wheel', onMouseWheel, false);
    window.addEventListener('resize', onWindowResize, false);

}

function onWindowResize(){
    global.camera.aspect = window.innerWidth / window.innerHeight;
    global.camera.updateProjectionMatrix();
    global.renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseDown(event){
    event.preventDefault();
    global.isInteracting = true;
    global.mouse.x = event.clientX;
    global.mouse.y = event.clientY;
    global.mouse.lat = lat;
    global.mouse.lon = lon;
}

function onMouseMove(event){
    if(global.isInteracting === true){
        lon = (global.mouse.x - event.clientX) * 0.1 + global.mouse.lon;
        lat = (event.clientY - global.mouse.y) * 0.1 + global.mouse.lat;
    }
}

function onMouseUp(event){
    global.isInteracting = false;
}

function onMouseWheel(event){
    var fov = global.camera.fov + event.deltaY * 0.05;
    global.camera.fov = THREE.Math.clamp(fov, 35, 75);
    global.camera.updateProjectionMatrix();

}

function animate(){
    requestAnimationFrame(animate);
    update();
}

function update(){
    lat = Math.max(-85, Math.min(85, lat));
    phi = THREE.Math.degToRad(90 - lat);
    theta = THREE.Math.degToRad(lon);
    global.camera.target.x = 500 * Math.sin(phi) * Math.cos(theta);
    global.camera.target.y = 500 * Math.cos(phi);
    global.camera.target.z = 500 * Math.sin(phi) * Math.sin(theta);
    global.camera.lookAt(global.camera.target);
    global.renderer.render(global.scene, global.camera)
}