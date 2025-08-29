const Container = ({ children }) => {
      return (
            <main
                  style={{
                        backgroundImage: `
        radial-gradient(circle at 20% 80%, rgba(255, 220, 190, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 245, 238, 0.35) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(255, 210, 180, 0.15) 0%, transparent 50%)`,
                  }}
                  className="max-w-screen relative"
            >
                  {children}
            </main>
      );
};
export default Container;
