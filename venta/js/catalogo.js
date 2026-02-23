/* Evento que se ejecuta cuando el DOM ha cargado completamente.
 * Garantiza que los elementos HTML existan antes de manipularlos. */
document.addEventListener("DOMContentLoaded", () => {

  // Obtiene el contenedor donde se listarán los libros
  const contenedor = document.getElementById("listaLibros");

  // Verifica que el contenedor exista y que el arreglo "libros" esté definido
  // Si alguno no existe, se detiene la ejecución
  if (!contenedor || typeof libros === "undefined") return;

  // Limpia el contenido previo del contenedor
  contenedor.innerHTML = "";

  // Recorre el arreglo de libros para mostrarlos en pantalla
  libros.forEach(libro => {

    // Inserta dinámicamente la información de cada libro
    contenedor.innerHTML += `
      <div class="libro">
        
        <!-- Título del libro -->
        <h3>${libro.titulo}</h3>

        <!-- Autor del libro -->
        <p><strong>Autor:</strong> ${libro.autor}</p>

        <!-- Precio del libro -->
        <p><strong>Precio:</strong> $${libro.precio}</p>

        <!-- Botón que envía el libro al carrito -->
        <button onclick="agregarAlCarrito('${libro.titulo}', ${libro.precio})">
          Agregar al carrito
        </button>
      </div>
    `;
  });
});