import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.128/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.128/examples/jsm/controls/OrbitControls.js';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('avatar-container').appendChild(renderer.domElement);

// Avatar stickman skeleton
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
const points = [];
points.push(new THREE.Vector3(-1, 0, 0));
points.push(new THREE.Vector3(1, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);
scene.add(line);

camera.position.z = 5;

const animate = function () {
  requestAnimationFrame(animate);
  line.rotation.x += 0.01;
  line.rotation.y += 0.01;
  renderer.render(scene, camera);
};
fetch('avatar.json')
  .then(response => response.json())
  .then(data => {
    // Create head
    const headGeometry = new THREE.SphereGeometry(data.head.radius, 32, 32);
    const headMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.set(...data.head.position);
    scene.add(head);

    // Create body
    const bodyGeometry = new THREE.CylinderGeometry(5, 5, data.body.length, 32);
    const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.set(...data.body.position);
    scene.add(body);

    // Create arms
    data.arms.forEach(arm => {
      const armGeometry = new THREE.CylinderGeometry(2, 2, arm.length, 32);
      const armMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
      const armMesh = new THREE.Mesh(armGeometry, armMaterial);
      armMesh.position.set(...arm.position);
      scene.add(armMesh);
    });

    // Create legs
    data.legs.forEach(leg => {
      const legGeometry = new THREE.CylinderGeometry(2, 2, leg.length, 32);
      const legMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
      const legMesh = new THREE.Mesh(legGeometry, legMaterial);
      legMesh.position.set(...leg.position);
      scene.add(legMesh);
    });

    animate();
  });

