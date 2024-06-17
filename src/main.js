import {
  Clock,
  PlaneGeometry,
  BoxGeometry,
  DoubleSide,
  Mesh,
  PerspectiveCamera,
  Scene,
  ShaderMaterial,
  CanvasTexture,
  WebGLRenderer,
} from 'three'

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import vertexShader from './shaders/waveWarpVertexShader.glsl';
import fragmentShader from './shaders/waveWarpFragmentShader.glsl';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const width = 500
const height = 300

// Compose random flag
const icons = [
  "icons/Adore-icon.png",
  "icons/alert-icon.png",
  "icons/Applic-VLC-icon.png",
  "icons/ate-someting-bad-icon.png",
  "icons/balloons-icon.png",
  "icons/Banned-icon.png",
  "icons/Book-icon.png",
  "icons/bouquet-icon.png",
  "icons/box-2-icon.png",
  "icons/Caca-Roach-icon.png",
  "icons/cancel-icon.png",
  "icons/cloudiness-icon.png",
  "icons/Connect-icon.png",
  "icons/cosmic-heart-compact-icon.png",
  "icons/Cry-icon.png",
  "icons/dazzled-icon.png",
  "icons/dead-icon.png",
  "icons/Death-icon.png",
  "icons/Devil-Boy-icon.png",
  "icons/Dock-Finder-icon.png",
  "icons/document-help-icon.png",
  "icons/Documents-icon.png",
  "icons/dog-icon-2.png",
  "icons/dog-icon.png",
  "icons/Dolphin-icon.png",
  "icons/earth-icon.png",
  "icons/Eh-icon.png",
  "icons/eternal-moon-icon.png",
  "icons/eye-icon.png",
  "icons/feel-sick-icon.png",
  "icons/fog-icon.png",
  "icons/Folder-Favorite-Folder-icon.png",
  "icons/follow-the-sign-icon.png",
  "icons/frankenstein-icon.png",
  "icons/fun-icon.png",
  "icons/Furious-icon.png",
  "icons/General-Computer-Alt-icon.png",
  "icons/Ghost-icon.png",
  "icons/Hammer-2-icon.png",
  "icons/happy-icon.png",
  "icons/hat-icon.png",
  "icons/He-he-icon.png",
  "icons/head-icon.png",
  "icons/heart-bandaged-icon.png",
  "icons/heart-blood-icon.png",
  "icons/heart-broken-icon.png",
  "icons/heart-icon.png",
  "icons/help-icon-2.png",
  "icons/Help-icon.png",
  "icons/hourglass-icon.png",
  "icons/Hourglass-Sandclock-icon.png",
  "icons/human-icon.png",
  "icons/I-am-tired-icon.png",
  "icons/In-love-icon.png",
  "icons/iTunes-icon.png",
  "icons/jack-icon.png",
  "icons/laughter-icon.png",
  "icons/Lurker-icon.png",
  "icons/make-fun-icon.png",
  "icons/mars-icon.png",
  "icons/mercury-icon.png",
  "icons/Microsoft-Security-icon.png",
  "icons/Monkey-icon.png",
  "icons/moon-icon.png",
  "icons/My-Computer-icon.png",
  "icons/neptune-icon.png",
  "icons/notebook-boy-icon.png",
  "icons/notebook-girl-icon.png",
  "icons/PC-Weenie-icon.png",
  "icons/pluto-icon.png",
  "icons/pumpkin-icon.png",
  "icons/Puppy-1-icon.png",
  "icons/Puppy-3-icon.png",
  "icons/Puppy-4-icon.png",
  "icons/Puppy-7-icon.png",
  "icons/rain-icon.png",
  "icons/rose-icon-2.png",
  "icons/rose-icon-3.png",
  "icons/rose-icon.png",
  "icons/sad-icon.png",
  "icons/saturn-icon.png",
  "icons/scream-icon.png",
  "icons/Scroll-Feather-icon.png",
  "icons/Skeleton-icon.png",
  "icons/snow-icon.png",
  "icons/stitch-heart-icon.png",
  "icons/sun-icon.png",
  "icons/Sweet-angel-icon.png",
  "icons/The-Guru-icon.png",
  "icons/thunderstorm-icon.png",
  "icons/to-sulk-icon.png",
  "icons/To-yawn-icon.png",
  "icons/Tomb-icon.png",
  "icons/Troll-icon.png",
  "icons/Uhh-icon.png",
  "icons/uranus-icon.png",
  "icons/weather-lighning-alert-icon.png",
  "icons/Whoa-icon.png",
  "icons/Wing-Duck-icon.png",
  "icons/Wing-Heart-icon.png",
  "icons/You-like-my-teeths-icon.png",
  "icons/You-make-me-hurt-icon.png"
]
const colors = [
"AliceBlue",
"AntiqueWhite",
"Aqua",
"Aquamarine",
"Azure",
"Beige",
"Bisque",
"Black",
"BlanchedAlmond",
"Blue",
"BlueViolet",
"Brown",
"BurlyWood",
"CadetBlue",
"Chartreuse",
"Chocolate",
"Coral",
"CornflowerBlue",
"Cornsilk",
"Crimson",
"Cyan",
"DarkBlue",
"DarkCyan",
"DarkGoldenRod",
"DarkGray",
"DarkGreen",
"DarkKhaki",
"DarkMagenta",
"DarkOliveGreen",
"DarkOrange",
"DarkOrchid",
"DarkRed",
"DarkSalmon",
"DarkSeaGreen",
"DarkSlateBlue",
"DarkSlateGray",
"DarkTurquoise",
"DarkViolet",
"DeepPink",
"DeepSkyBlue",
"DimGray",
"DodgerBlue",
"FireBrick",
"FloralWhite",
"ForestGreen",
"Fuchsia",
"Gainsboro",
"GhostWhite",
"Gold",
"GoldenRod",
"Gray",
"Green",
"GreenYellow",
"HoneyDew",
"HotPink",
"IndianRed",
"Indigo",
"Ivory",
"Khaki",
"Lavender",
"LavenderBlush",
"LawnGreen",
"LemonChiffon",
"LightBlue",
"LightCoral",
"LightCyan",
"LightGoldenRodYellow",
"LightGray",
"LightGreen",
"LightPink",
"LightSalmon",
"LightSeaGreen",
"LightSkyBlue",
"LightSlateGray",
"LightSteelBlue",
"LightYellow",
"Lime",
"LimeGreen",
"Linen",
"Magenta",
"Maroon",
"MediumAquaMarine",
"MediumBlue",
"MediumOrchid",
"MediumPurple",
"MediumSeaGreen",
"MediumSlateBlue",
"MediumSpringGreen",
"MediumTurquoise",
"MediumVioletRed",
"MidnightBlue",
"MintCream",
"MistyRose",
"Moccasin",
"NavajoWhite",
"Navy",
"OldLace",
"Olive",
"OliveDrab",
"Orange",
"OrangeRed",
"Orchid",
"PaleGoldenRod",
"PaleGreen",
"PaleTurquoise",
"PaleVioletRed",
"PapayaWhip",
"PeachPuff",
"Peru",
"Pink",
"Plum",
"PowderBlue",
"Purple",
"RebeccaPurple",
"Red",
"RosyBrown",
"RoyalBlue",
"SaddleBrown",
"Salmon",
"SandyBrown",
"SeaGreen",
"SeaShell",
"Sienna",
"Silver",
"SkyBlue",
"SlateBlue",
"SlateGray",
"Snow",
"SpringGreen",
"SteelBlue",
"Tan",
"Teal",
"Thistle",
"Tomato",
"Turquoise",
"Violet",
"Wheat",
"White",
"WhiteSmoke",
"Yellow",
"YellowGreen",
]
const slogans = [
  'BOTTOM TEXT',
  'KEEP BACK',
  'P.L.U.R',
  'FMLMAO',
  'VIVE SIN DROGAS',
  'BOOOOOOOOOOOOOOOOO',
  'HACKERS OF THE WORLD UNITE',
  'S2S2S2S2S2S2S2S2S2S2S2',
  '#RANDOM',
  'NEVER GRADUATE',
  'I LOVE YOU',
  'RANDOMFLAG.NETLIFY.APP',
  'ICONIC'
]

