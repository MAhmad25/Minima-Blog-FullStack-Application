import { useNavigate } from "react-router-dom";
import { Input, RTE, FormTagSelector } from "../components/index";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import docService from "../app/DocService";
import { setLoadingFalse, setLoadingTrue } from "../store/reducers/loadingSlice";
import { useEffect } from "react";
import { setNewPost, updatePost } from "../store/reducers/postsSlice";
import { useScrollTop } from "./index.js";

const WritePost = ({ editPost }) => {
      useScrollTop();
      document.title = "Minima | Write your post";
      const navigate = useNavigate();
      const userData = useSelector((state) => state.auth.userData);
      const dispatch = useDispatch();
      const {
            register,
            handleSubmit,
            control,
            reset,
            formState: { errors },
      } = useForm({
            defaultValues: {
                  title: "",
                  slug: "",
                  content: "",
                  tags: [],
                  coverImage: "",
                  readingTime: 1,
            },
      });
      useEffect(() => {
            if (editPost) {
                  reset({
                        title: editPost.title || "",
                        slug: editPost.slug || "",
                        content: editPost.content || "",
                        tags: editPost.tags || [],
                        coverImage: "",
                        readingTime: editPost.readingTime || 1,
                  });
            }
      }, [editPost, reset]);
      const formSubmittingToDb = async (data) => {
            dispatch(setLoadingTrue());
            if (editPost) {
                  const hasNewImage = data.coverImage && data.coverImage.length > 0 && data.coverImage[0];
                  const newFile = hasNewImage && (await docService.createFile(data.coverImage[0]));
                  if (newFile) {
                        await docService.deleteFile(editPost?.coverImage);
                  }
                  const updatedPost = await docService.updatePost(editPost.$id, { ...data, coverImage: newFile ? newFile.$id : editPost?.coverImage });
                  if (updatedPost) {
                        dispatch(updatePost({ id: editPost.$id, updatedPost }));
                        dispatch(setLoadingFalse());
                        navigate(`/journals/${updatedPost.$id}`);
                  }
            } else {
                  const newFile = data.coverImage[0] && (await docService.createFile(data.coverImage[0]));
                  if (newFile) {
                        const newPost = await docService.createPost({ ...data, coverImage: newFile.$id, author: userData.$id, authorName: userData.name });
                        if (newPost) {
                              dispatch(setNewPost(newPost));
                              dispatch(setLoadingFalse());
                              navigate(`/journals/${newPost.$id}`);
                        }
                  }
            }
      };
      return (
            <section className="w-full py-10 lg:px-10 min-h-svh  font-primary-text  text-[var(--color-bl)]">
                  {/* Input Section for Post image */}
                  <form onSubmit={handleSubmit(formSubmittingToDb)} className="space-y-5">
                        <h1 className="font-cool md:text-5xl text-3xl text-center font-extrabold">Write a Post</h1>
                        <div className="flex space-y-10  justify-center items-center flex-col">
                              <div onClick={() => document.getElementById("featured-image")?.click()} className="border-2  cursor-pointer mx-auto container border-dashed  border-border rounded-lg p-8 w-1/2 text-center">
                                    <div className="flex flex-col items-center gap-2">
                                          <p className="text-muted-foreground">Click to upload or drag and drop</p>
                                          <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (max. 2MB)</p>
                                          <Input {...register("coverImage", { required: editPost ? false : "Image is required" })} id="featured-image" type="file" star={true} className="hidden" accept="image/*" />
                                          <button className="cursor-pointer" type="button">
                                                Select Image
                                          </button>
                                    </div>
                              </div>
                              {errors.coverImage && <span className="text-red-500 text-xs sm:text-sm tracking-tighter leading-none">{errors.coverImage.message}</span>}
                              {/* user Input */}
                              <section className="w-full flex  overflow-hidden justify-center flex-col items-center">
                                    <div className="gap-3 w-full h-full mt-5 px-5 flex flex-col justify-center-safe items-center-safe">
                                          <div className="md:w-[27rem] w-full flex flex-col">
                                                <label htmlFor="headline">
                                                      Main Headline
                                                      <span className="text-red-500">*</span>
                                                </label>
                                                <textarea className="px-4 w-full py-2 resize-none min-h-12 [field-sizing:content] h-auto border-b-[1px] rounded outline-none" rows={1} {...register("title", { required: "Headline is required", minLength: { value: 10, message: "Atleast 10 characters" } })} label={"Main Headline"} type={"text"} placeholder={"It will attract the reader..."} />
                                                {errors.title && <span className="text-red-500 text-xs sm:text-sm tracking-tighter leading-none">{errors.title.message}</span>}
                                          </div>
                                          <div className="mt-10 w-[27rem]  gap-5 flex">
                                                <div>
                                                      <Input type="number" {...register("readingTime", { required: "Invalid Value: Must be a number", min: { value: 1, message: "Min 1 minute time" }, max: { value: 30, message: "Max 30 minutes time" }, valueAsNumber: true })} placeholder="Time in minutes" label={"Reading Time"} className="w-full" star={true} />
                                                      {errors.readingTime && <span className="text-red-500 text-xs sm:text-sm tracking-tight leading-none">{errors.readingTime.message}</span>}
                                                </div>
                                          </div>
                                          <div className=" w-full overflow-hidden md:w-[64rem]">
                                                <RTE name={"content"} label={"content"} defaultValues={editPost?.content} control={control} />
                                          </div>
                                          <FormTagSelector name="tags" control={control} label="Select Tags" error={errors.tags} required />
                                    </div>
                              </section>
                              <button className="px-3  col-span-2 py-2 border-[1px] text-[var(--color-wht)] font-medium bg-[var(--color-bl)] rounded-xl cursor-pointer">{editPost ? "Edit Post" : "Publish Post"}</button>
                        </div>
                  </form>
            </section>
      );
};

export default WritePost;
