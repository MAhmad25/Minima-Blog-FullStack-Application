import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import Nav from "../components/Nav";

const Signup = () => {
      return (
            <>
                  <Nav />
                  <section className=" min-h-[calc(100svh-5rem)] flex text-[var(--color-bl)]  font-primary-text justify-center items-center bg-[var(--color-wht)] ">
                        <div className="w-full sm:w-1/2  grid place-content-center h-full">
                              <h1 className="text-4xl text-center font-secondary-text sm:text-5xl">Create an account</h1>
                              <p className="whitespace-nowrap text-center">Enter your information to get started</p>
                              <form className="grid  gap-3 place-content-center w-full h-full mt-5 grid-cols-2">
                                    <div className="col-span-2 ">
                                          {/* Username */}
                                          <label htmlFor="username">
                                                Username <span className="text-red-500">*</span>
                                          </label>
                                          <input required minLength={5} id="username" className="px-4 w-full py-2 block border-[0.5px] rounded-xl outline-none " type="text" placeholder="username" />
                                    </div>
                                    <div className="col-span-2 ">
                                          {/* email */}
                                          <label htmlFor="email">
                                                Email <span className="text-red-500">*</span>
                                          </label>
                                          <input required id="email" className="border-[0.5px] rounded-xl outline-none  block px-4 w-full py-2" type="email" placeholder="email" />
                                    </div>
                                    <div className="col-span-2 ">
                                          {/* password */}
                                          <label htmlFor="password">
                                                Password <span className="text-red-500">*</span>
                                          </label>
                                          <input required minLength={8} id="password" className="border-[0.5px] rounded-xl outline-none  block px-4 w-full py-2" type="password" placeholder="password" />
                                    </div>
                                    <button className="px-3 col-span-2 py-2 border-[1px] text-[var(--color-wht)] font-medium bg-[var(--color-bl)] rounded-xl cursor-pointer">Create account</button>
                              </form>
                              <Link className="mt-10 flex gap-2 items-center justify-center underline" to="/">
                                    <IoIosArrowRoundBack size="2rem" /> <p className="text-lg">Back to home</p>
                              </Link>
                        </div>
                  </section>
            </>
      );
};

export default Signup;