const selectRandom = (arr) => {
  return arr[Math.floor(Math.random()*arr.length)]
}

const selectRandomIcon = () => {
  const randomPath = selectRandom(icons)
  return loadImage(randomPath)
}
const loadImage = path => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'Anonymous' // to avoid CORS if used with Canvas
    img.src = path
    img.onload = () => {
      resolve(img)
      material.forEach(side => {
        side.uniforms.uTexture.value.needsUpdate = true;
      })
      img.onload = () => {
    };
    }
    img.onerror = e => {
      reject(e)
    }
  })
}
const createFlagBackdrop = (ctx) => {
  const template = selectRandom(['vertical', 'horizontal'])
  const arrayLength = Math.round(Math.random() * 5) + 3
  const gradientArray = []
  for (let i = 0; i<= arrayLength; i++) {
    gradientArray.push({
      position: Math.random(),
      color: selectRandom(colors)
    })
  }
  gradientArray.sort(stop => stop.position)
  const {width, height} = ctx.canvas
  let grad
  if (template === 'horizontal') {
    grad=ctx.createLinearGradient(0, 0, 0, width);
  } else if (template === 'vertical') {
    grad=ctx.createLinearGradient(0, 0, width,0);
  }
  gradientArray.forEach(step => {
    grad.addColorStop(step.position, step.color)
  })
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);
}


