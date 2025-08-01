import { Link, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Post } from "../components/index";
// import { useEffect } from "react";
// import documentService from "../app/DocService";

const ViewPost = () => {
      const { id } = useParams();
      console.log("View Post ID: ", id);
      // ! Its working perfectly fine it is returning the object
      // const getPostData = async () => {
      //       const post = await documentService.getSinglePost("688cc8a0003463fa90aa");
      //       console.log(post);
      // };
      // useEffect(() => {
      //       getPostData();
      // }, [id]);

      return (
            <section className="w-full px-5 font-primary-text min-h-svh text-[var(--color-bl)] bg-[var(--color-wht)]">
                  {/* Top Section */}
                  <section className="w-full py-5 flex flex-col lg:flex-row">
                        {/* Left Section */}
                        <div className="lg:w-3/4 xl:px-10 py-2 space-y-5">
                              <Link className="w-fit flex items-center justify-center   underline" to="/journals">
                                    <IoIosArrowRoundBack size="2rem" /> <p className="text-sm">Back to home</p>
                              </Link>
                              <p className="opacity-70 ">Design</p>
                              <h1 className="font-cool  md:w-1/2   font-black text-3xl sm:text-5xl  tracking-tight "> The Art of Minimalist Design in Modern Web Development</h1>
                              <p className="font-ppneue md:w-1/2 text-lg sm:text-2xl ">Exploring how less becomes more in the world of web design and why minimalism continues to dominate digital aesthetics.</p>
                              <h3 className="px-3 py-1  border-[1px] w-fit  rounded-full tracking-tight leading-none">Written by: Ahmad Latif</h3>
                        </div>
                        <div className="w-1/4 py-10 space-y-5">
                              <p className="text-sm uppercase text-[var(--color-bl)]/60 whitespace-nowrap">
                                    Date <br />
                                    <span className="text-[var(--color-bl)]">May 28, 2024</span>
                              </p>
                              <p className="text-sm uppercase text-[var(--color-bl)]/60 whitespace-nowrap">
                                    Reading time
                                    <br />
                                    <span className="text-[var(--color-bl)] lowercase ">8 min read</span>
                              </p>
                        </div>
                  </section>
                  {/* Actual Content Section */}
                  <section className="w-full border-t-[1px] mt-10 lg:px-20 border-[var(--color-bl)] py-5">
                        {/* Featured image */}
                        <div className="w-full lg:h-[30rem]  overflow-hidden rounded lg:bg-transparent bg-zinc-300">
                              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1740088531184-14279ff19095?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max" alt="Poster" />
                        </div>
                        {/* HTML Content goes here */}
                        <div className="py-16 lg:px-40">
                              <p className="text-lg leading-relaxed mb-6">In the ever-evolving landscape of web design, minimalism has emerged as more than just a trend—it's become a fundamental approach to creating effective digital experiences. The philosophy of "less is more" continues to influence how designers and developers craft interfaces that are not only visually appealing but also highly functional.</p>

                              <h2 className="font-serif text-2xl font-medium mt-10 mb-4">The Principles of Minimalist Design</h2>

                              <p className="leading-relaxed mb-6">At its core, minimalist design is about removing the unnecessary and focusing on what truly matters. This approach is characterized by:</p>

                              <ul className="list-disc pl-6 mb-6 space-y-2">
                                    <li>Clean, uncluttered layouts with ample white space</li>
                                    <li>Limited color palettes, often monochromatic with strategic accent colors</li>
                                    <li>Typography as a central design element</li>
                                    <li>Purposeful use of imagery and iconography</li>
                                    <li>Intuitive navigation and clear visual hierarchy</li>
                              </ul>

                              <p className="leading-relaxed mb-6">These principles work together to create interfaces that are not only aesthetically pleasing but also highly usable. By removing distractions, minimalist design helps users focus on content and tasks, leading to more effective and enjoyable experiences.</p>

                              <h2 className="font-serif text-2xl font-medium mt-10 mb-4">The Impact on User Experience</h2>

                              <p className="leading-relaxed mb-6">Minimalism isn't just about aesthetics—it has tangible benefits for user experience. Research has consistently shown that clean, simple interfaces are easier to navigate and understand. Users can find what they're looking for more quickly, complete tasks more efficiently, and experience less cognitive load.</p>

                              <blockquote className="border-l-2 pl-6 italic my-8">"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away." — Antoine de Saint-Exupéry</blockquote>

                              <p className="leading-relaxed mb-6">This quote perfectly encapsulates the minimalist approach to design. By carefully considering each element and removing anything that doesn't serve a clear purpose, designers can create interfaces that feel intuitive and effortless to use.</p>

                              <h2 className="font-serif text-2xl font-medium mt-10 mb-4">Technical Benefits of Minimalism</h2>

                              <p className="leading-relaxed mb-6">Beyond the aesthetic and user experience benefits, minimalist design also offers technical advantages. Simpler interfaces typically require less code, resulting in faster load times and better performance. This is particularly important in today's mobile-first world, where users expect websites to load quickly regardless of their device or connection speed.</p>

                              <p className="leading-relaxed mb-6">Additionally, minimalist designs are often more accessible. With clearer visual hierarchies and better contrast ratios, they tend to be more usable for people with visual impairments or cognitive disabilities.</p>

                              <h2 className="font-serif text-2xl font-medium mt-10 mb-4">Finding Balance</h2>

                              <p className="leading-relaxed mb-6">While the benefits of minimalism are clear, it's important to find the right balance. Stripping away too much can lead to interfaces that lack personality or fail to meet users' needs. The key is to be intentional about what you include and what you leave out.</p>

                              <p className="leading-relaxed mb-6">Successful minimalist design isn't about removing elements arbitrarily—it's about carefully considering each component and ensuring it serves a clear purpose. When done well, minimalism creates interfaces that feel both beautiful and functional, helping users accomplish their goals without unnecessary friction.</p>

                              <h2 className="font-serif text-2xl font-medium mt-10 mb-4">Conclusion</h2>

                              <p className="leading-relaxed mb-6">As we look to the future of web design, minimalism will continue to play an important role. By focusing on what truly matters and removing distractions, designers can create experiences that are not only visually appealing but also highly usable and accessible.</p>

                              <p className="leading-relaxed">In a world of increasing digital noise, the clarity and focus offered by minimalist design is more valuable than ever. By embracing these principles, we can create digital experiences that truly serve users' needs while standing the test of time.</p>
                        </div>
                        <h1 className="font-black text-5xl sm:text-7xl tracking-tight text-center  font-cool  my-5">Related Posts</h1>
                        <section className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 ">
                              <Post />
                              <Post />
                        </section>
                  </section>
            </section>
      );
};

export default ViewPost;
