const URL_SERVER = "https://bancosolar.onrender.com/apiV1";
const URL_BASE = "https://wilper591.github.io/BancoSolarCliente/";
const inputUser = document.querySelector("#user");
const inputPassword = document.querySelector("#password");
const btnLogin = document.querySelector("#ingresar");
let errorMess = document.querySelector("#errorMsj");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  login();
});

const login = async () => {
  try {
    const data = await axios.get(
      `${URL_SERVER}/login/?user=${inputUser.value}&password=${inputPassword.value}`
    );
    const DBuser = data.data.result.map((data) => data.email);
    const DBpass = data.data.result.map((data) => data.password);

    if (inputUser.value === String(DBuser) && inputPassword.value === String(DBpass)) {
      window.location.replace(`${URL_BASE}/admin.html`);
    } else {
      alert("Usuario o contraseña incorrectos");
      window.location.replace(`${URL_BASE}`);
    }
  } catch (error) {
    errorMess.innerHTML = `<p class="bg-danger text-white p-1">Usuario o contraseña Incorrectos</p>`;
    setTimeout(() => {
      limpiarLogin(errorMess);
    }, 3000);
    console.log("Error en Login: " + error);
  }
};

const limpiarLogin = (mensaje) => {
  while (mensaje.firstChild) {
    mensaje.removeChild(mensaje.firstChild);
  }
};

