// script.js (versión provisional sin conexión a Azure Function)

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-container");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      FechaSesion: form.fecha.value,
      Asesor: form.asesor.value,
      Modulo: form.modulo.value,
      TemaAbordado: form.tema.value,
      AreasMejora: Array.from(form.querySelectorAll("input[name='mejora']:checked"))
        .map(el => el.value)
        .join(", "),
      ComentarioAreasMejora: form.comentario.value,
      Recomendaciones: form.recomendaciones.value
    };

    // Por ahora solo mostramos los datos en consola
    console.log("📝 Datos capturados:", data);

    // Aquí se colocará el fetch real una vez que la Azure Function esté lista
    // const response = await fetch("https://TUFUNCION.azurewebsites.net/api/guardarRetroalimentacion", {...})
  });
});
