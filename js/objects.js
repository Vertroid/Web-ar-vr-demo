/**
 *
 * 全景球形
 *
 * @constructor
 */
var PanoSphere = function(){
    var geomS = new THREE.SphereBufferGeometry(500, 60, 40);
    geomS.scale(-1, 1, 1); // invert the geometry

    var matS = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('img/test.jpg')
    });
    this.obj = new THREE.Mesh(geomS, matS);
};

var Link = function(text){
    this.text = text;
}