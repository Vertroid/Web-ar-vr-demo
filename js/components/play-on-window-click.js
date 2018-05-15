AFRAME.registerComponent('play-on-window-click', {
    init: function(){
        this.el.object3DMap.mesh.material.side = THREE.BackSide;
        this.onClick = this.onClick.bind(this);
    },
    play: function(){
        window.addEventListener('click', this.onClick);
    },
    pause: function(){
        window.addEventListener('click', this.onClick);
    },
    onClick: function(event){
        var video = this.el.components.material.material.map.image;
        if(!video)
            return;
        console.log("play");
        video.play();
    }
});