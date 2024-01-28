import Main from "../../components/Main/Main.js";
import Aside from "../../components/Aside/Aside.js";
import Video from "../../components/Video/Video.js";
import videoDetailsData from "../../Assets/Data/video-details.json";
import videosData from "../../Assets/Data/videos.json";
import { useState } from "react";
import "./HomePage.scss";

export default function HomePage() {
  const [videos, setVideos] = useState(videosData);
  const [videoDetail, setVideoDetail] = useState(videoDetailsData[0]);

  const selectedVideoDetail = (clickedId) => {
    const foundVideo = videoDetailsData.find((Video) => clickedId === Video.id);
    setVideoDetail(foundVideo);
  };
  const filteredVideos = videosData.filter(
    (Video) => Video.id !== videoDetail.id
  );
  return (
    <div className="Main-page">
      <Video videoDetail={videoDetail} />
      <Main videoDetail={videoDetail} />
      <Aside videos={filteredVideos} selectVideo={selectedVideoDetail} />
    </div>
  );
}
