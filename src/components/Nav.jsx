import { Link } from "react-router-dom";
import { LuSquarePen } from "react-icons/lu";
import { HiOutlineMenu } from "react-icons/hi";
import { Logout } from "./index";
import { useSelector } from "react-redux";
const Nav = () => {
      const status = useSelector((state) => state.auth.status);
      return (
            <nav className="max-w-full sticky top-0 left-0 flex z-20 backdrop-blur-3xl shadow-wht justify-between md:items-center text-[var(--color-bl)]  font-primary-text h-20 md:h-20">
                  {/* Logo Section */}
                  <section className="flex w-fit  md:w-1/4  items-center">
                        <svg className="scale-[0.4]" width="90" height="90" viewBox="0 0 106 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M105.976 38.5967L66.1865 107.514L48 97.0137L75.8105 48.8438L69.4092 45.2021L42.1172 92.4746L24.0693 82.0537L51.3545 34.792L46.6113 32.0938L19.0938 79.7568L0.90625 69.2568L40.4102 0.833984L105.976 38.5967Z" fill="black" />
                        </svg>
                        <h1 className="md:text-2xl  font-feeling-logo text-3xl">Minima</h1>
                  </section>
                  {/* Link Section */}
                  <HiOutlineMenu size="2rem" className="md:hidden absolute top-[35%] right-10" />
                  {/* Mobile Nav Section TODO : TO be Animated */}
                  <section className="md:flex  flex-3/6 md:pl-10 lg:pl-50  top-20 left-0 bg-[var(--color-wht)] md:bg-transparent absolute md:static md:top-0 md:left-0  md:h-fit  w-full h-screen md:justify-between  md:gap-10 md:items-center ">
                        <section className="flex flex-col mt-10 md:mt-0 px-10 md:px-0 md:flex-row text-4xl md:text-lg justify-center md:gap-5 ">
                              <Link to="/">Home</Link>
                              <Link to="/journals">Journals</Link>
                        </section>
                        {/* Button Section */}
                        <section className="flex flex-col md:flex-row mt-10 md:mt-0 md:items-center  px-10  gap-5">
                              {status && (
                                    <Link to="/write-post" className="flex w-fit gap-1 text-xl md:text-sm border-[0.3px] px-2 py-2 md:px-3  md:py-2 rounded-xl">
                                          <LuSquarePen />
                                          <p className="leading-none tracking-tight">Write Blog</p>
                                    </Link>
                              )}
                              <div className="flex text-lg  items-center gap-5">
                                    {!status && <Link to="/login">Login</Link>}
                                    {!status && <Link to="/create-account ">Create Account</Link>}
                                    {status && <Logout />}
                              </div>
                        </section>
                  </section>
            </nav>
      );
};

export default Nav;
