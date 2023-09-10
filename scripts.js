// Agregar interactividad con JavaScript
const equipos = document.querySelectorAll(".equipo");
equipos.forEach((equipo) => {
  equipo.addEventListener("click", () => {
    const descripcion = equipo.querySelector(".descripcion");
    descripcion.style.display =
      descripcion.style.display === "block" ? "none" : "block";
  });
});
