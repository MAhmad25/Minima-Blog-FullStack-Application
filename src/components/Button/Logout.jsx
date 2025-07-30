import { useDispatch } from "react-redux";
import appAuth from "../../app/AuthService";
import { logout } from "../../store/reducers/authSlice";
const Logout = () => {
      const dispatch = useDispatch();
      const handleLogout = () => {
            appAuth.Logout().then(() => {
                  dispatch(logout());
            });
      };
      return (
            <button onClick={handleLogout} className="px-3 cursor-pointer py-2 text-sm tracking-tight leading-none bg-red-200 text-red-500 rounded-full">
                  Logout
            </button>
      );
};

export default Logout;
