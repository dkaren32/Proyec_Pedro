/* Función que valida el acceso del usuario.*/
function login() {
  // Obtiene el valor ingresado en el campo usuario
  const usuario = document.getElementById("usuario").value;

  // Obtiene el valor ingresado en el campo contraseña
  const password = document.getElementById("password").value;

  // Elemento donde se mostrará el mensaje de resultado
  const mensaje = document.getElementById("mensaje");

  // Credenciales fijas (solo para fines demostrativos)
  // ⚠️ No recomendado para producción
  const usuarioCorrecto = "pablo";
  const passwordCorrecto = "12345678";

  // Valida si el usuario y la contraseña son correctos
  if (usuario === usuarioCorrecto && password === passwordCorrecto) {

    // Muestra mensaje de éxito
    mensaje.textContent = "Acceso concedido";
    mensaje.className = "success";

    // Redirecciona al usuario a la página principal
    window.location.href = "index.html";

  } else {

    // Muestra mensaje de error
    mensaje.textContent = "Usuario o contraseña incorrectos";
    mensaje.className = "error";
  }
}