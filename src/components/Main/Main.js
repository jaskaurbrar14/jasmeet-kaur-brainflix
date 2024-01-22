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
        <h3 className="Main__channel-name"> By {videoDetail.channel}</h3>
        <p className="Main__channel-date">
          {new Date(videoDetail.timestamp).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </p>
      </div>
      <div className="Main__activity">
        <p className="Main__activity-views">
          <img
            className="Main__activity-views-img"
            src={views}
            alt="Views icon"
          />
          {videoDetail.views}
        </p>
        <p className="Main__activity-likes">
          <img
            className="Main__activity-likes-img"
            src={likes}
            alt="Likes icon"
          />
          {videoDetail.likes}
        </p>
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
        <label className="Main__form-label" htmlFor="comment">
          Join the conversation
        </label>{" "}
        <textarea
          className="Main__form-input"
          id="comment"
          type="text"
          name="comment"
          placeholder="Add a new comment"
          minLength="1"
          maxLength="200"
          rows="3"
          columns="32"
          required
        ></textarea>
        <button className="Main__form-button" type="submit">
          <img
            className="Main__form-button-img"
            src={add_comment}
            alt="Add comment button"
          />
          comment
        </button>
      </form>
      <hr className="divider" />
      <ul className="Main__comment">
        {videoDetail.comments.map((comment) => (
          <li key={comment.id}>
            <img
              className="Main__comment-img"
              src=" "
              alt="Image placeholder for users photo"
            ></img>
            <section className="Main__comment-info">
              <h3 className="Main__comment-info-heading"> {comment.name} </h3>
              <p className="Main__comment-info-date">
                {new Date(comment.timestamp).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </p>
              <p className="Main__comment-info-comment">{comment.comment}</p>
            </section>
            <hr className="divider" />
          </li>
        ))}
      </ul>
    </main>
  );
}
