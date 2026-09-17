document.addEventListener('DOMContentLoaded', () => {

    const profesoresBD = [
        {
            id: 1,
            nombre: "Georgina Costilla",
            titulo: "Lic. en Ciencias de la Comunicación & Programadora",
            descripcion: "Especialista en desarrollo web frontend y metodologías de investigación aplicada.",
            materias: ["Programación 3", "Programación 4", "Metodología de la Investigación"]
        },
        {
            id: 2,
            nombre: "Carlos Gómez",
            titulo: "Ingeniero en Sistemas de Información",
            descripcion: "Apasionado por la arquitectura de software y bases de datos relacionales.",
            materias: ["Programación 1", "Sistemas de Procesamiento", "Base de Datos 1"]
        },
        {
            id: 3,
            nombre: "María Fernández",
            titulo: "Diseñadora Multimedial & Developer",
            descripcion: "Docente enfocada en la creación de videojuegos, motores gráficos y animación 2D/3D.",
            materias: ["Introducción a Videojuegos", "Arte 2D", "Motores 1"]
        },
        {
            id: 4,
            nombre: "Roberto Martínez",
            titulo: "Especialista en Higiene y Seguridad Laboral",
            descripcion: "Asesor industrial en prevención de riesgos, ergonomía y protocolos de protección.",
            materias: ["Seguridad 1", "Higiene 1", "Protección contra Incendios"]
        },
        {
            id: 5,
            nombre: "Laura Rossi",
            titulo: "Ingeniera Industrial & Máster en Logística",
            descripcion: "Consultora en optimización de cadena de suministro y administración de inventarios.",
            materias: ["Introducción a la Logística", "Gestión de Stock", "Transporte y Distribución"]
        },
        {
            id: 6,
            nombre: "Esteban Peralta",
            titulo: "Ingeniero Electrónico y Mecatrónico",
            descripcion: "Experto en automatización, microcontroladores y mantenimiento preventivo.",
            materias: ["Laboratorio 1", "Laboratorio 2", "Microcontroladores", "Mecanica Básica"]
        }
    ];

    const recursosBD = {
        "Programación 3": [
            { titulo: "Dossier Programación 3 (2026)", desc: "Material teórico-práctico sobre POO y manipulación avanzada del DOM." },
            { titulo: "Guía de Ejercicios JavaScript", desc: "Listado de ejercicios para practicar manipulación de eventos y arreglos." }
        ],
        "Programación 4": [
            { titulo: "Apunte de React & Node.js", desc: "Introducción al desarrollo fullstack con librerías modernas." }
        ],
        "Programación 1": [
            { titulo: "Introducción a Algoritmos", desc: "Lógica de programación, diagramas de flujo y pseudocódigo." }
        ],
        "Sistemas de Procesamiento": [
            { titulo: "Manual de Arquitectura de Computadoras", desc: "Estructura interna de la CPU, memorias y periféricos." }
        ]
    };

    const contenedorProfesores = document.getElementById('contenedor-profesores');
    const seccionRecursos = document.getElementById('seccion-recursos');
    const tituloRecursos = document.getElementById('titulo-recursos');
    const contenedorRecursos = document.getElementById('contenedor-recursos');
    const bannerFiltro = document.getElementById('banner-filtro');
    const textoFiltro = document.getElementById('texto-filtro');
    const btnLimpiarFiltro = document.getElementById('btn-limpiar-filtro');

    const urlParams = new URLSearchParams(window.location.search);
    const materiaSeleccionada = urlParams.get('materia');

    if (materiaSeleccionada) {
        filtrarYMostrarProfesores(materiaSeleccionada);
        cargarRecursos(materiaSeleccionada, false);
    } else {
        mostrarProfesores(profesoresBD);
    }

    if (btnLimpiarFiltro) {
        btnLimpiarFiltro.addEventListener('click', () => {
            window.history.replaceState({}, document.title, window.location.pathname);
            bannerFiltro.classList.add('d-none');
            seccionRecursos.classList.add('d-none');
            mostrarProfesores(profesoresBD);
        });
    }

    function mostrarProfesores(lista) {
        contenedorProfesores.innerHTML = '';

        if (lista.length === 0) {
            contenedorProfesores.innerHTML = `
                <div class="col-12 text-center my-5">
                    <p class="fs-4 texto-secundario">No se encontraron profesores para la materia seleccionada.</p>
                </div>
            `;
            return;
        }

        lista.forEach(prof => {
            const col = document.createElement('div');
            col.className = 'col';

            const materiasHTML = prof.materias.map(mat => `
                <button type="button" class="btn btn-Profesor btn-sm btn-materia" data-materia="${mat}">
                    ${mat}
                </button>
            `).join(' ');

            col.innerHTML = `
                <div class="card h-100 card-profesor rounded-4 overflow-hidden text-center p-3">
                    <div class="p-3 text-center">
                        <svg class="bd-placeholder-img rounded-circle border border-white border-opacity-10 shadow-sm" width="120" height="120" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Foto de ${prof.nombre}</title>
                            <rect width="100%" height="100%" fill="#343a40"></rect>
                            <text x="50%" y="50%" fill="var(--color-secundario)" dy=".3em" text-anchor="middle" font-size="28" font-weight="bold">${prof.nombre.charAt(0)}</text>
                        </svg>
                    </div>
                    <div class="card-body d-flex flex-column text-center p-2">
                        <h4 class="card-title texto-secundario fw-bold mb-1">${prof.nombre}</h4>
                        <h6 class="card-subtitle mb-3 text-light opacity-75">${prof.titulo}</h6>
                        <p class="card-text text-light fs-6 opacity-75 flex-grow-1">${prof.descripcion}</p>
                        <div class="mt-3">
                            <p class="small texto-secundario fw-semibold mb-2">Materias que dicta:</p>
                            <div class="d-flex flex-wrap justify-content-center gap-1">
                                ${materiasHTML}
                            </div>
                        </div>
                    </div>
                </div>
            `;

            contenedorProfesores.appendChild(col);
        });

        document.querySelectorAll('.btn-materia').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const materia = e.currentTarget.getAttribute('data-materia');
                cargarRecursos(materia, true);
            });
        });
    }

    function filtrarYMostrarProfesores(materia) {
        const profesoresFiltrados = profesoresBD.filter(p => p.materias.includes(materia));

        bannerFiltro.classList.remove('d-none');
        textoFiltro.innerHTML = `Mostrando profesores de la materia: <strong class="texto-secundario">${materia}</strong>`;

        mostrarProfesores(profesoresFiltrados);
    }

    function cargarRecursos(materia, autoScroll = true) {
        seccionRecursos.classList.remove('d-none');
        tituloRecursos.innerText = `Recursos de ${materia}`;
        contenedorRecursos.innerHTML = '';

        const recursos = recursosBD[materia] || [
            { titulo: `Dossier General de ${materia}`, desc: "Material bibliográfico de consulta y guías prácticas de estudio." },
            { titulo: "Ejercicios Resueltos", desc: "Casos de prueba y soluciones desarrolladas para la cátedra." }
        ];

        recursos.forEach(rec => {
            const col = document.createElement('div');
            col.className = 'col';

            col.innerHTML = `
                <div class="card h-100 card-recurso rounded-4 p-3">
                    <div class="card-body d-flex flex-column text-center p-3">
                        <div class="mb-3">
                            <i class="bi bi-file-earmark-text texto-secundario display-4"></i>
                        </div>
                        <h5 class="card-title texto-secundario fw-bold">${rec.titulo}</h5>
                        <p class="card-text text-light opacity-75 fs-6 my-3 flex-grow-1">${rec.desc}</p>
                        <div class="d-flex justify-content-center gap-2 mt-2">
                            <a href="#" class="btn btn-Profesor btn-sm px-3">Leer</a>
                            <a href="#" class="btn btn-Profesor btn-sm px-3">Descargar</a>
                        </div>
                    </div>
                </div>
            `;

            contenedorRecursos.appendChild(col);
        });

        if (autoScroll) {
            setTimeout(() => {
                seccionRecursos.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
        }
    }
});