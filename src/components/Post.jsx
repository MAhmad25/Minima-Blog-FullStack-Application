import { PiDiamondFill } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import htmlToText from "../config/CovertHTMLToText";
import useFileView from "../hooks/useFileView";
import dateConversion from "../utils/dateConversion";
const Post = ({ postData }) => {
      console.log(postData);
      const { url } = useFileView(postData);
      return (
            <Link to={`/journals/${postData?.$id}`}>
                  <div className="cursor-pointer h-fit bg-red-400 space-y-4 shrink-0 text-[var(--color-bl)] px-2 py-5">
                        {/* Featured Image */}
                        <div className="w-full min-h-1/2 overflow-hidden rounded bg-zinc-300">
                              {url ? (
                                    <img
                                          className="w-full h-full object-cover"
                                          src={url} // Use the dynamic
                                          alt="Cover Image"
                                    />
                              ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-500">Loading image...</div>
                              )}
                        </div>
                        {/* Author Name and Date of post */}
                        <div className="w-full  flex gap-4 items-center">
                              <h2 className="leading-none tracking-tight">{postData?.authorName}</h2>
                              <PiDiamondFill />
                              <h2 className="leading-none tracking-tight">{dateConversion(postData?.$createdAt)}</h2>
                        </div>
                        {/* Heading and  */}
                        <h1 className="font-cool text-3xl sm:text-2xl hover:underline transition-all font-extrabold">{postData?.title}</h1>
                        <p className="text-sm font-light">{htmlToText(postData?.content).slice(0, 150)}....</p>
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
            </Link>
      );
};

export default Post;
