import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, profile_avatar, Support_Lang } from "../utils/constans";
import { gptstatus } from "../utils/gptSlice";
import { addLangStatus } from "../utils/langconfig";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const gptStatus = useSelector((store) => store.gpt.Gptstatus);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => signOut(auth);
  const handleGPTToggle = () => dispatch(gptstatus());
  const handleLangClick = (e) => dispatch(addLangStatus(e.target.value));

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-black">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between px-4 sm:px-8 py-4 gap-3 sm:gap-0">

        {/* Logo (centered on mobile) */}
        <img
          src={LOGO}
          alt="Netflix Logo"
          className="w-24 sm:w-32 mx-auto sm:mx-0"
        />

        {user && (
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-4 text-white">

            {/* Language selector (visible on mobile too) */}
            {gptStatus && (
              <select
                onChange={handleLangClick}
                className="bg-slate-800 py-2 px-3 rounded-md text-xs sm:text-sm"
              >
                {Support_Lang.map((lang) => (
                  <option key={lang.identifire} value={lang.identifire}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            {/* GPT Toggle */}
            <button
              onClick={handleGPTToggle}
              className="bg-purple-500 px-3 py-2 rounded-md text-xs sm:text-sm"
            >
              {gptStatus ? "Homepage" : "GPT Search"}
            </button>

            {/* Welcome text */}
            <h4 className="text-xs sm:text-sm">
              Welcome {user.displayName}
            </h4>

            {/* Avatar */}
            <img
              src={profile_avatar}
              alt="User Profile"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-md cursor-pointer"
            />

            {/* Sign Out */}
            <button
              onClick={handleSignOut}
              className="text-xs sm:text-sm font-medium hover:underline"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
