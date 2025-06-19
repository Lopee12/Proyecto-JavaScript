document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("lista-usuarios");
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (usuarios.length === 0) {
    contenedor.innerHTML = "<p>No hay usuarios registrados.</p>";
    return;
  }

  usuarios.forEach(usuario => {
    const card = document.createElement("div");
    card.classList.add("usuario-card");

    card.innerHTML = `
      <p><strong>ID:</strong> ${usuario.id}</p>
      <p><strong>Usuario:</strong> ${usuario.username}</p>
      <p><strong>Sector:</strong> ${usuario.sector}</p>
    `;

    contenedor.appendChild(card);
  });

  const logoutBtn = document.getElementById("btn-logout");

    logoutBtn.addEventListener("click", () => {
        sessionStorage.removeItem("usuarioLogueado");
        window.location.href = "index.html"; // Redirige al login
    });
});