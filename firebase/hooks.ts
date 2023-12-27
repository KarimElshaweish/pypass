import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { FIREBASE_AUTH } from "./firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState, ResourcesNamesList } from "../types/types";
import { FirebaseActions } from "./state/reducer";
import useAppNavation from "../navigation/useAppNavation";
import { FirebaseError } from "firebase/app";
const useSuccessAuth = () => {
  const nav = useAppNavation();
  const dispatch = useDispatch();
  return () => {
    dispatch({
      type: FirebaseActions.FIREBASE_END,
    });
    nav.navigate(ResourcesNamesList.HOME);
  };
};
const useStartAuthProcess = () => {
  const dispatch = useDispatch();
  return () => {
    dispatch({
      type: FirebaseActions.FIREBASE_START,
    });
  };
};
export const useSetFirebaseLoginError = () => {
  const dispatch = useDispatch();
  return (error: string) => {
    dispatch({
      type: FirebaseActions.FIREBASE_LOGIN_ERROR,
      error,
    });
  };
};

export const useSetFirebaseSignupError = () => {
  const dispatch = useDispatch();
  return (error: string) => {
    dispatch({
      type: FirebaseActions.FIREBASE_SIGNUP_ERROR,
      error,
    });
  };
};
export const useSignUp = () => {
  const auth = FIREBASE_AUTH;
  const successAuth = useSuccessAuth();
  const startAuthProcess = useStartAuthProcess();
  const setFirebaseError = useSetFirebaseSignupError();

  return async (email: string, password: string, userName: string) => {
    startAuthProcess();
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          updateProfile(result.user, { displayName: userName }).then(() =>
            successAuth(),
          );
        })
        .catch((error: FirebaseError) => setFirebaseError(error.message));
    } catch (err) {
      console.log(err);
      setFirebaseError(err);
    }
  };
};
export const useLogin = () => {
  const auth = FIREBASE_AUTH;
  const successAuth = useSuccessAuth();
  const startAuthProcess = useStartAuthProcess();
  const setFirebaseError = useSetFirebaseLoginError();
  return async (email: string, password: string) => {
    startAuthProcess();
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
        .then(() => successAuth())
        .catch((error: FirebaseError) => {
          console.log(error.message);
          setFirebaseError(error.message);
        });
    } catch (err) {
      console.log(err);
    }
  };
};
export const useSelectFriebaseIsLoading = () =>
  useSelector((state: GlobalState) => state.firebase.isloading);
export const useCurrenUserName = () => {
  const auth = FIREBASE_AUTH;
  const { displayName } = auth.currentUser;
  return displayName;
};
export const useFirebaseLoginError = () =>
  useSelector((state: GlobalState) => state.firebase.loginError);
export const useFirebaseSignupError = () =>
  useSelector((state: GlobalState) => state.firebase.signupError);
