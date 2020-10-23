import firebase from "../firebase/index";

const firebaseRegis = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      alert(`Welcome ${email}`);
    })
    .then(
      setTimeout(() => {
        window.location = "/";
      }, 3000)
    )
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      alert(errorCode, errorMessage);
    });
};

export default firebaseRegis;
