const GuiSection = () => {
  return (
    <section className="relative w-full overflow-hidden" id="features">
      <div className="container relative z-10 grid grid-cols-1 items-center gap-8 py-24 md:grid-cols-2 md:py-32 lg:py-40">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-500 to-sky-500 text-transparent bg-clip-text">
            Perfect GUI
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Enhance your Minecraft experience with our utility mod featuring a
            perfect GUI. Enjoy intuitive controls, seamless integration, and
            enhanced functionality right at your fingertips.
          </p>
        </div>

        <div className="relative z-20 group mb-[250px]">
          <img
            src="/images/layer1.png"
            width={800}
            height={600}
            alt="Layer 1"
            className="-skew-y-6 overflow-hidden rounded-b-xl object-cover object-center absolute inset-0 z-10 group-hover:blur-sm"
          />
          <img
            src="/images/layer2.png"
            width={800}
            height={600}
            alt="Layer 2"
            className="-skew-y-6 overflow-hidden rounded-b-xl object-cover object-center absolute inset-0 z-20 transition-transform duration-500 transform translate-x-0 translate-y-0 group-hover:translate-x-[20px] group-hover:translate-y-[20px]"
          />
          <img
            src="/images/layer3.png"
            width={800}
            height={600}
            alt="Layer 3"
            className="-skew-y-6 overflow-hidden rounded-b-xl object-cover object-center absolute inset-0 z-30 transition-transform duration-500 transform translate-x-0 translate-y-0 group-hover:translate-x-[-20px] group-hover:translate-y-[-20px]"
          />
        </div>
      </div>
    </section>
  );
};

export default GuiSection;
