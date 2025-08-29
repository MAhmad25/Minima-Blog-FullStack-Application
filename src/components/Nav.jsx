import { Link } from "react-router-dom";
import { Logout } from "./index";
import { useSelector } from "react-redux";
const Nav = () => {
      const status = useSelector((state) => state.auth.status);
      return (
            <nav
                  style={{
                        backgroundImage: `
        radial-gradient(circle at 20% 80%, rgba(255, 220, 190, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 245, 238, 0.35) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(255, 210, 180, 0.15) 0%, transparent 50%)`,
                  }}
                  className="max-w-[95%] rounded-full container mx-auto sticky top-0 left-0 flex z-20  backdrop-blur-2xl shadow-bl shadow-2xs justify-between md:items-center text-[var(--color-bl)]  font-primary-text h-16 "
            >
                  {/* Logo Section */}
                  <section className="flex w-fit  md:w-1/4  items-center">
                        <svg className="scale-[0.4]" width="90" height="90" viewBox="0 0 106 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M105.976 38.5967L66.1865 107.514L48 97.0137L75.8105 48.8438L69.4092 45.2021L42.1172 92.4746L24.0693 82.0537L51.3545 34.792L46.6113 32.0938L19.0938 79.7568L0.90625 69.2568L40.4102 0.833984L105.976 38.5967Z" fill="black" />
                        </svg>
                        <h1 className="md:text-2xl hidden md:block  font-feeling-logo text-3xl">Minima</h1>
                  </section>
                  {/* Mobile Nav Section TODO : TO be Animated */}
                  <section className="flex flex-3/6 justify-end gap-5 px-5 text-lg  w-full  items-center ">
                        {/* Button Section */}
                        {!status && (
                              <Link className="border-[0.1px] rounded-full px-3 py-1" to="/create-account ">
                                    Create an account
                              </Link>
                        )}
                        {status && <Logout />}
                  </section>
            </nav>
      );
};

export default Nav;
