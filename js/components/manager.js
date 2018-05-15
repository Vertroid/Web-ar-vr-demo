var camera, link;
var scene, renderer;
AFRAME.registerComponent('manager', {
    schema: {
        camera: { type: 'selector' },
        link: { type: 'selector' },
        scene: { type: 'selector' },
    },
    init: function(){
        // camera = this.data.camera.components.camera.camera;
        camera = $(this.data)[0].camera.components.camera.camera;
        // camera = this.el.getObject3D('PerspectiveCamera');
        link = this.data.link.object3D;
        scene = this.el.object3D;
        renderer = this.el.renderer;
        animate();
    }
});

function animate(){
    var vec3 = new THREE.Vector3();
    vec3.setX(-vec3.x);
    vec3.setY(-vec3.y);
    vec3.setZ(-vec3.z);
    camera.getWorldDirection(vec3);
    link.lookAt(vec3);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}