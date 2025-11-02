const ScreenLoader = () => {
      return (
            <section className="flex justify-center  items-center w-screen h-screen fixed z-50 top-0 left-0 bg-[var(--color-wht)]/30 backdrop-blur-lg text-[var(--color-bl)] ">
                  <div
                        className="absolute inset-0 z-0"
                        style={{
                              background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
                        }}
                  />
                  <div className="w-1/ absolute h-1/2 flex gap-5 justify-center items-center">
                        <img src="/logo.svg" alt="icon" />
                        <div className="overflow-hidden">
                              <h1 className="font-feeling-logo text-5xl">Minima</h1>
                        </div>
                  </div>
            </section>
      );
};

export default ScreenLoader;
