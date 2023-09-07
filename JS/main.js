//formulario

document.getElementById("guardarBtn").addEventListener("click", function() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
        
    // Guardar información localmente
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("email", email);
    
    // Guardar información en sesión
    sessionStorage.setItem("nombre", nombre);
    sessionStorage.setItem("email", email);
    
    // Borrar los valores del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
  });
  
  document.getElementById("borrarBtn").addEventListener("click", function() {
    // Borrar la información almacenada
    localStorage.removeItem("nombre");
    localStorage.removeItem("email");
    sessionStorage.removeItem("nombre");
    sessionStorage.removeItem("email");
  });















