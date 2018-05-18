var mouse = { x: 0, y: 0 };
var raycaster;

AFRAME.registerComponent('mouse-tracker', {
    schema: {
        camera: { type: 'selector' }
    },
    init: function(){
        var el = this.el;
        raycaster = new THREE.Raycaster();
        window.addEventListener('mousedown', function(event){
            event.preventDefault();
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);

            var intersects = raycaster.intersectObject(link, true);
            console.log(event);
            if(event instanceof MouseEvent){
                if(intersects.length > 0){
                    document.querySelector('#link1').emit('intersected', null, true);
                }
            }
            //console.log(event);
            //console.log(link);
        });
    }
});
