import "./UploadPage.scss";

export default function UploadPage() {
  return (
    <main className="UploadPage">
      <h1 className="UploadPage__heading">Upload Video</h1>
      <hr className="UploadPage__divider" />
      <form className="UploadPage__form" action="submit">
        <div className="UploadPage__form-Video">
          <p className="UploadPage__form-Video-label">Video Thumbnail</p>
          <img
            className="UploadPage__form-Video-thumbnail"
            src="../../Assets/Images/Upload-video-preview.jpg"
            alt="Video upload thumbnail"
          ></img>
        </div>

        <div className="UploadPage__form-title">
          <label className="UploadPage__form-title-label" htmlFor="video title">
            Title your video
          </label>
          <input
            className="UploadPage__form-title-input"
            id="video title"
            type="text"
            name="video title"
            placeholder="Add a title to your video"
            minLength="1"
            maxLength="100"
            required
          ></input>
        </div>
        <div className="UploadPage__form-description">
          <label
            className="UploadPage__form-description-label"
            htmlFor="video description"
          >
            Add a video description
          </label>
          <input
            className="UploadPage__form-description-input"
            id="video description"
            type="text"
            name="video description"
            placeholder="Add a description to your video"
            minLength="1"
            maxLength="200"
            required
          ></input>
        </div>
        <hr className="UploadPage__divider" />
        <div className="UploadPage__form-cta">
          <button className="UploadPage__form-cta-cancel">Cancel</button>
          <button className="UploadPage__form-cta-publish">
            <img
              className="UploadPage__form-cta-publish-image"
              src="../../Assets/Icons/publish.svg"
              alt="Publish button"
            />
            Publish
          </button>
        </div>
      </form>
    </main>
  );
}
