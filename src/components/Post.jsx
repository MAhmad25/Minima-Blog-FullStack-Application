import { PiDiamondFill } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";

const Post = () => {
      return (
            <div className="cursor-pointer h-fit  space-y-4 shrink-0 text-[var(--color-bl)] px-2 py-5">
                  {/* Featured Image */}
                  <div className="w-full h-1/2 overflow-hidden rounded bg-zinc-300">
                        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1740088531184-14279ff19095?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max" alt="Poster" />
                  </div>
                  {/* Author Name and Date of post */}
                  <div className="w-full flex gap-4 items-center">
                        <h2 className="leading-none tracking-tight">Ahmad Latif</h2>
                        <PiDiamondFill />
                        <h2 className="leading-none tracking-tight">26 July 2025</h2>
                  </div>
                  {/* Heading and  */}
                  <h1 className="font-cool text-3xl sm:text-2xl hover:underline transition-all font-extrabold">The Art of Minimalist Design in Modern Web Development</h1>
                  <p className="text-sm font-light">Exploring how less becomes more in the world of web design and why minimalism continues to dominate digital aesthetics....</p>
                  <div className="flex justify-between w-full">
                        {/* Tags */}
                        <div className="flex-wrap flex gap-2">
                              <div className="px-3 py-1 border-[1px] rounded-full tracking-tight leading-none">Design</div>
                              <div className="px-3 py-1 border-[1px] rounded-full tracking-tight leading-none">Technology</div>
                              <div className="px-3 py-1 border-[1px] rounded-full tracking-tight leading-none">Development</div>
                        </div>
                        <span>
                              <GoArrowUpRight size="1.3rem" />
                        </span>
                  </div>
            </div>
      );
};

export default Post;
