import Header from "./Header";
import bgimg from "../assets/images/netflixbackground.jpg";
import { useState, useRef } from "react";
import CheckValidation from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignin, setSignin] = useState(true);
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const hadnleSignUp = () => setSignin(!isSignin);

  function handleclick() {
    const nameValue = isSignin ? null : name.current.value;
    const message = CheckValidation(
      nameValue,
      email.current.value,
      password.current.value
    );
    if (message) {
      setMessage("Invalid Credentials");
      return;
    }

    const emailvalue = email.current.value;
    const passwordvalue = password.current.value;

    if (!isSignin) {
      createUserWithEmailAndPassword(auth, emailvalue, passwordvalue)
        .then((username) => {
          updateProfile(username.user, {
            displayName: nameValue,
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({ uid, email, displayName }));
          });
        })
        .catch((err) => setMessage(err.message));
    } else {
      signInWithEmailAndPassword(auth, emailvalue, passwordvalue)
        .then(() => setMessage("success"))
        .catch((err) => setMessage(err.message));
    }
  }

  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Background */}
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url(${bgimg})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Form */}
        <form
          className="
            w-full
            max-w-sm sm:max-w-md
            bg-black/60
            p-6 sm:p-10
            text-white
            rounded-md
            shadow-xl
          "
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="text-2xl font-semibold mb-4 text-center">
            {isSignin ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignin && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="w-full p-3 mb-3 rounded text-black"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Enter Email"
            className="w-full p-3 mb-3 rounded text-black"
          />

          <input
            ref={password}
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 mb-3 rounded text-black"
          />

          {message && (
            <p className="text-red-500 text-sm mb-3 text-center">
              {message}
            </p>
          )}

          <button
            onClick={handleclick}
            className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded font-semibold"
          >
            {isSignin ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="mt-4 text-sm text-center cursor-pointer hover:underline"
            onClick={hadnleSignUp}
          >
            {isSignin
              ? "New to Netflix? Sign up now"
              : "Already registered? Sign in now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
