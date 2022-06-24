import netflixmobile from "../../assets/mobile-0819.jpg";
import boxshot from "../../assets/boxshot.png";
import kids from "../../assets/kids.png";
import "./styles.css";
import { useMemo } from "react";

interface ImageComponentProps {
  isForKids: boolean;
}

export default function ImageComponent({ isForKids }: ImageComponentProps) {
  const renderImage = useMemo(() => {
    return (
      <div className="image-content-animation">
        {isForKids ? (
          <img src={kids} alt="Stranger things download phone" />
        ) : (
          <>
            <img src={netflixmobile} alt="Stranger things download phone" />
            <div className="image-download-container">
              <img src={boxshot} alt="boxshot" />
              <div className="image-download-text">
                <strong>Stranger Things</strong>
                <span>Downloading...</span>
              </div>
              <div className="image-download-icon" />
            </div>
          </>
        )}
      </div>
    );
  }, [isForKids]);

  return <div className="image-animation_container">{renderImage}</div>;
}
