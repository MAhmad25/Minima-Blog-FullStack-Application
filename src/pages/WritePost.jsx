import { Input } from "../components/index";
import RealTimeEditor from "../components/RTE";

const WritePost = () => {
      return (
            <section className="w-full py-10 lg:px-10 min-h-svh space-y-5 font-primary-text  text-[var(--color-bl)] bg-[var(--color-wht)]">
                  {/* Input Section for Post image */}
                  <h1 className="font-cool md:text-3xl text-center font-extrabold">Write a Post</h1>
                  <div className="flex space-y-10  justify-center items-center flex-col">
                        <div className="border-2 mx-auto container border-dashed  border-border rounded-lg p-8 w-1/2 text-center">
                              <div className="flex flex-col items-center gap-2">
                                    <p className="text-muted-foreground">Click to upload or drag and drop</p>
                                    <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (max. 2MB)</p>
                                    <input id="featured-image" type="file" accept="image/*" className="hidden" />
                                    <button type="button" onClick={() => document.getElementById("featured-image")?.click()}>
                                          Select Image
                                    </button>
                              </div>
                        </div>
                        {/* user Input */}
                        <section className="w-full flex justify-center items-center">
                              <form className="gap-3 w-full h-full mt-5 flex flex-col justify-center-safe items-center-safe">
                                    <div className="w-96">
                                          <Input label={"Main Headline"} type={"text"} placeholder={"e.g: The Art of Doing..."} star={true} minLength={5} />
                                    </div>
                                    <RealTimeEditor />
                              </form>
                        </section>
                  </div>
            </section>
      );
};

export default WritePost;
