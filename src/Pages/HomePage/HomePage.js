import Main from "../../components/Main/Main.js";
import Aside from "../../components/Aside/Aside.js";
import Video from "../../components/Video/Video.js";
// import videoDetailsData from "../../Data/video-details.json";
// import videosData from "../../Data/videos.json";
import { useState, useEffect } from "react";
import "./HomePage.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function HomePage() {
  const [videos, setVideos] = useState([]);
  const [videoDetail, setVideoDetail] = useState({});

  const apiUrl = "https://project-2-api.herokuapp.com";
  const apiKey = "c67354cc-9322-4ecb-bd91-70c26505c98c";

  const { videoId } = useParams();

  const getVideos = async () => {
    try {
      const response = await axios.get(`${apiUrl}/videos?api_key=${apiKey}`);
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
        `${apiUrl}/videos/${videoId}?api_key=${apiKey}`
      );
      setVideoDetail(response.data);
    } catch (err) {
      console.error({ err });
    }
  };
  useEffect(() => {
    if (videoId) {
      getVideoDetails(videoId);
    } else if (videos.length > 0) {
      getVideoDetails(videos[0].id);
    }
  }, [videoId, videos]);

  return (
    <div className="Main-page">
      <Video videoDetail={videoDetail} />
      <Main videoDetail={videoDetail} />
      <Aside videos={videos} videoDetail={videoDetail} />
    </div>
  );
}
