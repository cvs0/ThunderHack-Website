const VideoSection = () => {
  return (
    <section className="relative pb-[56.25%] h-0 overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube-nocookie.com/embed/rEgLGFQY-mg?autoplay=1&loop=1&playlist=rEgLGFQY-mg&controls=0&showinfo=0&rel=0&mute=1&vq=hd1080"
        allowFullScreen
      ></iframe>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-t from-black"></div>
    </section>
  );
};

export default VideoSection;
