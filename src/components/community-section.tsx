const CommunitySection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="container relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="mr-40 mt-20">
          <iframe
            src="https://discord.com/widget?id=1140266441082404924&theme=dark"
            width="350"
            height="500"
            frameBorder={0}
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            className="rounded-lg"
          ></iframe>
        </div>

        <div className="space-y-4">
          <h1 className="text-right text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-500 to-sky-500 text-transparent bg-clip-text">
            Active Community
          </h1>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-right">
            We have an active community on Discord where you can ask questions
            and get help with any issues you may have. Join us today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
