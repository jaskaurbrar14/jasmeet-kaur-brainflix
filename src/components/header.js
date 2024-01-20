import "./Header.scss";
import brainflixLogo from "../../src/Assets/Logo/BrainFlix-logo.svg";
import searchIcon from "../../src/Assets/Icons/search.svg";
import upload from "../../src/Assets/Icons/upload.svg";
import mohanMuruge from "../../src/Assets/Images/Mohan-muruge.jpg";

export default function Header() {
  return (
    <header className="header">
      <a href="#" className="header-logo">
        <img
          className="header-logo__img"
          src={brainflixLogo}
          alt="Brainflix Logo"
        />
      </a>
      <div className="header-search">
        <img
          className="header-search__icon"
          src={searchIcon}
          alt="search icon"
        />
        <input
          className="header-search__input"
          type="text"
          placeholder="Search"
        />
      </div>
      <button className="header-button" type="button">
        <img className="header-button__img" src={upload} alt="upload button" />
        UPLOAD
      </button>
      <img className="header-profile" src={mohanMuruge} alt="Mohan Muruge" />
      <button type="button" className="header-upload">
        <img className="header-upload__img" src={upload} alt="upload button" />
        UPLOAD
      </button>
    </header>
  );
}
