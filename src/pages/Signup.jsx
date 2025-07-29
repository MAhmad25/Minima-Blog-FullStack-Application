import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRef } from "react";
import { Input } from "../components/index";

const Signup = () => {
      const usernameRef = useRef(null);
      const emailRef = useRef(null);
      const passwordRef = useRef(null);
      return (
            <section className=" min-h-[calc(100svh-5rem)] flex text-[var(--color-bl)]  font-primary-text justify-center items-center bg-[var(--color-wht)] ">
                  <div className="w-full sm:w-1/2  grid place-content-center h-full">
                        <h1 className="text-4xl text-center font-secondary-text sm:text-5xl">Create an account</h1>
                        <p className="whitespace-nowrap text-center">Enter your information to get started</p>
                        <form className="grid  gap-3 place-content-center w-full h-full mt-5 grid-cols-2">
                              {/* Username */}
                              <Input label={"Username"} type={"text"} placeholder={"Enter your name"} star={true} ref={usernameRef} required minLength={3} />
                              {/* Email */}
                              <Input label={"Email"} type={"email"} placeholder={"Enter your email"} star={true} ref={emailRef} required minLength={5} />
                              {/* Password */}
                              <Input label={"Password"} type={"password"} placeholder={"Enter your password"} star={true} ref={passwordRef} required minLength={8} />
                              <button className="px-3 col-span-2 py-2 border-[1px] text-[var(--color-wht)] font-medium bg-[var(--color-bl)] rounded-xl cursor-pointer">Create account</button>
                        </form>
                        <Link className="mt-10 flex gap-2 items-center justify-center underline" to="/">
                              <IoIosArrowRoundBack size="2rem" /> <p className="text-lg">Back to home</p>
                        </Link>
                  </div>
            </section>
      );
};

export default Signup;
