import "./header.scss";
export default function header() {
  return (
    <header className="header">
      <a href="#" className="header-logo">
        <img
          className="header-logo__img"
          src="../src/assets/logo/brainflix-logo.svg"
          alt="Brainflix Logo"
        />
      </a>
      <div className="header-search">
        <img
          className="header-search__icon"
          src="../src/assets/icons/search.svg"
          alt="search icon"
        />
        <input
          className="header-search__input"
          type="text"
          placeholder="Search"
        />
      </div>
      <button className="header-button" type="button">
        <img
          className="header-button__img"
          src="../src/assets/icons/upload.svg"
          alt="upload button"
        />
        UPLOAD
      </button>
      <img
        className="header-profile"
        src="../src/assets/images/Mohan-muruge.jpg"
        alt="Mohan Muruge"
      />
      <button type="button" className="header-upload">
        <img
          className="header-upload__img"
          src="../src/assets/icons/upload.svg"
          alt="upload button"
        />
        UPLOAD
      </button>
    </header>
  );
}
