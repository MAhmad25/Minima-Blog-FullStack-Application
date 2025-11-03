import { LuSquarePen } from "react-icons/lu";
import { useSelector } from "react-redux";
import { MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Dock = () => {
      const status = useSelector((state) => state.auth.status);
      useGSAP(() => {
            const tl = gsap.timeline({ defaults: { duration: 0.4, ease: "power1.inOut" } });
            tl.from(".outside-cont", { scaleX: 0 }).from(".inside-cont", { scaleX: 0 }, "-=0.3").from(".dock", {
                  y: 100,
                  stagger: 0.1,
            });
      });
      return (
            <div className="fixed z-40 outside-cont  flex gap-2 items-center p-3 text-[var(--color-wht)] bottom-2 md:bottom-5  left-1/2 -translate-x-1/2 rounded-xl backdrop-blur-lg  bg-[var(--color-bl)]/70">
                  <div className="flex inside-cont gap-2 px-2 py-2 overflow-hidden rounded-md bg-black h-full">
                        <div className="px-3 dock py-2 hidden md:block bg-[var(--color-bl)] rounded-md">
                              <img className="w-full h-full  object-cover" src="/favicon.svg" alt="navLogo" />
                        </div>
                        <Link className="px-3 dock py-2 border-[1px] rounded-md border-white/60" to={"/"}>
                              Home
                        </Link>
                        <Link className="px-3 dock py-2 border-[1px] rounded-md border-white/60" to={"/journals"}>
                              Journals
                        </Link>
                        <Link className="px-3 dock py-2 flex items-center justify-center-safe gap-2 border-[1px] rounded-md bg-[var(--color-wht)] text-[var(--color-bl)]  border-white/60" to={`${status ? "/write-post" : "/login"}`}>
                              {status ? <LuSquarePen /> : <MdLogin />}
                              <p className="leading-none whitespace-nowrap tracking-tight">{status ? "Write Blog" : "Login"}</p>
                        </Link>
                  </div>
            </div>
      );
};

export default Dock;
