import "./Aside.scss";

export default function Aside({ videos, selectVideo }) {
  return (
    <aside className="aside">
      <h3 className="aside__heading">Next videos</h3>
      <ul className="aside__list">
        {videos.map((video) => (
          <li
            className="aside__list-video"
            key={video.id}
            onClick={() => selectVideo(video.id)}
          >
            <img
              className="aside__list-video-img"
              src={video.image}
              alt={video.title}
            ></img>
            <section className="aside__list-video-info">
              <h2 className="aside__list-video-info-heading">{video.title}</h2>
              <p className="aside__list-video-info-channel">{video.channel}</p>
            </section>
          </li>
        ))}
      </ul>
    </aside>
  );
}
