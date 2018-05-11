AFRAME.registerComponent('set-image', {
    schema: {
        on: { type: 'string' },
        target: { type: 'selector' },
        src: { type: 'string'},
        dur: { type: 'number', default: 300 }
    },
    init: function(){
        var data = this.data;
        var el = this.el;

        this.setupFadeAnimation();
        el.addEventListener(data.on, function(){
            data.target.emit('set-image-fade');
            setTimeout(function(){
                data.target.setAttribute('material', 'src', "img/cubemap2.jpg");
            }, data.dur);
        });
    },
    setupFadeAnimation: function(){

    }
});