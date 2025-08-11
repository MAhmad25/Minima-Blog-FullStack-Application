import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protected = ({ children, authentication = true }) => {
      const navigate = useNavigate();
      const [loading, setLoading] = useState(true);
      const authStatus = useSelector((state) => state.auth.status);
      useEffect(() => {
            //  if  authentication false and status is true -->  false && true
            // if authentication is false but status is false -->  false && false !==false
            // if authentication is true and status is true --> true && true !==true
            // if authentication is true and status is false --> true && false !==true
            if (authentication && !authStatus) {
                  navigate("/login", { replace: true });
                  toast.error("You must be logged in to access");
                  // if  authentication false and status is true -->  true  && true ===true
                  // if authentication is false but status is false -->  true && false !==false
                  // if authentication is true and status is true --> false && true !==true
                  // if authentication is true and status is false --> false && false !==true
            } else if (!authentication && authStatus) {
                  navigate("/journals", { replace: true });
            } else setLoading(false);
      }, [navigate, authentication, authStatus]);

      return <>{loading ? <p>Loading</p> : children}</>;
};

export default Protected;
