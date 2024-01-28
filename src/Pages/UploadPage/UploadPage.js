import "./UploadPage.scss";
import videoThumbnail from "../../Assets/Images/Upload-video-preview.jpg";
import publish from "../../Assets/Icons/publish.svg";
import { useNavigate } from "react-router-dom";

export default function UploadPage() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your upload was successful! You're being redirected to Main page");
    navigate("/");
  };
  return (
    <main className="UploadPage">
      <h1 className="UploadPage__heading">Upload Video</h1>
      <hr className="UploadPage__divider" />
      <form
        className="UploadPage__form"
        action="submit"
        onSubmit={handleSubmit}
      >
        <div className="UploadPage__form-Video">
          <p className="UploadPage__form-Video-label">Video Thumbnail</p>
          <img
            className="UploadPage__form-Video-thumbnail"
            src={videoThumbnail}
            alt="Video upload thumbnail"
          ></img>
        </div>
        <div className="UploadPage__form-text">
          <div className="UploadPage__form-text-title">
            <label
              className="UploadPage__form-text-title-label"
              htmlFor="video title"
            >
              Title your video
            </label>
            <input
              className="UploadPage__form-text-title-input"
              id="video title"
              type="text"
              name="video title"
              placeholder="Add a title to your video"
              minLength="1"
              maxLength="100"
              required
            ></input>
          </div>
          <div className="UploadPage__form-text-description">
            <label
              className="UploadPage__form-text-description-label"
              htmlFor="video description"
            >
              Add a video description
            </label>
            <textarea
              className="UploadPage__form-text-description-input"
              id="video description"
              type="text"
              name="video description"
              placeholder="Add a description to your video"
              minLength="1"
              maxLength="200"
              rows="3"
              required
            ></textarea>
          </div>{" "}
        </div>
        <hr className="UploadPage__form-divider" />
        <div className="UploadPage__form-cta">
          <button className="UploadPage__form-cta-cancel">Cancel</button>
          <button className="UploadPage__form-cta-publish" type="submit">
            <img
              className="UploadPage__form-cta-publish-image"
              src={publish}
              alt="Publish button"
            />
            Publish
          </button>
          <button className="UploadPage__form-cta-cancel1">Cancel</button>
        </div>
      </form>
    </main>
  );
}
