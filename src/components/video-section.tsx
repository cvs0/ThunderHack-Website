const VideoSection = () => {
  return (
    <section>
      <div className="video-iframe-div relative">
        <iframe
          className="video-iframe absolute top-0 left-0 w-full h-full"
          src="https://www.youtube-nocookie.com/embed/rEgLGFQY-mg?autoplay=1&loop=1&playlist=rEgLGFQY-mg&controls=0&showinfo=0&rel=0&mute=1&vq=hd1080"
          allowFullScreen
        ></iframe>
        <div className="video-gradient absolute top-0 left-0 w-full h-full pointer-events-none"></div>
      </div>
    </section>
  );
};

export default VideoSection;
