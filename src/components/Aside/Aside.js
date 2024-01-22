import "./Aside.scss";

export default function Aside({ videos, selectVideo }) {
  return (
    <aside className="aside">
      <h3 className="aside__heading">Next videos</h3>
      <ul className="aside__list">
        {videos.map((video) => (
          <li
            className="aside__list-info"
            key={video.id}
            onClick={() => selectVideo(video.id)}
          >
            <img
              className="aside__list-info-img"
              width="200px"
              src={video.image}
              alt={video.title}
            ></img>
            <section>
              <h3 className="aside__list-info-heading"> {video.title} </h3>
              <p className="aside__list-info-channel">{video.channel}</p>
            </section>
          </li>
        ))}
      </ul>
    </aside>
  );
}
