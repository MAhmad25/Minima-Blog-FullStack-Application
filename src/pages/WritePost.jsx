import { useNavigate } from "react-router-dom";
import { Input, RTE } from "../components/index";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const WritePost = ({ editPost }) => {
      const navigate = useNavigate();
      const userData = useSelector((state) => state.auth.userData);
      const { register, handleSubmit, control, setValue, getValues } = useForm({ defaultValues: { title: "" } });
      const formSubmittingToDb = (data) => {};
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
                                          <Input {...register("file", { required: "Image is required" })} id="featured-image" type="file" className="hidden" accept="image/*" />
                                          <button type="button" onClick={() => document.getElementById("featured-image")?.click()}>
                                                Select Image
                                          </button>
                                    </div>
                              </div>
                              {/* user Input */}
                              <section className="w-full flex justify-center items-center">
                                    <div className="gap-3 w-full h-full mt-5 flex flex-col justify-center-safe items-center-safe">
                                          <div className="w-[27rem]">
                                                <Input {...register("title", { required: "Headline is required", minLength: { value: 10, message: "Atleast 10 characters" } })} label={"Main Headline"} type={"text"} placeholder={"The Art of Doing..."} star={true} />
                                          </div>
                                          <RTE label={"content"} control={control} />
                                    </div>
                              </section>
                              <button className="px-3  col-span-2 py-2 border-[1px] text-[var(--color-wht)] font-medium bg-[var(--color-bl)] rounded-xl cursor-pointer">Publish Post</button>;
                        </div>
                  </form>
            </section>
      );
};

export default WritePost;
