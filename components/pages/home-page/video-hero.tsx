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
        poster="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/ai-sheeting/videos/ai-sheeting-video-poster.webp"
        playsInline
      >
        <source src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/ai-sheeting/videos/placeholder-video.mp4" />
      </video>
    </section>
  );
};

export default VideoHero;
