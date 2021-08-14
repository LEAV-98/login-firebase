import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import Swal from "sweetalert2";
export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        Swal.fire({
          title: "Has ingresado con exito",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });

        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();

    dispatch(logout());
    Swal.fire({
      title: "Hasta Luego!",
      icon: "warning",
      showConfirmButton: false,
      timer: 2000,
    });
  };
};

export const logout = () => ({
  type: types.logout,
});
