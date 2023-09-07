//buscador sencillo

document.getElementById("buscador").addEventListener("input", function() {
    var textoBusqueda = this.value.toLowerCase();
    var tarjetas = document.getElementsByClassName("card");
    
    for (var i = 0; i < tarjetas.length; i++) {
      var titulo = tarjetas[i].getElementsByClassName("card-title")[0].textContent.toLowerCase();
      
      if (titulo.includes(textoBusqueda)) {
        tarjetas[i].style.display = "block";
      } else {
        tarjetas[i].style.display = "none";
      }
    }
  });

