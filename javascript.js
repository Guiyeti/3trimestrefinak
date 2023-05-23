function abrirModal(imagen) {
    var modal = document.getElementById("modal");
    var imagenModal = document.getElementById("imagen-modal");

    imagenModal.src = imagen;
    modal.style.display = "block";
}

function cerrarModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

function mostrarNombreUsuario() {
    var nombre = obtenerNombreUsuario();
    
    if (!nombre) {
      nombre = prompt("Escribe tu nombre de usuario:");
      guardarNombreUsuario(nombre);
    }
    
    var nombreUsuarioElemento = document.createElement("div");
    nombreUsuarioElemento.id = "nombre-usuario";
    nombreUsuarioElemento.textContent = nombre;
    
    document.body.appendChild(nombreUsuarioElemento);
  }
  
  function obtenerNombreUsuario() {
    return sessionStorage.getItem("nombreUsuario");
  }
  
  function guardarNombreUsuario(nombre) {
    sessionStorage.setItem("nombreUsuario", nombre);
  }
  
  
  
  
