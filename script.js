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
