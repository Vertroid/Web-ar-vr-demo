var mouse = { x: 0, y: 0 };
var raycaster;

AFRAME.registerComponent('mouse-tracker', {
    schema: {
        camera: { type: 'selector' }
    },
    init: function(){
        var el = this.el;
        raycaster = new THREE.Raycaster();
        el.addEventListener('mousedown', function(event){
            event.preventDefault();
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);

            var intersects = raycaster.intersectObjects(link.children, true);
            console.log(intersects);
            console.log(link);
        })
    }
});
