import "./Comments.scss";
import add_comment from "../../Assets/Icons/add_comment.svg";
import mohanMuruge from "../../Assets/Images/Mohan-muruge.jpg";

export default function Comments({ videoDetail }) {
  const commentDetail = videoDetail?.comments || [];
  return (
    <>
      <h3 className="Comments__sub-heading">{commentDetail.length} Comments</h3>
      <form className="Comments__form" action="">
        <img
          className="Comments__form-img"
          src={mohanMuruge}
          alt="Profile of a user"
        />
        <div className="Comments__form-input">
          <div className="Comments__form-input-wrapper">
            <label
              className="Comments__form-input-wrapper-label"
              htmlFor="comment"
            >
              Join the conversation
            </label>
            <input
              className="Comments__form-input-wrapper-input"
              id="comment"
              type="text"
              name="comment"
              placeholder="Add a new comment"
              minLength="1"
              maxLength="200"
              required
            ></input>
          </div>
          <button className="Comments__form-input-button" type="submit">
            <img
              className="Comments__form-input-button-img"
              src={add_comment}
              alt="Add comment button"
            />
            comment
          </button>
        </div>
      </form>
      <hr className="divider" />
      <ul className="Comments__comment-list">
        {commentDetail.map((comment) => {
          return (
            <li className="Comments__comment" key={comment.id}>
              <article className="Comments__comment-wrapper">
                {" "}
                <img
                  className="Comments__comment-wrapper-img"
                  src={comment.image}
                  alt="placeholder for users"
                ></img>
                <section className="Comments__comment-wrapper-info">
                  <div className="Comments__comment-wrapper-info-user">
                    <h3 className="Comments__comment-wrapper-info-user-heading">
                      {" "}
                      {comment.name}{" "}
                    </h3>
                    <p className="Comments__comment-wrapper-info-user-date">
                      {new Date(comment.timestamp).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })}
                    </p>
                  </div>
                  <p className="Comments__comment-wrapper-info-comment">
                    {comment.comment}
                  </p>
                </section>
              </article>
              <hr className="Comments__comment-divider" />
            </li>
          );
        })}
      </ul>
    </>
  );
}
