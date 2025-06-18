import { validacionGeneralString } from "../../../Validaciones/Validaciones.js"

const form = document.getElementById("registroForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("newUsername").value.trim();
  const password = document.getElementById("newPassword").value.trim();
  const sector = document.getElementById("sector").value;

  const validUser = validacionGeneralString(username);
  const validPass = validacionGeneralString(password);

  if (validUser !== "valido") {
    alert("Nombre de usuario no válido.");
    return;
  }

  if (validPass !== "valido") {
    alert("Contraseña no válida.");
    return;
  }

  if (!["rrhh", "admin"].includes(sector)) {
    alert("Sector no válido.");
    return;
  }

  const usuario = {
    id: Date.now(),
    username,
    password,
    estado: true,
    sector
  };

  // Guardar en localStorage
  const lista = JSON.parse(localStorage.getItem("usuarios")) || [];
  lista.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(lista));

  alert("Usuario registrado correctamente");
  window.location.href = "index.html";
});