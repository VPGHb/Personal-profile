import * as THREE from "three";

const canvas = document.getElementById("three-canvas");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
scene.fog = new THREE.FogExp2(0x000000, 0.018);

const camera = new THREE.PerspectiveCamera(78, window.innerWidth / window.innerHeight, 0.01, 140);
camera.position.set(0, 0, 0);
camera.lookAt(0, 0, -1);

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: false,
  powerPreference: "low-power"
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
renderer.setSize(window.innerWidth, window.innerHeight);

const starTravelSpeed = 1.8;
const starTwinkleAmount = 60; // 0 = no twinkle, 100 = strong twinkle
const linearStarAmount = .3; // 0 = all tunnel drift, 1 = all center-to-edge motion
const starCount = 5200;
const dustCount = 9000;
const starPositions = new Float32Array(starCount * 3);
const starColors = new Float32Array(starCount * 3);
const dustPositions = new Float32Array(dustCount * 3);
const starSeeds = [];
const dustSeeds = [];
const tunnelDepth = 95;
const mouse = new THREE.Vector2(0, 0);

function createStarTexture() {
  const textureCanvas = document.createElement("canvas");
  textureCanvas.width = 64;
  textureCanvas.height = 64;
  const textureContext = textureCanvas.getContext("2d");
  const gradient = textureContext.createRadialGradient(32, 32, 0, 32, 32, 31);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.2, "rgba(255,255,255,0.95)");
  gradient.addColorStop(0.5, "rgba(255,255,255,0.32)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  textureContext.fillStyle = gradient;
  textureContext.fillRect(0, 0, 64, 64);
  const texture = new THREE.CanvasTexture(textureCanvas);
  texture.needsUpdate = true;
  return texture;
}

function createNebulaTexture() {
  const textureCanvas = document.createElement("canvas");
  textureCanvas.width = 512;
  textureCanvas.height = 512;
  const textureContext = textureCanvas.getContext("2d");

  textureContext.fillStyle = "rgba(0,0,0,0)";
  textureContext.fillRect(0, 0, 512, 512);

  for (let index = 0; index < 18; index += 1) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const radius = 90 + Math.random() * 190;
    const opacity = 0.018 + Math.random() * 0.032;
    const gradient = textureContext.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, `rgba(255,255,255,${opacity})`);
    gradient.addColorStop(0.42, `rgba(255,255,255,${opacity * 0.32})`);
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    textureContext.fillStyle = gradient;
    textureContext.fillRect(0, 0, 512, 512);
  }

  const texture = new THREE.CanvasTexture(textureCanvas);
  texture.needsUpdate = true;
  return texture;
}

function createNebulaLayer({ x, y, z, scale, opacity, rotation }) {
  const material = new THREE.SpriteMaterial({
    map: createNebulaTexture(),
    color: 0xffffff,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const sprite = new THREE.Sprite(material);
  sprite.position.set(x, y, z);
  sprite.scale.set(scale, scale * 0.62, 1);
  sprite.material.rotation = rotation;
  scene.add(sprite);
  return sprite;
}

const nebulaLayers = [
  createNebulaLayer({ x: -14, y: 5, z: -78, scale: 64, opacity: 0.55, rotation: 0.3 }),
  createNebulaLayer({ x: 17, y: -8, z: -92, scale: 78, opacity: 0.42, rotation: 1.7 }),
  createNebulaLayer({ x: 3, y: 0, z: -110, scale: 95, opacity: 0.28, rotation: -0.6 })
];

function chooseStarColor() {
  if (Math.random() > 0.3) {
    return [1, 1, 1];
  }

  const colorRoll = Math.random();
  if (colorRoll < 0.34) {
    return [0.72, 0.84, 1];
  }
  if (colorRoll < 0.62) {
    return [1, 0.94, 0.72];
  }
  if (colorRoll < 0.84) {
    return [1, 0.72, 0.42];
  }
  return [1, 0.46, 0.34];
}

for (let index = 0; index < starCount; index += 1) {
  const outerField = Math.random() > 0.42;
  starSeeds.push({
    depth: Math.random(),
    angle: Math.random() * Math.PI * 2,
    radius: outerField ? 7.2 + Math.random() * 15.5 : 2.6 + Math.pow(Math.random(), 0.42) * 7.4,
    linearPath: Math.random() < linearStarAmount,
    speed: 0.000018 + Math.random() * 0.000034,
    spin: 0,
    pulse: Math.random() * Math.PI * 2,
    color: chooseStarColor()
  });
}

for (let index = 0; index < dustCount; index += 1) {
  dustSeeds.push({
    depth: Math.random(),
    angle: Math.random() * Math.PI * 2,
    radius: 12 + Math.pow(Math.random(), 0.38) * 28,
    speed: 0.000008 + Math.random() * 0.000014,
    spin: (Math.random() - 0.5) * 0.00028,
    pulse: Math.random() * Math.PI * 2
  });
}

const starGeometry = new THREE.BufferGeometry();
starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
starGeometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

const dustGeometry = new THREE.BufferGeometry();
dustGeometry.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));

const starMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
  size: .090,
  map: createStarTexture(),
  vertexColors: true,
  transparent: true,
  opacity: 1,
  sizeAttenuation: true,
  blending: THREE.AdditiveBlending,
  depthWrite: false
});

const dustMaterial = new THREE.PointsMaterial({
  color: 0xcfcfcf,
  size: 0.16,
  map: createStarTexture(),
  transparent: true,
  opacity: 0.16,
  sizeAttenuation: true,
  blending: THREE.AdditiveBlending,
  depthWrite: false
});

const dust = new THREE.Points(dustGeometry, dustMaterial);
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(dust);
scene.add(stars);

function updateDust(time) {
  for (let index = 0; index < dustCount; index += 1) {
    const seed = dustSeeds[index];
    seed.depth -= seed.speed * 16.67 * starTravelSpeed;
    seed.angle += seed.spin * 16.67;
    if (seed.depth < 0) {
      seed.depth += 1;
      seed.angle = Math.random() * Math.PI * 2;
    }

    const z = -8 - seed.depth * tunnelDepth;
    const forwardScale = 0.22 + seed.depth * 1.35;
    const pulse = 0.7 + Math.sin(time * 0.0013 + seed.pulse) * 0.18;
    const radius = seed.radius * forwardScale * pulse;
    const driftX = mouse.x * seed.depth * 0.32;
    const driftY = mouse.y * seed.depth * 0.2;
    const positionIndex = index * 3;

    dustPositions[positionIndex] = Math.cos(seed.angle) * radius + driftX;
    dustPositions[positionIndex + 1] = Math.sin(seed.angle) * radius * 0.68 + driftY;
    dustPositions[positionIndex + 2] = z;
  }

  dustGeometry.attributes.position.needsUpdate = true;
}

function updateStars(time) {
  for (let index = 0; index < starCount; index += 1) {
    const seed = starSeeds[index];
    seed.depth -= seed.speed * 16.67 * starTravelSpeed;
    if (seed.depth < 0) {
      seed.depth += 1;
      seed.angle = Math.random() * Math.PI * 2;
      seed.linearPath = Math.random() < linearStarAmount;
      seed.color = chooseStarColor();
    }

    const z = 4 - seed.depth * tunnelDepth;
    const travelProgress = 1 - seed.depth;
    const forwardScale = seed.linearPath
      ? 0.04 + Math.pow(travelProgress, 1.7) * 2.1
      : 0.35 + seed.depth * 1.45;
    const pulse = seed.linearPath ? 1 : 0.86 + Math.sin(time * 0.0028 + seed.pulse) * 0.14;
    const radius = seed.radius * forwardScale * pulse;
    const positionIndex = index * 3;

    starPositions[positionIndex] = Math.cos(seed.angle) * radius;
    starPositions[positionIndex + 1] = Math.sin(seed.angle) * radius * 0.62;
    starPositions[positionIndex + 2] = z;

    const twinkleStrength = starTwinkleAmount / 100;
    const twinkle = 1 - twinkleStrength * 0.38 + Math.sin(time * 0.0024 + seed.pulse) * twinkleStrength * 0.26;
    const brightness = Math.max(0.46, Math.min(1, twinkle));
    starColors[positionIndex] = seed.color[0] * brightness;
    starColors[positionIndex + 1] = seed.color[1] * brightness;
    starColors[positionIndex + 2] = seed.color[2] * brightness;
  }

  starGeometry.attributes.position.needsUpdate = true;
  starGeometry.attributes.color.needsUpdate = true;
}

function updateNebula(time) {
  nebulaLayers.forEach((layer, index) => {
    const speed = 0.000035 + index * 0.000018;
    layer.material.rotation += speed * 16.67;
    layer.position.x += Math.sin(time * (0.00012 + index * 0.00003) + index) * 0.002;
    layer.position.y += Math.cos(time * (0.0001 + index * 0.00002) + index) * 0.0015;
  });
}

function animate(time = 0) {
  updateNebula(time);
  updateDust(time);
  updateStars(time);
  camera.rotation.z = 0;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

function handleResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("mousemove", (event) => {
  mouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
  mouse.y = (event.clientY / window.innerHeight - 0.5) * 2;
});

window.addEventListener("resize", handleResize);
animate();
