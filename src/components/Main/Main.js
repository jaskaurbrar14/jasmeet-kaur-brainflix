import "./Main.scss";
import likes from "../../Assets/Icons/likes.svg";
import views from "../../Assets/Icons/views.svg";
import add_comment from "../../Assets/Icons/add_comment.svg";
import mohanMuruge from "../../Assets/Images/Mohan-muruge.jpg";

export default function Main({ videoDetail }) {
  return (
    <main className="Main">
      <h2 className="Main__heading">{videoDetail.title}</h2>
      <hr className="divider" />
      <div className="Main__channel">
        <div className="Main__channel-details">
          <h3 className="Main__channel-details-name">
            {" "}
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
      <h3 className="Main__sub-heading">
        {" "}
        {videoDetail.comments.length} Comments
      </h3>
      <form className="Main__form" action="">
        <img
          className="Main__form-img"
          src={mohanMuruge}
          alt="Profile picture of a user"
        />
        <div className="Main__form-input">
          <div className="Main__form-input-wrapper">
            <label className="Main__form-input-wrapper-label" htmlFor="comment">
              Join the conversation
            </label>{" "}
            <input
              className="Main__form-input-wrapper-input"
              id="comment"
              type="text"
              name="comment"
              placeholder="Add a new comment"
              minLength="1"
              maxLength="200"
              required
            ></input>
          </div>
          <button className="Main__form-input-button" type="submit">
            <img
              className="Main__form-input-button-img"
              src={add_comment}
              alt="Add comment button"
            />
            comment
          </button>
        </div>
      </form>
      <hr className="divider" />
      <ul className="Main__comment-list">
        {videoDetail.comments.map((comment) => (
          <li className="Main__comment" key={comment.id}>
            <img
              className="Main__comment-img"
              src=" "
              alt="Image placeholder for users photo"
            ></img>
            <section className="Main__comment-info">
              <div className="Main__comment-info-user">
                <h3 className="Main__comment-info-user-heading">
                  {" "}
                  {comment.name}{" "}
                </h3>
                <p className="Main__comment-info-user-date">
                  {new Date(comment.timestamp).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </p>
              </div>
              <p className="Main__comment-info-comment">{comment.comment}</p>
            </section>
          </li>
        ))}
      </ul>
      <hr className="divider" />
    </main>
  );
}
