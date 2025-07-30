import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Input, Loader } from "../components/index";
import { useForm } from "react-hook-form";
import appAuth from "../app/AuthService";
import { useDispatch } from "react-redux";
import { login } from "../store/reducers/authSlice";
import { useState } from "react";
const Signup = () => {
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const [loader, setLoader] = useState(false);
      const {
            register,
            handleSubmit,
            formState: { errors },
      } = useForm();
      const accountCreation = async (data) => {
            console.log("Signup Data: ", data);
            try {
                  setLoader(true);
                  let userData = await appAuth.createAccount(data);
                  if (userData) {
                        let currentUser = await appAuth.getCurrentUser();
                        if (currentUser) {
                              dispatch(login(currentUser));
                              setLoader(false);
                              navigate("/journals");
                        }
                  }
            } catch (error) {
                  console.log("Account Creation Failed: Check out line 29 ", error.message);
            }
      };
      return (
            <section className=" min-h-[calc(100svh-5rem)] flex text-[var(--color-bl)]  font-primary-text justify-center items-center bg-[var(--color-wht)] ">
                  <div className="w-full sm:w-1/2  grid place-content-center h-full">
                        <h1 className="text-4xl text-center font-secondary-text sm:text-5xl">Create an account</h1>
                        <p className="whitespace-nowrap text-center">Enter your information to get started</p>
                        <form onSubmit={handleSubmit(accountCreation)} className="grid  gap-3 place-content-center w-full h-full mt-5 grid-cols-2">
                              {/* Username */}
                              <Input {...register("username", { required: true })} label={"Username"} type={"text"} placeholder={"Enter your name"} star={true} />
                              {errors.username && <span className="text-red-500">Username is required</span>}
                              {/* Email */}
                              <Input {...register("email", { required: true })} label={"Email"} type={"email"} placeholder={"Enter your email"} star={true} />
                              {errors.email && <span className="text-red-500">Email is required</span>}
                              {/* Password */}
                              <Input {...register("password", { required: true })} label={"Password"} type={"password"} placeholder={"Enter your password"} star={true} minLength={8} />
                              {errors.password && <span className="text-red-500">Password is required</span>}
                              <button disabled={loader} type="submit" className={`px-3 col-span-2 flex justify-center items-center py-2 border-[1px] text-[var(--color-wht)] font-medium bg-[var(--color-bl)]  rounded-xl  ${loader ? "opacity-60  cursor-none" : "cursor-pointer opacity-100"}`}>
                                    {loader ? <Loader /> : "Create account"}
                              </button>
                        </form>
                        <Link className="mt-10 flex gap-2 items-center justify-center underline" to="/">
                              <IoIosArrowRoundBack size="2rem" /> <p className="text-lg">Back to home</p>
                        </Link>
                  </div>
            </section>
      );
};

export default Signup;
