const ModulesSection = ({ modules }: { modules: number }) => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="container relative z-10 grid grid-cols-1 items-center gap-8 py-24 md:grid-cols-2 md:py-32 lg:py-40">
        <div className="relative z-20 group">
          <div
            className="skew-y-6 overflow-hidden rounded-xl object-cover object-center absolute inset-0 z-10 bg-gray-200 text-center flex justify-center items-center relative bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-200 border border-gray w-[370px] h-[200px] md:w-[500px] md:h-[300px] lg:w-[600px] lg:h-[300px]"
          >
            <div className="flex flex-col justify-center items-center text-center ">
              <span className="text-8xl font-extrabold">
                <span className="bg-gradient-to-r from-purple-500 to-sky-500 text-transparent bg-clip-text">
                  {modules}
                </span>
                <span className="text-8xl bg-gradient-to-r from-purple-500 to-purple-600 text-transparent bg-clip-text">
                  +
                </span>
              </span>
              <h1 className="font-extrabold text-3xl text-gray-800 mt-4">
                Modules
              </h1>
              <div className="absolute inset-0 gradient-background"></div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-right text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-500 to-sky-500 text-transparent bg-clip-text">
            Plenty of modules
          </h1>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-right">
            ThunderHack is developed with convenience and efficiency in mind, we
            have an extensive suite of over {modules} modules to greatly enhance
            your Minecraft gameplay.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
