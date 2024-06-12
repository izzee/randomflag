import {
  AmbientLight,
  PlaneGeometry,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  CanvasTexture,
  Texture,
  TextureLoader,
  WebGLRenderer,
} from 'three'

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

const randomColor = () => {
  return colors[Math.floor(Math.random()*colors.length)]
}

const loadImage = path => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'Anonymous' // to avoid CORS if used with Canvas
    img.src = path
    img.onload = () => {
      resolve(img)
    }
    img.onerror = e => {
      reject(e)
    }
  })
}

const selectRandomIcon = async () => {
  const randomPath =  icons[Math.floor(icons.length * Math.random())]
  return await loadImage(randomPath)
}

const addIconsToCanvas = async () => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d');
  const randomImages = Array(4).fill()
  ctx.canvas.width = 500;
  ctx.canvas.height = 300;
  
  const grad=ctx.createLinearGradient(0,0, 500,0);
  const gradientStops = [
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
  ].sort()
  grad.addColorStop(0, randomColor());
  grad.addColorStop(gradientStops[0], randomColor()); 
  grad.addColorStop(gradientStops[1], randomColor()); 
  grad.addColorStop(gradientStops[2], randomColor()); 
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  randomImages.forEach(async () => {
    const randomImage = await selectRandomIcon() 
    const imageWidth = Math.random() * 100
    ctx.drawImage(randomImage, (Math.random() * 400 ), (Math.random() * 200), 100, 100)
    if (flag) {
      flag.material.map.needsUpdate = true
    }
  }) 
  return ctx.canvas
}
const randomCanvas = await addIconsToCanvas()

const scene = new Scene()
const camera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 5000)
const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setClearColor(0xff0000, 0) 
document.body.appendChild(renderer.domElement)

const ambientLight = new AmbientLight(0x777777)
scene.add(ambientLight)

const texture = new CanvasTexture(randomCanvas);
texture.needsUpdate = true


const geometry = new PlaneGeometry( 500, 300 );

const material = new MeshBasicMaterial({
  color: 0xffffff,
  side: DoubleSide,
  map: texture,
})

const flag = new Mesh(geometry, material)
scene.add(flag)

camera.position.z = 500
flag.rotation.set(-0.1, 0, 0)

function animate() {
  flag.rotation.y += 0.01
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  flag.material.map = texture
}

animate()

