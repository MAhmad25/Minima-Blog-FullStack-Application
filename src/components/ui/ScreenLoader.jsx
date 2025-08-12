const ScreenLoader = () => {
      return (
            <section className="grid w-svw h-svh fixed z-30 top-0 left-0 bg-[var(--color-wht)]/10 backdrop-blur-md text-[var(--color-bl)] place-content-center">
                  <div className="w-1/2 h-1/2 flex gap-5 justify-center items-center">
                        <img src="/logo.svg" alt="icon" />
                        <h1 className="font-feeling-logo text-5xl">Minima</h1>
                  </div>
            </section>
      );
};

export default ScreenLoader;
