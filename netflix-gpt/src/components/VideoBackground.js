import { useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useMoviesTrailer";

const VideoBackground = ({movieId}) => {
    useMoviesTrailer(movieId);

  const videokey = useSelector((store) => store?.movies?.trailerVideo?.key);
  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + videokey + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
