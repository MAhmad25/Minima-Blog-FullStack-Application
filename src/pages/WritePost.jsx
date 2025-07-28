const WritePost = () => {
      return (
            <section className="w-full py-10 lg:px-10 min-h-svh space-y-5 font-primary-text  text-[var(--color-bl)] bg-[var(--color-wht)]">
                  {/* Input Section for Post image */}
                  <h1 className="font-cool md:text-3xl text-center font-extrabold">Write a Post</h1>
                  <div className="flex space-y-10 justify-center items-center flex-col">
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
                        <section className="w-1/2">
                              <form className="grid  gap-3 place-content-center w-full h-full mt-5 grid-cols-2">
                                    <div className="col-span-2 ">
                                          {/* email */}
                                          <label htmlFor="title">
                                                Title <span className="text-red-500">*</span>
                                          </label>
                                          <input required id="title" className="border-[0.5px] rounded-xl outline-none  block px-4 w-full py-2" type="text" placeholder="Title here" />
                                    </div>
                                    <div className="col-span-2 ">
                                          {/* password */}
                                          <label htmlFor="password">
                                                Password <span className="text-red-500">*</span>
                                          </label>
                                          <input required minLength={8} id="password" className="border-[0.5px] rounded-xl outline-none  block px-4 w-full py-2" type="password" placeholder="Password" />
                                    </div>
                                    <button className="px-3 col-span-2 py-2 border-[1px] text-[var(--color-wht)] font-medium bg-[var(--color-bl)] rounded-xl cursor-pointer">Publish Post</button>
                              </form>
                        </section>
                  </div>
            </section>
      );
};

export default WritePost;
