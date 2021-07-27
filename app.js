const cajas = document.querySelectorAll('.caja');
const par = document.querySelector('#par');
const impar = document.querySelector('#impar');
const clear = document.querySelector('#clear');

par.addEventListener("click", () => {
    for (var i = 0; i < cajas.length; i++) {
        if (i % 2 == 0) {
            cajas[i].style.background = "blue"
        }
    }
})


impar.addEventListener("click", () => {
    for (var i = 0; i < cajas.length; i++) {
        if (i % 2 != 0) {
            cajas[i].style.background = "pink";
        }
    }
})

clear.addEventListener("click", () => {
    for (var i = 0; i < cajas.length; i++) {

        cajas[i].style.background = "red";

    }
})