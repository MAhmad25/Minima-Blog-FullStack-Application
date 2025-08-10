import RTELoader from "./RTELoader";

const PostLoader = () => {
      return (
            <section className="w-full h-full fixed z-30 top-0 left-0 bg-[var(--color-wht)]/60 cursor-none grid place-content-center">
                  <RTELoader />
                  <h1>Loading</h1>
            </section>
      );
};

export default PostLoader;
