import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const ScreenLoader = () => {
      const logo = useRef(null);
      const img = useRef(null);
      useGSAP(() => {
            const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "bounce.inOut" } });
            tl.to(logo.current, {
                  opacity: 0.1,
                  filter: "blur(10px)",
            })
                  .to(img.current, { x: 100 }, "-=0.5")
                  .to(img.current, { scale: 3.2 }, "-=0.5");
      }, []);
      return (
            <section className="flex justify-center  items-center w-screen h-screen fixed z-50 top-0 left-0 bg-[var(--color-wht)]/30 backdrop-blur-lg text-[var(--color-bl)] ">
                  <div
                        className="absolute inset-0 z-0"
                        style={{
                              background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
                        }}
                  />
                  <div className="w-1/ absolute h-1/2 flex gap-5 justify-center items-center">
                        <img ref={img} src="/logo.svg" alt="icon" />
                        <div className="overflow-hidden">
                              <h1 ref={logo} className="font-feeling-logo text-5xl">
                                    Minima
                              </h1>
                        </div>
                  </div>
            </section>
      );
};

export default ScreenLoader;
