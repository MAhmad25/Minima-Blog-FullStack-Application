import { Link } from "react-router-dom";

const Home = () => {
      return (
            <section className="w-full min-h-svh px-5 font-primary-text sm:px-0 text-[var(--color-bl)] bg-[var(--color-wht)]  flex flex-col pt-34  gap-14  items-center">
                  <p className="border-[1px] font-alliance w-fit px-3 py-1 text-xs sm:text-sm rounded-full">✨ Welcome to the future of blogging</p>
                  <h1 className="font-cool text-center sm:w-1/2   font-black text-5xl sm:text-7xl tracking-tight ">Thoughts, stories and ideas.</h1>
                  <p className="font-ppneue  text-center sm:w-1/2    text-xl sm:text-2xl ">A minimalist blog platform for the modern web, where ideas meet elegant design and creativity knows no bounds.</p>
                  {/* Button */}
                  <div className="flex gap-4">
                        <Link className="sm:px-4 p-3 text-sm sm:text-lg sm:py-2 rounded-xl bg-[var(--color-bl)] text-[var(--color-wht)]" to="/signup">
                              Start writing today
                        </Link>
                        <Link className="sm:px-4 p-3 text-sm sm:text-lg sm:py-2 rounded-xl border-[1px] bg-transparent" to="/journals">
                              Explore stories
                        </Link>
                  </div>
                  {/* State Info */}
                  <div className="flex w-full border-b-[1px] border-[var(--color-bl)]/40  gap-2 justify-center  flex-wrap sm:gap-5 py-10">
                        {[
                              { color: "bg-green-600", text: "Free to Join" },
                              { color: "bg-blue-600", text: "No Ads" },
                              { color: "bg-purple-600", text: "Open Source" },
                        ].map((obj, index) => (
                              <div key={index} className="flex gap-2 justify-center items-center">
                                    <div className={`rounded-full w-2 h-2 ${obj.color}`}></div>
                                    <p className="text-xl font-light">{obj.text}</p>
                              </div>
                        ))}
                  </div>
                  <div className="w-full px-10"></div>
            </section>
      );
};

export default Home;
