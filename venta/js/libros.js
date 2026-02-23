/*Arreglo de libros, se utiliza como respaldo si no existen datos en localStorage. */
const librosOriginal = [
  {
    id: 1,                       // Identificador único del libro
    titulo: "El Principito",      // Título del libro
    autor: "Antoine de Saint-Exupéry", // Autor
    precio: 150,                 // Precio del libro
    imagen: "./imagenes/principito.jfif", // Ruta de la imagen
    pagina: "libros/libro1.html", // Página de detalle del libro
    stock: 3                     // Cantidad disponible en inventario
  },
  {
    id: 2,
    titulo: "1984",
    autor: "George Orwell",
    precio: 180,
    imagen: "./imagenes/1984.jfif",
    pagina: "libros/libro2.html",
    stock: 19
  },
  {
    id: 3,
    titulo: "Don Quijote",
    autor: "Miguel de Cervantes",
    precio: 250,
    imagen: "./imagenes/quijote.jfif",
    pagina: "libros/libro3.html",
    stock: 18
  },
  {
    id: 4,
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    precio: 220,
    imagen: "./imagenes/cien.jfif",
    pagina: "libros/libro4.html",
    stock: 22
  },
  {
    id: 5,
    titulo: "Harry Potter",
    autor: "J. K. Rowling",
    precio: 300,
    imagen: "./imagenes/harry.jfif",
    pagina: "libros/libro5.html",
    stock: 3
  },
  {
    id: 6,
    titulo: "El Hobbit",
    autor: "J. R. R. Tolkien",
    precio: 280,
    imagen: "./imagenes/hobbit.jfif",
    pagina: "libros/libro6.html",
    stock: 26
  },
  {
    id: 7,
    titulo: "Orgullo y Prejuicio",
    autor: "Jane Austen",
    precio: 200,
    imagen: "./imagenes/orgullo.jfif",
    pagina: "libros/libro7.html",
    stock: 23
  },
  {
    id: 8,
    titulo: "Drácula",
    autor: "Bram Stoker",
    precio: 210,
    imagen: "./imagenes/dracua.jfif",
    pagina: "libros/libro8.html",
    stock: 16
  },
  {
    id: 9,
    titulo: "Alicia en el País de las Maravillas",
    autor: "Lewis Carroll",
    precio: 190,
    imagen: "./imagenes/alicia.jfif",
    pagina: "libros/libro9.html",
    stock: 9
  },
  {
    id: 10,
    titulo: "Frankenstein",
    autor: "Mary Shelley",
    precio: 230,
    imagen: "./imagenes/franke.jfif",
    pagina: "libros/libro10.html",
    stock: 23
  }
];

/**
 * Arreglo principal de libros.
 * Si existen datos guardados en localStorage se cargan,
 * de lo contrario se utiliza el catálogo original.
 */
let libros = JSON.parse(localStorage.getItem("libros")) || librosOriginal;

/**
 * Guarda el arreglo actual de libros en localStorage.
 * Convierte el objeto JavaScript a formato JSON.
 */
function guardarLibros() {
  localStorage.setItem("libros", JSON.stringify(libros));
}