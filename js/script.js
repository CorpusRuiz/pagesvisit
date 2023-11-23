const btnReestablecer = document.getElementById('btnReestablecer');
let contadorVisitas = document.getElementById('contadorVisitas');
let contador = {};

function pintar() {
    contadorVisitas.innerText = contador;
}
const actualizarContador = () =>{
    contador = localStorage.getItem('contadorVisualizaciones');
    contador++;
    localStorage.setItem('contadorVisualizaciones', contador);
    pintar();
}

window.onload = () => {
    actualizarContador()
}

btnReestablecer.addEventListener('click',() => {
   contador = 1
   localStorage.setItem('contadorVisualizaciones', contador)
   pintar()
})



