import firebase from "../firebase/index";

const firebaseRegis = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      alert("succes", res.data);
    })
    .then(
      setTimeout(() => {
        window.location = "/Login";
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
