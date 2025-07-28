import { Link } from "react-router-dom";
import Post from "../components/Post";

const Posts = () => {
      return (
            <section className="w-full space-y-16 px-5 min-h-screen py-10 font-primary-text  text-[var(--color-bl)] bg-[var(--color-wht)]">
                  <div className=" flex justify-center items-center flex-col gap-10  w-full">
                        <h1 className="font-black text-5xl sm:text-7xl tracking-tight  font-cool text-center">Journals</h1>
                        <p className="font-ppneue sm:w-1/2 text-center  text-xl sm:text-2xl ">Explore our collection of articles, stories, and insights on design, technology, and creativity.</p>
                  </div>
                  {/* Tags */}
                  <div className="w-full flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between">
                        <div className="flex h-fit gap-3 flex-wrap w-3/4">
                              {["All", "Design", "Technology", "Creativity", "Business", "Accessibility"].map((tag, index) => (
                                    <Link to={`/category/${tag}`} key={index} className="px-3 py-1 border-[1px] text-lg rounded-full tracking-tight leading-none">
                                          {tag}
                                    </Link>
                              ))}
                        </div>
                        <div>
                              <label htmlFor="Search"></label>
                              <input id="Search" className="px-4 w-full py-2 block border-[1px] rounded-xl outline-none " type="text" placeholder="Search for post" />
                        </div>
                  </div>
                  {/* All Posts */}
                  <section className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                  </section>
            </section>
      );
};

export default Posts;
