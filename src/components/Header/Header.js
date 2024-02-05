import "./Header.scss";
import brainflixLogo from "../../Assets/Logo/BrainFlix-logo.svg";
import searchIcon from "../../Assets/Icons/search.svg";
import upload from "../../Assets/Icons/upload.svg";
import mohanMuruge from "../../Assets/Images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <img
          className="header-logo__img"
          src={brainflixLogo}
          alt="Brainflix Logo"
        />
      </Link>
      <div className="header-wrapper">
        <div className="header-wrapper__search">
          <img
            className="header-wrapper__search-icon"
            src={searchIcon}
            alt="search icon"
          />
          <input
            className="header-wrapper__search-input"
            type="text"
            placeholder="Search"
            name="search"
          />
        </div>
        <img
          className="header-wrapper__profile"
          src={mohanMuruge}
          alt="Mohan Muruge"
        />
        <Link to="/video-upload-page" className="header-wrapper__upload">
          <button type="button" className="header-wrapper__upload-btn">
            <img
              className="header-wrapper__upload-btn-img"
              src={upload}
              alt="upload button"
            />
            Upload
          </button>
        </Link>
      </div>
    </header>
  );
}
