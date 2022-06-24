import { ReactNode, useMemo } from "react";
import "./styles.css";

interface VideoComponentProps {
  image: string;
  video: string;
  isSmaller: boolean;
}

export default function VideoComponent({
  image,
  video,
  isSmaller,
}: VideoComponentProps) {
  return (
    <div className="right-content-tv-animation">
      <img src={image} className="right-content-tv-image" alt="TV" />
      <div
        className={`right-content-video-animation ${
          isSmaller ? "smaller" : ""
        }`}
      >
        <video className="right-content-video">
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
