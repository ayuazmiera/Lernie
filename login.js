// login.js

const auth = firebase.auth();

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("✅ Login berjaya!");
      window.location.href = "dashboard.html"; // Redirect ke halaman selepas login
    })
    .catch((error) => {
      console.error("❌ Login error:", error.message);
      alert("❌ Login gagal: " + error.message);
    });
});
