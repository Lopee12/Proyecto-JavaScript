document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("form");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const usernameInput = document.getElementById("username");
      const passwordInput = document.getElementById("password");

      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();

      // Buscar usuario en localStorage
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

      const usuarioValido = usuarios.find(
        (u) => u.username === username && u.password === password
      );

      if (usuarioValido) {
        sessionStorage.setItem("usuarioLogueado", JSON.stringify(usuarioValido));
        window.location.href = "dashboard.html"; // redirigir si todo está bien
      } else {
        document.getElementById("login-error-global").innerText = "Usuario o contraseña incorrectos.";
        document.getElementById("login-error-global").style.display = "block";
      }
    });
  }
});