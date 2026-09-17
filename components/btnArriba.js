//botón para subir la página
const contenedorBtnArriba = document.getElementById("contenedorBtnArriba");
const btnVolverArriba = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        contenedorBtnArriba.classList.remove("d-none");
    } else {
        contenedorBtnArriba.classList.add("d-none");
    }
});

btnVolverArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});