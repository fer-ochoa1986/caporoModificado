console.log ("el codigo se esta cargando");
window.addEventListener("DOMContentLoaded", (Event) => {
console.log("DOM completamente cargado y procesado");

const menubtn = document.getElementById("menu");
const nav = document.querySelector("header nav");
const body = document.querySelector("body");
menubtn.addEventListener("click",(Event) => {
    menubtn.classList.toggle("salir");
    nav.classList.toggle("visible");
    body.classList.toggle("no-scroll");
});
});
/*animacion*/
      document.addEventListener("DOMContentLoaded", function() {
             var element = document.querySelector(".animate__heartBeat");
              element.classList.add("animate__animated")
              });
/* API sql de precios y stock*/  
  
async function fetchData() {
    try {
      const response = await fetch("http://localhost/phpmyadmin/index.php?route=/database/structure&db=caporo");
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }
      const data = await response.json();
      // Hacer algo con los datos recibidos
      console.log(data);
    } catch (error) {
      // Manejar cualquier error ocurrido durante la solicitud
      console.error("Error:", error);
    }
  }
  
  fetchData();
