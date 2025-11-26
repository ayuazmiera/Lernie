// auth.js

const auth = firebase.auth();
const db = firebase.firestore();

document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const matrix = document.getElementById("matrix").value;
  const course = document.getElementById("course").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Daftar pengguna di Firebase Auth
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Simpan data pelajar dalam Firestore
      return db.collection("students").doc(user.uid).set({
        name: name,
        email: email,
        matrix: matrix,
        course: course,
        password: password
      });
    })
    .then(() => {
      alert("✅ Successful");
      window.location.href = "index.html"; // redirect ke login
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});
