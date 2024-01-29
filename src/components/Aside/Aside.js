import "./Aside.scss";
import { Link } from "react-router-dom";

export default function Aside({ videos, videoDetail }) {
  const filteredVideos = videos.filter((Video) => Video.id !== videoDetail.id);

  return (
    <aside className="aside">
      <h3 className="aside__heading">Next videos</h3>
      <ul className="aside__list">
        {filteredVideos.map((video) => (
          <li key={video.id}>
            <Link className="aside__list-video" to={`videos/${video.id}`}>
              <img
                className="aside__list-video-img"
                src={video.image}
                alt={video.title}
              ></img>
              <section className="aside__list-video-info">
                <h2 className="aside__list-video-info-heading">
                  {video.title}
                </h2>
                <p className="aside__list-video-info-channel">
                  {video.channel}
                </p>
              </section>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
