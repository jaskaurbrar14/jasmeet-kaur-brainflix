import Main from "../Main/Main.js";
import Aside from "../Aside/Aside.js";
import Video from "../Video/Video.js";
import videoDetailsData from "../../Assets/Data/video-details.json";
import videosData from "../../Assets/Data/videos.json";
import { useState } from "react";
import "./Wrapper.scss";

export default function Wrapper() {
  const [videos, setVideos] = useState(videosData);
  const [videoDetail, setVideoDetail] = useState(videoDetailsData[0]);

  const selectedVideoDetail = (clickedId) => {
    const foundVideo = videoDetailsData.find((video) => clickedId === video.id);
    setVideoDetail(foundVideo);
  };
  const filteredVideos = videosData.filter(
    (video) => video.id !== videoDetail.id
  );
  return (
    <div>
      <Video videoDetail={videoDetail} />
      <Main videoDetail={videoDetail} />
      <Aside videos={filteredVideos} selectVideo={selectedVideoDetail} />
    </div>
  );
}
