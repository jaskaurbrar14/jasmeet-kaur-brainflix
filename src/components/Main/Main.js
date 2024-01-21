import "./Main.scss";
import likes from "../../Assets/Icons/likes.svg";
import views from "../../Assets/Icons/views.svg";
import add_comment from "../../Assets/Icons/add_comment.svg";
import mohanMuruge from "../../Assets/Images/Mohan-muruge.jpg";

export default function Main({ videoDetail }) {
  return (
    <main>
      <h2>{videoDetail.title}</h2>
      <hr />
      <div>
        <h3> By {videoDetail.channel}</h3>
        <p>
          {new Date(videoDetail.timestamp).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </p>
      </div>
      <div>
        <p>
          <img src={views} alt="Views icon" />
          {videoDetail.views}
        </p>
        <p>
          <img src={likes} alt="Likes icon" />
          {videoDetail.likes}
        </p>
      </div>
      <hr />
      <p>{videoDetail.description}</p>
      <h3> {videoDetail.comments.length} Comments</h3>
      <form action="">
        <img src={mohanMuruge} alt="Profile picture of a user" />
        <label htmlFor="comment">Join the conversation</label>{" "}
        <textarea
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
        <button type="submit">
          <img className="" src={add_comment} alt="Add comment button" />
          comment
        </button>
      </form>
      <hr />
      <ul>
        {videoDetail.comments.map((comment) => (
          <li key={comment.id}>
            <image src=" " alt="Image placeholder for users photo"></image>
            <section>
              <h3> {comment.name} </h3>
              <p>
                {new Date(comment.timestamp).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </p>
              <p>{comment.comment}</p>
            </section>
            <hr />
          </li>
        ))}
      </ul>
    </main>
  );
}
