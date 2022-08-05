let input = document.getElementById('text-input')
let inputImage = document.getElementById('meme-insert')
let titulo = document.getElementById('meme-text')
let preview = document.getElementById('meme-image-container')

function addTitle(event) {
    event.preventDefault();
    sessionStorage.setItem('word', input.value);
    titulo.innerHTML = sessionStorage.word
  }
  input.addEventListener('keyup', addTitle)

  //parte 2

function carregaImagem(){
 var imagem = document.querySelector('input[name=imagem]').files[0];
 var preview = document.querySelector('img')
 var reader = new FileReader();

 reader.onloadend = function (){
        preview.src = reader.result;
            console.log(reader.readAsDataURL(imagem))
    inputImage.addEventListener('onchange', carregaImagem)
 }
}

  