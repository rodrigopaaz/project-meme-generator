let input = document.getElementById('text-input')
let inputImage = document.getElementById('meme-insert')
let titulo = document.getElementById('meme-text')
let preview = document.getElementById('meme-image-container')
let miniaturas = document.getElementById('miniaturas')


function addTitle(event) {
    event.preventDefault();
    sessionStorage.setItem('word', input.value);
    titulo.innerHTML = sessionStorage.word
  }
  input.addEventListener('keyup', addTitle)

  let fire =document.getElementById('fire')
  let water =document.getElementById('water')
  let earth =document.getElementById('earth')

  fire.addEventListener('click', function (){
    preview.style.border = '3px dashed rgb(255, 0, 0)'
  })

  water.addEventListener('click', function (){
    preview.style.border = '5px double rgb(0, 0, 255)'
  })

  earth.addEventListener('click', function (){
    preview.style.border = '6px groove rgb(0, 128, 0)'
  })
/* 
  miniaturas.addEventListener('click', function (object){
    
    let modelo = object.target.src
    console.log(modelo);
    preview = document.getElementById('meme-image')
    preview.src = modelo
  })
 */
  let meme1 = document.getElementById('meme-1')
  meme1.addEventListener('click', function (object){
    
    let modelo = meme1.inputImage
    console.log(modelo);
    preview = document.getElementById('meme-image')
    preview.src = 'imgs/meme1.png'
  })
  let meme2 = document.getElementById('meme-2')
  meme2.addEventListener('click', function (object){
    
    let modelo = meme2.inputImage
    console.log(modelo);
    preview = document.getElementById('meme-image')
    preview.src = 'imgs/meme2.png'
  })
  let meme3 = document.getElementById('meme-3')
  meme3.addEventListener('click', function (object){
    
    let modelo = meme3.inputImage
    console.log(modelo);
    preview = document.getElementById('meme-image')
    preview.src = 'imgs/meme3.png'
  })
  let meme4 = document.getElementById('meme-4')
  meme4.addEventListener('click', function (object){
    
    let modelo = meme4.inputImage
    console.log(modelo);
    preview = document.getElementById('meme-image')
    preview.src = 'imgs/meme4.png'
  })