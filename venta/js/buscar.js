/* Función que busca libros por título o autor */
function buscarLibro() {
  // Obtiene el texto ingresado en el input de búsqueda
  // lo convierte a minúsculas y elimina espacios extras
  const texto = document.getElementById("busqueda").value.toLowerCase().trim();

  // Contenedor donde se mostrarán los resultados
  const resultado = document.getElementById("resultado");

  // Limpia resultados anteriores antes de mostrar nuevos
  resultado.innerHTML = "";

  // Validación: si el campo está vacío
  if (texto === "") {
    resultado.innerHTML = `
      <div class="sin-resultados">
        ❌ Ingresa un término de búsqueda
      </div>
    `;
    return; // Detiene la ejecución de la función
  }

  // Filtra el arreglo "libros" buscando coincidencias en el título o autor
  const encontrados = libros.filter(libro =>
    libro.titulo.toLowerCase().includes(texto) ||
    libro.autor.toLowerCase().includes(texto)
  );

  // Si no se encontró ningún libro
  if (encontrados.length === 0) {
    resultado.innerHTML = `
      <div class="sin-resultados">
        ❌ No se encontraron libros
      </div>
    `;
    return;
  }

  // Recorre cada libro encontrado
  encontrados.forEach(libro => {

    // Define la página de destino según el stock
    // Si hay stock → página del libro
    // Si no hay stock → página de error 404
    const urlDestino = libro.stock > 0 
      ? libro.pagina 
      : "error404.html";

    // Inserta dinámicamente la información del libro
    resultado.innerHTML += `
      <div class="resultado-libro">
        <img src="${libro.imagen}">
        
        <div class="resultado-info">
          <h4>${libro.titulo}</h4>
          
          <div class="resultado-precio">
            $${libro.precio}
          </div>

          <div class="resultado-extra">
            Autor: ${libro.autor} <br>
            Envío gratis • Disponible
          </div>

          <br>

          <a href="${urlDestino}">Ver más</a>
          <br><br>
        </div>
      </div>
    `;
  });
}