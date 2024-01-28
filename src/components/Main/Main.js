import "./Main.scss";
import likes from "../../Assets/Icons/likes.svg";
import views from "../../Assets/Icons/views.svg";
import Comments from "../Comments/Comments.js";

export default function Main({ videoDetail }) {
  return (
    <main className="Main">
      <h1 className="Main__heading">{videoDetail.title}</h1>
      <hr className="divider" />
      <div className="Main__channel">
        <div className="Main__channel-details">
          <h3 className="Main__channel-details-name">
            By {videoDetail.channel}
          </h3>
          <p className="Main__channel-details-date">
            {new Date(videoDetail.timestamp).toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </p>
        </div>
        <div className="Main__channel-activity">
          <p className="Main__channel-activity-views">
            <img
              className="Main__channel-activity-views-img"
              src={views}
              alt="Views icon"
            />
            {videoDetail.views}
          </p>
          <p className="Main__channel-activity-likes">
            <img
              className="Main__channel-activity-likes-img"
              src={likes}
              alt="Likes icon"
            />
            {videoDetail.likes}
          </p>
        </div>
      </div>
      <hr className="divider" />
      <p className="Main__description">{videoDetail.description}</p>
      {/* <Comments videoDetail={videoDetail} /> */}
    </main>
  );
}
