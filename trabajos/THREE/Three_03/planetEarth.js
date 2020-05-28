var renderer, scene, camera;
var earthMesh, cloudMesh;

function init() {
    //inicializa las variables
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    //define los parametros del render
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    //crea un objeto loader, 
    var loader = new THREE.TextureLoader();
    // create the geometry sphere
    var geometry = new THREE.SphereGeometry(90, 32, 32);
    // create the material, using a texture of startfield
    var spaceMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    spaceMaterial.map = loader.load("https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-25.jpg");
    spaceMaterial.side = THREE.BackSide;
    // create the mesh based on geometry and material
    var mesh = new THREE.Mesh(geometry, spaceMaterial);

    //crea la esfera para el planeta
    var geometry = new THREE.SphereGeometry(0.5, 32, 32);
    //guarda variables con las texturas para el planeta, usa el loader para obtener las imagenes
    var mapTexture = loader.load("http://learningthreejs.com/data/2013-09-16-how-to-make-the-earth-in-webgl/demo/bower_components/threex.planets/images/earthmap1k.jpg");
    var bumpMap = loader.load("http://learningthreejs.com/data/2013-09-16-how-to-make-the-earth-in-webgl/demo/bower_components/threex.planets/images/earthbump1k.jpg");
    var specularMap = loader.load("http://learningthreejs.com/data/2013-09-16-how-to-make-the-earth-in-webgl/demo/bower_components/threex.planets/images/earthspec1k.jpg");

    //crea el material y define sus parametros, aplicandole las texturas de arriba
    var material = new THREE.MeshPhongMaterial({
        color: 0xaaaaaa,
        specular: 0x333333,
        shininess: 15,
        map: mapTexture,//imagen del planeta tierra
        bumpMap: bumpMap,//imagen con el relieve del planeta
        bumpScale: 0.05,//tamaño del relieve
        specularMap: specularMap,//imagen para definir que partes reflejan la luz(el agua si, la tierra no)
        specular: new THREE.Color('grey')
    });

    earthMesh = new THREE.Mesh(geometry, material);
    var geometry = new THREE.SphereGeometry(0.51, 32, 32)
    var material = new THREE.MeshPhongMaterial({
        map: loader.load("http://learningthreejs.com/data/2013-09-16-how-to-make-the-earth-in-webgl/demo/bower_components/threex.planets/images/earthcloudmap.jpg"),
        side: THREE.DoubleSide,
        opacity: 0.3,
        transparent: true,
        depthWrite: false,
    })
    cloudMesh = new THREE.Mesh(geometry, material)
    earthMesh.add(cloudMesh)

    scene.add(earthMesh, mesh);

    earthMesh.position.z = -2;

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 0;
    camera.lookAt(scene.position);



    var ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);
    var light = new THREE.DirectionalLight(0xffffff, 1, 100, 2);
    light.position.set(10, 20, 20);
    light.castShadow = true;
    scene.add(light);

    document.body.appendChild(renderer.domElement);
    render();

}

function render() {

    earthMesh.rotation.y += 0.004;
    cloudMesh.rotation.y += 0.002;

    camera.lookAt(scene.position);

    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("DOMContentLoaded", function (event) {
    init();

});

window.addEventListener("resize", handleResize, false);