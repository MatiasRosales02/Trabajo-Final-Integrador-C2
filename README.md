# Biblioteca Digital FRT-UTN

Integrantes del grupo :

* Matias Ernesto Medina
* Matias Briseño
* Matias Rosales

## De que trata nuestro proyecto ?

Nuestro proyecto es una aula virtual. Donde los profesores de diferentes tecnicaturas puedan almacenar y ordenar la documentación de su respectiva materia (PDFs, Words, presentaciones, bibliografías, etc...). Esto soluciona el problema de estar creando grupos por la aplicación de telefono Whatsapp.

## Estrategias SEO

### . Uso de palabras clave
Utilizamos las palabras clave "Biblioteca digital FRT-UTN" en el H1 de la página principal. Ya que da la suficiente información tanto para el usuario como al motor de búsquedas de Google para que puedan ubicar de forma específica el sitio web.

### . Diseño responsive
La página web cuenta con un diseño responsive. Esto ayuda a que se adapte a diferentes pantallas.

### Enlaces internos
La página web cuenta con enlaces internos para poder manejar las diferentes secciones que tiene la página web. Cada Tecnicatura contará con su sector específico de profesores.

### Enlaces externos / backlinks
Nuestro proyecto cuenta con enlaces externos debido a que se maneja con documentación de otros lugares. Ya sean bibliografías o enlaces a videos y repositorios. Cada uno elegido por el docente que dicte su correspondiente materia.

### Velocidad de carga
Es de vital importancia para nuestro proyecto un buen flujo de navegación. Por lo que se da énfasis a la optimización de los recursos de la página web.

## Tecnologías utilizadas.

* HTML
* CSS
* Java Script
* GIT 
* GITHUB
* BOOSTRAP

### Donde utilizamos Flexbox ?

1. Navbar

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    border-radius: 50px;
    }
```
2. Lista de navegación

```css
.nav-list {
    display: flex;
    gap: 5rem;
    }
```
3. Sección "nosotros"

```css
.nosotros {
    text-align: center;
    padding: 4rem 1rem 3rem 1rem;
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ...
    }
```
4. Tarjetas (tecnicatura/recurso/profesor)

```css
.tecnicatura-card,
.recurso-card,
.profesor-card {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1.8rem;
    border-radius: 15px;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    display: flex;
    flex-direction: column;
    }   
```
5. Contenido del footer

```css
.footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    }
```
6. Links del footer

```css
.footer-links ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    flex-wrap: wrap;
    justify-content: center;
    }
```
### ¿Dónde utilizaron Grid?

```css
.tecnicaturas-main,
.recursos-main,
.profesores-main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    width: 100%;
    }   
```

### ¿Qué variables CSS crearon?
```css
:root {
    --color-primario: #1e293b;
    --color-secundario: #ff7700;
    --color-btn: #d97757;
    --color-blanco: #ffffff;
    --color-texto-suave: #cbd5e1;
    --sombra-card: 0 10px 20px rgba(0, 0, 0, 0.3);
    }
```
Ejemplo de uso de una variable:

```css
body {
    background: var(--color-primario);
    color: var(--color-blanco);
    }
```


### ¿Cómo implementaron el Responsive Design?

#### Media Queries

1024px:
```css
@media (max-width: 1024px) {
    main {
        max-width: 90%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    .nosotros h1 {
        font-size: 2.2rem;
    }
    }
```

768px (Cambia el padding del header):

```css
@media (max-width: 768px) {
    .header {
        padding: 1.2rem 1.5rem;
    }

    main {
        padding-top: 130px;
        padding-bottom: 3rem;
    }

    section[id] {
        scroll-margin-top: 130px;
    }
    ...
    }
```

480px (El grid pasa a una columna):

```css
@media (max-width: 480px) {
    .navbar {
        flex-wrap: wrap;
        row-gap: 0.5rem;
    }

    .nav-list {
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: center;
    }

    .tecnicaturas-main,
    .recursos-main,
    .profesores-main {
        grid-template-columns: 1fr;
    }

    .footer-links ul {
        flex-direction: column;
        gap: 0.8rem;
    }
}
```