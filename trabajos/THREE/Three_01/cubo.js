/*creado por Sergio Andres Sanchez 22/04/2020
 *este codigo crea 2 figuras que estan rotando en una escena 3D con webGL
 */

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//figuras, se inicializan las figuras y se guardan dentro de variables
var cubo = new THREE.BoxGeometry(1, 1, 1);
var piramid = new THREE.IcosahedronGeometry();
var plane = new THREE.PlaneGeometry(8, 3);

//materiales, se crean variables de texturas para asignarlas a alguna figura
var material01 = new THREE.MeshNormalMaterial();//este no necesita color
var material02 = new THREE.MeshBasicMaterial({color: 0x00A1FF});
var material03 = new THREE.MeshBasicMaterial({color: 0xffffff });

//objetos de figuras, se crean las figuras y se les asignan sus texturas
var cube = new THREE.Mesh(cubo, material01);
var fig2 = new THREE.Mesh(piramid, material02);
var plano = new THREE.Mesh(plane, material03)

//se añaden las figuras a la escena
scene.add(plano);
scene.add(cube);
scene.add(fig2);

//posicion de la camara
camera.position.z = 4;
//posicion del plano
plano.position.z = 0;
//posicion del cubo
cube.position.x = 2;
cube.position.z = 1;
//posicion de la figura 2
fig2.position.x = -2;
fig2.position.z = 1;

//funcion para actualizar y renderizar la escena
var animate = function (){
    requestAnimationFrame(animate);
    //rotacion del cubo
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    cube.rotation.z += 0.02;
    //rotacion de la figura 2
    fig2.rotation.x += -0.02;
    fig2.rotation.y += -0.02;
    fig2.rotation.z += -0.02;

    renderer.render(scene, camera);
};

animate();



