import "./Video.scss";

export default function Video({ videoDetail }) {
  return (
    <video poster={videoDetail.image} controls>
      <source src={videoDetail.video} type="video" />
    </video>
  );
}
