/* eslint-disable no-unused-vars */
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { isLoggedIn, user } = useAuth();

  const handleAuth = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  const logOut = () => {
    auth.signOut();
  };
  return (
    <div>
      <div className="navbar bg-gray-900  text-gray-100">
        <div className="flex-1">
          {isLoggedIn ? (
            <a className="btn btn-ghost normal-case text-xl">
              Welcome, {user.displayName}
            </a>
          ) : (
            <a className="btn btn-ghost normal-case text-xl">RoadToDevFest</a>
          )}
        </div>
        <div className="flex-none">
          {isLoggedIn ? (
            <>
              <img
                className="w-10 rounded-full"
                src={user.photoURL}
                alt="user avatar"
                referrerPolicy="no-referrer"
              />
              <button className="btn btn-ghost" onClick={logOut}>
                Logout
              </button>
            </>
          ) : (
            <button onClick={handleAuth} className="btn btn-ghost">
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
