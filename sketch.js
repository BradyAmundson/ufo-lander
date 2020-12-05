let ufoZ = -500
let skyAngle = 0
let ufoElevation = -100
let descentSpeed = 2
let gravity = -0.0068
let ufoAngle = 0

let treeOne = {
  x: 300,
  z: -340
}
let treeTwo = {
  x: -200,
  z: 200
}
let treeThree = {
  x: 200,
  z: 200
}
let treeFour = {
  x: -300,
  z: -340
}

let dirtTexture
let alienTexture
let moonTexture
let starTexture
let barkTexture
let leafTexture

function preload() {
  dirtTexture = loadImage("dirt.jpg")
  alienTexture = loadImage("alien.jpg")
  moonTexture = loadImage("moontexture.png")
  starTexture = loadImage("startexture.jpg")
  barkTexture = loadImage("bark.jpg")
  leafTexture = loadImage("leaf.jpg")
}

function setup() {
  createCanvas(700, 700, WEBGL)
}

function draw() {
  background('midnightblue')
  noStroke()
  directionalLight(255, 255, 255, -2, 1, -1)
  pointLight(255, 255, 255, 300, 70, 0)
  drawStars()
  drawMoon()
  drawUfo()
  drawGround()
  drawTrees(treeOne.x, treeOne.z)
  drawTrees(treeTwo.x, treeTwo.z)
  drawTrees(treeThree.x, treeThree.z)
  drawTrees(treeFour.x, treeFour.z)
  ufoZ < 0 ? ufoZ += 1 : ufoLanding()
  skyAngle += 0.001

}

function drawGround() {
  push()
  texture(dirtTexture)
  spotLight(255, 255, 255, 0, ufoElevation, ufoZ, 0, 1, 0, Math.PI / 6, 5)
  translate(0, 200, 0)
  rotateX(Math.PI / 2)
  plane(width * 2, width)
  pop()
}

function drawTrees(x, z) {
  push()
  translate(x, 120, z)
  texture(leafTexture)
  sphere(40, 16, 4)
  translate(0, 50, 0)
  texture(barkTexture)
  cylinder(10, 60)
  pop()
}

function drawStars() {
  push()
  texture(starTexture)
  translate(0, 300, -500)
  rotateZ(skyAngle)
  plane(width * 3.5)
  pop()
}

function drawMoon() {
  push()
  rotateZ(skyAngle)
  texture(moonTexture)
  translate(-400, -200, -390)
  sphere(40)
  pop()
}

function drawUfo() {
  push()
  translate(0, ufoElevation, ufoZ)
  rotateY(ufoAngle)
  specularMaterial('gray')
  shininess(10)
  ellipsoid(100, 15, 100)
  translate(0, -14, 0)
  drawAlien()
  fill(60, 90, 200, 100)
  ellipsoid(50, 20, 50)
  translate(0, 24, 0)
  emissiveMaterial('white')
  sphere(10)
  pop()
}

function drawAlien() {
  push()
  rotateY(2)
  texture(alienTexture)
  translate(15, -6, 0)
  ellipsoid(5, 8, 5)
  pop()
}

function ufoLanding() {
  descentSpeed += gravity
  ufoElevation += descentSpeed
  ufoAngle += 0.1
  if (ufoElevation > 190) {
    noLoop()
  }
}