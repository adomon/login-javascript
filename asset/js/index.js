const username = document.getElementById("username");
const password = document.getElementById("password");

function login() {
  // Ketika Username dan Password Benar
  if (username.value == "admin" && password.value == "12345") {
    alert("Anda Berhasil Login!");
  }
  // Ketika Username dan Password Salah
  else {
    alert("Anda Gagal Login!");
  }
}
