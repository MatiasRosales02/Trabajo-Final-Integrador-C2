//formulario
const formulario = document.getElementById("formContacto");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || asunto === "" || mensaje === "") {

        document.getElementById("mensajeFormulario").innerHTML =
            `<p class="text-danger">
                Por favor, completá todos los campos.
            </p>`;

        return;
    }

    document.getElementById("mensajeFormulario").innerHTML =
        `<p class="text-success">
            ¡Mensaje enviado correctamente!
        </p>`;

    formulario.reset();
});