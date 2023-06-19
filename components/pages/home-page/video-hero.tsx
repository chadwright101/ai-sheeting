interface Props {
  cssClasses?: string;
}

const VideoHero = ({ cssClasses }: Props) => {
  return (
    <section className={`${cssClasses}`}>
      <video
        autoPlay
        muted
        loop
        className="w-full h-[485px] tabletLarge:h-[600px] object-cover desktop:max-w-[1400px] mx-auto"
        poster="/projects/118/DJI_0467.jpg"
        playsInline
      >
        <source src="/videos/placeholder-video.mp4" />
      </video>
    </section>
  );
};

export default VideoHero;
