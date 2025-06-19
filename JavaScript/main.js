document.addEventListener("DOMContentLoaded", () => {
  inicializarUsuarios();
  console.log(JSON.parse(localStorage.getItem("usuarios")));
  configurarLogin();
});

// Inicializar usuarios por defecto si no existen
function inicializarUsuarios() {
  if (!localStorage.getItem("usuarios")) {
    const usuariosIniciales = [
      { id: 1, username: "admin", password: "admin123", estado: true, sector: "admin" },
      { id: 2, username: "rrhh1", password: "rrhh123", estado: true, sector: "rrhh" },
      { id: 3, username: "lucas", password: "lucas123", estado: true, sector: "rrhh" },
      { id: 4, username: "martina", password: "martina123", estado: true, sector: "admin" },
      { id: 5, username: "sofia", password: "sofia123", estado: true, sector: "rrhh" },
      { id: 6, username: "nicolas", password: "nicolas123", estado: true, sector: "admin" },
      { id: 7, username: "valentina", password: "valen123", estado: true, sector: "rrhh" },
      { id: 8, username: "rodrigo", password: "rodrigo123", estado: true, sector: "admin" },
      { id: 9, username: "camila", password: "camila123", estado: true, sector: "rrhh" },
      { id: 10, username: "marcos", password: "marcos123", estado: true, sector: "admin" }
    ];

    localStorage.setItem("usuarios", JSON.stringify(usuariosIniciales));
    console.log("✅ Usuarios iniciales cargados en localStorage.");
  }
}


function configurarLogin() {
  const loginForm = document.querySelector("form");
  if (!loginForm) return;

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioValido = usuarios.find(
      (u) => u.username === username && u.password === password
    );

    if (usuarioValido) {
      sessionStorage.setItem("usuarioLogueado", JSON.stringify(usuarioValido));
      window.location.href = "dashboard.html";
    } else {
      const error = document.getElementById("login-error-global");
      if (error) {
        error.innerText = "Usuario o contraseña incorrectos.";
        error.style.display = "block";
      }
    }
  });
}