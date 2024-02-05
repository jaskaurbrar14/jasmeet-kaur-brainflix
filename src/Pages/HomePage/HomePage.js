import Main from "../../components/Main/Main.js";
import Aside from "../../components/Aside/Aside.js";
import Video from "../../components/Video/Video.js";
import { useState, useEffect, createContext } from "react";
import "./HomePage.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function HomePage() {
  const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

  const [videos, setVideos] = useState([]);
  const [videoDetail, setVideoDetail] = useState({});

  const { videoId } = useParams();

  const getVideos = async () => {
    try {
      const response = await axios.get(`${REACT_APP_SERVER_URL}/videos`);
      setVideos(response.data);
    } catch (err) {
      console.error({ err });
    }
  };
  useEffect(() => {
    getVideos();
  }, []);

  const getVideoDetails = async (videoId) => {
    try {
      const response = await axios.get(
        `${REACT_APP_SERVER_URL}/videos/${videoId}`
      );
      setVideoDetail(response.data);
    } catch (err) {
      console.error({ err });
    }
  };
  useEffect(() => {
    if (videoId) {
      getVideoDetails(videoId);
    } else if (!videoId && videos.length > 0) {
      getVideoDetails(videos[0].id);
    }
  }, [videoId, videos]);

  return (
    <>
      <Video videoDetail={videoDetail} />
      <div className="Main-page">
        <Main videoDetail={videoDetail} />
        <hr className="Main-page__divider" />
        <Aside videos={videos} videoDetail={videoDetail} />
      </div>
    </>
  );
}
