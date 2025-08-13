import { Link } from "react-router-dom";

const Page404 = () => {
      return (
            <section className="min-h-screen fixed top-0 left-0 z-60  w-screen flex items-center justify-center bg-white font-serif py-10">
                  <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                              <div
                                    className="h-96 md:h-[420px] bg-center bg-no-repeat bg-cover flex items-center justify-center"
                                    style={{
                                          backgroundImage: "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
                                    }}
                                    role="img"
                                    aria-label="animated 404 illustration"
                              >
                                    <h1 className="text-6xl md:text-8xl  font-bold">404</h1>
                              </div>
                              <div className="-mt-12 font-cool  inline-block px-8 py-8">
                                    <h3 className="text-2xl md:text-4xl  font-semibold mb-2">Looks like you're lost</h3>
                                    <p className="text-sm md:text-base font-bold text-gray-600">The page you are looking for is not available!</p>

                                    <Link to="/" className="mt-6 inline-block text-[var(--color-wht)]  bg-[var(--color-bl)]  px-5 py-2 rounded  focus:outline-none focus:ring-2  transition">
                                          Go to Home
                                    </Link>
                              </div>
                        </div>
                  </div>
            </section>
      );
};
export default Page404;