const composeCanvas = (id) => {
  const iconSize = 100
  let canvas
  const source = document.querySelector(`canvas#${id}`)
  if (source) {
    canvas = source
  } else {
    canvas = document.createElement('canvas')
    canvas.setAttribute("id", id)
  }
  const ctx = canvas.getContext('2d');
  const randomImages = Array(3).fill()
  ctx.canvas.width = width
  ctx.canvas.height = height
  randomImages.forEach(async () => {
    const randomImage = await selectRandomIcon()
    ctx.drawImage(randomImage, Math.random() * (width - iconSize), Math.random() * (height-iconSize), iconSize, iconSize)
  })  
  createFlagBackdrop(ctx)
  ctx.font = `40px Impact`
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillColor = selectRandom(colors)
  ctx.fillStyle = selectRandom(colors)
  ctx.fillText(selectRandom(slogans), (width/2), Math.max((Math.round(Math.random()) * (height - 20)),30));
  document.body.appendChild(ctx.canvas)
  return ctx.canvas
}


// Set up scene
const clock = new Clock()
const scene = new Scene()
const camera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 2000)
const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setClearColor(0xff0000, 0) 
document.body.appendChild(renderer.domElement)

camera.position.z = 500

// Post-Processing
const composer = new EffectComposer(renderer)

const renderPass = new RenderPass(scene, camera)
composer.addPass(renderPass)

const outputPass = new OutputPass()
composer.addPass(outputPass)

// Set up geometry
const geometry = new BoxGeometry(width, height, 1, 50, 50);
// Create a custom shader material


const material  = [0,1,2,3,4,5].map((side, index) => {
  let texture
  if (side === 4) {
    texture = new CanvasTexture(composeCanvas('canvas1'));
  } else {
    texture = new CanvasTexture(composeCanvas('canvas2'));
  }
  texture.needsUpdate = true

  return new ShaderMaterial({
    uniforms: {
      time: { value: 0.0 },
      amplitude: { value: 20.0 },
      frequency: { value: 5.0 },
      speed: { value: 5.0 },
      uTexture: { value: texture},
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  });
})

const flag = new Mesh(geometry, material)
scene.add(flag)

flag.rotation.y = Math.PI / -2


let lastSide = 1
function animate() {
  if (Math.round(flag.rotation.y * 10) === -10 && lastSide === 1) {
    composeCanvas('canvas2')
    lastSide = 2
  } 
  if ( Math.round(flag.rotation.y * 10) === 20 && lastSide === 2) {
    composeCanvas('canvas1')
    lastSide = 1
  }

  if(flag.rotation.y <= Math.PI * 1.5) {
    flag.rotation.y += .01
  } else {
    flag.rotation.y = Math.PI / -2
  }

  material.forEach(side => {
    side.uniforms.uTexture.needsUpdate = true
    side.uniforms.time.value = clock.getElapsedTime()
    side.uniforms.amplitude.value = (Math.sin(flag.rotation.y - Math.PI / 2) * 50)
  })

  requestAnimationFrame(animate)
  composer.render()
}

animate()

