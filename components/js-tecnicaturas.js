document.addEventListener('DOMContentLoaded', () => {

    const datosMaterias = {
        "Programación": [
            "Programación 1", "Sistemas de Procesamiento", "Matemática", "Inglés 1", "Laboratorio 1",
            "Programación 2", "Arquitectura y Redes", "Estadística", "Inglés 2", "Laboratorio 2",
            "Programación 3", "Base de Datos 1", "Metodología de la Investigación", "Programación 4"
        ],
        "Videojuegos": [
            "Introducción a Videojuegos", "Diseño de Niveles", "Lógica 1", "Arte 2D", "Motores 1",
            "Programación C#", "Física para Juegos", "Arte 3D", "Audio y Sonido", "Motores 2",
            "Guion y Narrativa", "IA para Videojuegos", "Producción", "Proyecto Final"
        ],
        "Higiene y seguridad": [
            "Química General", "Física 1", "Medicina Laboral", "Seguridad 1", "Derecho Laboral",
            "Higiene 1", "Ergonomía", "Toxicología", "Seguridad 2", "Protección contra Incendios",
            "Higiene 2", "Medio Ambiente", "Capacitación de Personal", "Práctica Profesional"
        ],
        "Logística": [
            "Introducción a la Logística", "Matemática Comercial", "Administración", "Economía", "Informática",
            "Gestión de Stock", "Transporte y Distribución", "Cadena de Suministro", "Costos Logísticos", "Inglés Técnico",
            "Comercio Exterior", "Almacenamiento", "Logística Inversa", "Proyecto Logístico"
        ],
        "Mantenimiento Industrial": [
            "Dibujo Técnico", "Mecánica Básica", "Física Aplicada", "Matemática Industrial", "Metrología",
            "Electricidad Industrial", "Mantenimiento Preventivo", "Hidráulica y Neumática", "Electrónica", "Seguridad Industrial",
            "Organización del Mantenimiento", "Automatización", "Ensayos No Destructivos", "Práctica Operativa"
        ],
        "Mecatrónica": [
            "Álgebra y Geometría", "Mecánica Técnica", "Electrotecnia", "Sistemas Gráficos", "Fundamentos de Programación",
            "Microcontroladores", "Electrónica Análoga", "Sistemas Neumáticos", "Sensores y Actuadores", "Termodinámica",
            "Control Automático", "Robótica Industrial", "Manufactura Integrada", "Proyecto Mecatrónico"
        ],
        "Energía Sustentable": [
            "Física de la Energía", "Química Ambiental", "Matemática Aplicada", "Ecología", "Recursos Energéticos",
            "Energía Solar Térmica", "Energía Eólica", "Energía Fotovoltaica", "Eficiencia Energética", "Termodinámica Aplicada",
            "Biomasa y Biocombustibles", "Redes Eléctricas Inteligentes", "Legislación Ambiental", "Proyecto de Sustentabilidad"
        ]
    };

    const botonesTecnicaturas = document.querySelectorAll('.btn-tecnicatura');
    const seccionMaterias = document.getElementById('seccion-materias');
    const tituloTecnicatura = document.getElementById('titulo-tecnicatura');
    const contenedorMaterias = document.getElementById('contenedor-materias');

    botonesTecnicaturas.forEach(boton => {
        boton.addEventListener('click', () => {
            const nombreTecnicatura = boton.getAttribute('data-tecnicatura');

            botonesTecnicaturas.forEach(b => b.classList.remove('active'));
            boton.classList.add('active');

            desplegarMaterias(nombreTecnicatura);
        });
    });

    function desplegarMaterias(nombreTecnicatura) {
        seccionMaterias.classList.remove('d-none');
        tituloTecnicatura.innerText = `Materias de ${nombreTecnicatura}`;
        contenedorMaterias.innerHTML = '';

        const materias = datosMaterias[nombreTecnicatura] || [];

        materias.forEach(materia => {
            const btnMateria = document.createElement('button');
            btnMateria.type = 'button';
            btnMateria.className = 'btn btn-Profesor';
            btnMateria.innerText = materia;

            btnMateria.addEventListener('click', () => {
                window.location.href = `profesores.html?materia=${encodeURIComponent(materia)}`;
            });

            contenedorMaterias.appendChild(btnMateria);
        });

    }
});