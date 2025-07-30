import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protected = ({ children, authentication = true }) => {
      const navigate = useNavigate();
      const [loading, setLoading] = useState(true);
      const authStatus = useSelector((state) => state.auth.status);
      useEffect(() => {
            if (authentication && authStatus !== authentication) {
                  navigate("/login");
            } else if (!authentication && authStatus === authentication) {
                  navigate("/journals");
            }
            setLoading(false);
      }, [navigate, authentication, authStatus]);

      return <>{loading ? <p>Loading</p> : children}</>;
};

export default Protected;
