/* Sergio Andres Sanchez O.
** Este codigo genera un plano que tiene un cubo con esferas en sus esquinas superiores, y se hace rotar todos los objetos
**/

var renderer;
var scene;
var camera;

function init(){
    //se inicializan la camara y la escena 3D
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    //se inicializa el webGL para el renderizado de la escena
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.physicallyCorrectLights = true;
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    //se crea y se especifican las caracteristicas del plano
    var planeGeometry = new THREE.PlaneGeometry(20, 20);
    var planeMaterial = new THREE.MeshLambertMaterial({color: 0x2230C6});
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 0;
    plane.position.y = -2;
    plane.position.z = 0;

    scene.add(plane);//se añade el plano a la escena

    //se crean y especifican las caracteristicas del cubo
    var cubeGeometry = new THREE.BoxGeometry(6, 4, 6);
    var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFF4D00, transparent: true, opacity:0.4});
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    scene.add(cube);//se añade el cubo a la escena
    //se posiciona la camara en cienrta posicion para que pueda er toda la escena
    camera.position.x = 15;
    camera.position.y = 16;
    camera.position.z = 13;
    camera.lookAt(scene.position);

    //se crea una luz ambiental, para iluminar la escena y que se note mas la trasparencia del cubo
    var ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);
    var light = new THREE.DirectionalLight(0xffffff, 1, 100, 2);
    light.position.set(10, 20, 20);
    light.castShadow = true;
    scene.add(light);

    document.body.appendChild(renderer.domElement);//añade el domElement a el HTML

    addVertices(cube);//este es el metodo que le pone las esferas a la figura, en teoria funcionaria con casi cualquier figura
    render();
}

function addVertices(mesh){
    //este metodo obtiene todos los vertices de una figura y los guarda en un arreglo
    //despues este arreglo es recorrido por un for each y añade una esfera a cada vertice
    var vertices = mesh.geometry.vertices;
    var vertexMaterial = new THREE.MeshPhongMaterial({color: 0xF4FF00 });

    vertices.forEach(function(vertex){
        var vertexSphere = new THREE.SphereGeometry(0.16);
        var vertexMesh = new THREE.Mesh(vertexSphere, vertexMaterial);
        vertexMesh.position.copy(vertex);
        scene.add(vertexMesh);

    });
}

function render(){
    //renderiza toda la escena y actualiza la posicion de la camara
    var rotSpeed = 0.01;
    camera.position.x = camera.position.x * Math.cos(rotSpeed) + camera.position.z * Math.sin(rotSpeed); 
    camera.position.z = camera.position.z * Math.cos(rotSpeed) - camera.position.x * Math.sin(rotSpeed); 
    camera.lookAt(scene.position);

    requestAnimationFrame(render);
    renderer.render(scene, camera);

}

function handleResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("DOMContentLoaded", function(event){
    init();

});

window.addEventListener("resize", handleResize, false);