//buscador sencillo

document.getElementById("buscador").addEventListener("input", function() {
    let textoBusqueda = this.value.toLowerCase();
    let tarjetas = document.getElementsByClassName("card");
    
    for (let i = 0; i < tarjetas.length; i++) {
      let titulo = tarjetas[i].getElementsByClassName("card-title")[0].textContent.toLowerCase();
      
      if (titulo.includes(textoBusqueda)) {
        tarjetas[i].style.display = "block";
      } else {
        tarjetas[i].style.display = "none";
      }
    }
  });

