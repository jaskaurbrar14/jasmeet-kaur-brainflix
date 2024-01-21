import "./Aside.scss";

export default function Aside({ videos, selectVideo }) {
  return (
    <aside>
      <h3>Next videos</h3>
      <ul>
        {videos.map((video) => (
          <li key={video.id} onClick={() => selectVideo(video.id)}>
            <img src={video.image} alt={video.title}></img>
            <section>
              <h3> {video.title} </h3>
              <p>{video.channel}</p>
            </section>
          </li>
        ))}
      </ul>
    </aside>
  );
}
