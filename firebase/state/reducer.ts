const initialState = {
  isLoading: false,
  error: null,
};
export enum FirebaseActions {
  FIREBASE_START = "FIREBASE/START",
  FIREBASE_END = "FIREBASE/END",
  FIREBASE_LOGIN_ERROR = "FIREBASE/LOGIN_ERROR",
  FIREBASE_SIGNUP_ERROR = "FIREBASE/SIGNUP_ERROR",
}
interface FirebaseStartAction {
  type: FirebaseActions.FIREBASE_START;
}
interface FirebaseEndAction {
  type: FirebaseActions.FIREBASE_END;
}
interface FirebaseLoginErrorAction {
  type: FirebaseActions.FIREBASE_LOGIN_ERROR;
  error: string;
}
interface FirebaseSignupErrorAction {
  type: FirebaseActions.FIREBASE_SIGNUP_ERROR;
  error: string;
}
type Action =
  | FirebaseStartAction
  | FirebaseEndAction
  | FirebaseLoginErrorAction
  | FirebaseSignupErrorAction;

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case FirebaseActions.FIREBASE_START:
      return {
        ...state,
        isloading: true,
      };
    case FirebaseActions.FIREBASE_END:
      return {
        ...state,
        isloading: false,
      };
    case FirebaseActions.FIREBASE_LOGIN_ERROR:
      return {
        ...state,
        isload: false,
        signupError: null,
        loginError: action.error,
        isloading: false,
      };
    case FirebaseActions.FIREBASE_SIGNUP_ERROR:
      return {
        ...state,
        isload: false,
        signupError: action.error,
        loginError: null,
        isloading: false,
      };
    default:
      return state;
  }
};
