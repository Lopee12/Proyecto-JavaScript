import { validacionGeneralString } from "../../../Validaciones/Validaciones.js"

const form = document.getElementById("registroForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let tieneErrores = false;

  const username = document.getElementById("newUsername").value.trim();
  const usernameError = validacionGeneralString(username);

  if (usernameError) {
    document.getElementById("error-username").innerText = usernameError;
    document.getElementById("error-username").style.display = "block";
    tieneErrores = true;
  } else {
      document.getElementById("error-username").innerText = "";
      document.getElementById("error-username").style.display = "none";
  }

  const password = document.getElementById("newPassword").value.trim();
  const passwordError = validacionGeneralString(password);

  if (passwordError) {
    document.getElementById("error-password").innerText = passwordError;
    document.getElementById("error-password").style.display = "block";
    tieneErrores = true;
  } else {
      document.getElementById("error-password").innerText = "";
      document.getElementById("error-password").style.display = "none";
  }

  const sector = document.getElementById("sector").value;

  if (!["rrhh", "admin"].includes(sector)) {
    document.getElementById("error-sector").innerText = "Seleccioná un sector válido.";
    document.getElementById("error-sector").style.display = "block";
    tieneErrores = true;
  } else {
    document.getElementById("error-sector").innerText = "";
    document.getElementById("error-sector").style.display = "none";
  }


  // Si hay errores, no continuar
  if (tieneErrores) return;

  // Si no hay errores, crear el usuario
  
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