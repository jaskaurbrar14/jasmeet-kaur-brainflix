import "./Video.scss";

export default function Video({ videoDetail }) {
  return (
    <section className="Video-section">
      <video
        className="Video-section__video"
        poster={videoDetail.image}
        controls
      >
        <source src={videoDetail.video} type="video" />
      </video>
    </section>
  );
}
