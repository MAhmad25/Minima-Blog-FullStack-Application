import { useNavigate } from "react-router-dom";
import { Input, RTE } from "../components/index";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import docService from "../app/DocService";
const WritePost = ({ editPost }) => {
      const navigate = useNavigate();
      const userData = useSelector((state) => state.auth.userData);
      const {
            register,
            handleSubmit,
            control,
            formState: { errors },
            getValues,
      } = useForm({ defaultValues: { title: editPost?.title || "", slug: editPost?.slug || "", content: editPost?.content || "<h1>Start writing your content</h1>", tags: editPost?.tags || [], coverImage: editPost?.coverImage || "", status: editPost?.status || "active", readingTime: editPost?.readingTime || Number(1) } });
      const formSubmittingToDb = async (data) => {
            console.log(data);
            if (editPost) {
                  const newFile = data.coverImage[0] && (await docService.createFile(data.coverImage[0]));
                  console.log(newFile);
                  if (newFile) {
                        await docService.deleteFile(editPost?.coverImage);
                  }
                  const updatedPost = await docService.updatePost(editPost.$id, { ...data, coverImage: newFile ? newFile.$id : undefined });
                  if (updatedPost) navigate(`/journals/${updatedPost.$id}`);
            } else {
                  const newFile = data.coverImage[0] && (await docService.createFile(data.coverImage[0]));
                  if (newFile) {
                        const newPost = await docService.createPost({ ...data, coverImage: newFile.$id, author: userData.$id });
                        if (newPost) navigate(`/journals/${newPost.$id}`);
                  }
            }
      };
      return (
            <section className="w-full py-10 lg:px-10 min-h-svh  font-primary-text  text-[var(--color-bl)] bg-[var(--color-wht)]">
                  {/* Input Section for Post image */}
                  <form onSubmit={handleSubmit(formSubmittingToDb)} className="space-y-5">
                        <h1 className="font-cool md:text-3xl text-center font-extrabold">Write a Post</h1>
                        <div className="flex space-y-10  justify-center items-center flex-col">
                              <div className="border-2 mx-auto container border-dashed  border-border rounded-lg p-8 w-1/2 text-center">
                                    <div className="flex flex-col items-center gap-2">
                                          <p className="text-muted-foreground">Click to upload or drag and drop</p>
                                          <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (max. 2MB)</p>
                                          <Input {...register("coverImage", { required: "Image is required" })} id="featured-image" type="file" star={true} className="hidden" accept="image/*" />
                                          <button type="button" onClick={() => document.getElementById("featured-image")?.click()}>
                                                Select Image
                                          </button>
                                    </div>
                              </div>
                              {errors.coverImage && <span className="text-red-500 text-xs sm:text-sm tracking-tighter leading-none">{errors.coverImage.message}</span>}

                              {/* user Input */}
                              <section className="w-full flex justify-center flex-col items-center">
                                    <div className="gap-3 w-full h-full mt-5 flex flex-col justify-center-safe items-center-safe">
                                          <div className="w-[27rem]">
                                                <Input {...register("title", { required: "Headline is required", minLength: { value: 10, message: "Atleast 10 characters" } })} label={"Main Headline"} type={"text"} placeholder={"The Art of Doing..."} star={true} />
                                                {errors.title && <span className="text-red-500 text-xs sm:text-sm tracking-tighter leading-none">{errors.title.message}</span>}
                                          </div>
                                          <RTE label={"content"} defaultValues={getValues("content")} control={control} />
                                    </div>
                                    <div className="w-full  mt-10 gap-5 flex">
                                          <div>
                                                <Input {...register("status")} label={"status"} type="text" />
                                          </div>
                                          <div>
                                                <Input {...register("readingTime", { required: "Reading time is required", min: { value: 1, message: "Min 1 minute time" }, max: { value: 30, message: "Max 30 minutes time" } })} placeholder="reading time" label={"Reading Time"} type={"number"} />
                                                {errors.readingTime && <span className="text-red-500 text-xs sm:text-sm tracking-tighter leading-none">{errors.readingTime.message}</span>}
                                          </div>
                                    </div>
                              </section>
                              <button className="px-3  col-span-2 py-2 border-[1px] text-[var(--color-wht)] font-medium bg-[var(--color-bl)] rounded-xl cursor-pointer">Publish Post</button>
                        </div>
                  </form>
            </section>
      );
};

export default WritePost;
