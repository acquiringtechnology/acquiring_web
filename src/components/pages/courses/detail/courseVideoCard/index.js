import styles from "./courseVideoCard.module.scss";
import { useEffect } from "react";
import Plyr from "plyr";
export const CourseVideoCard = () => {
  useEffect(() => {
    const player = new Plyr("#player");
  }, []);

  return (
    <div className={`${styles.courseVideoCardContiner}`}>
      <div className="row">
        <div className="col-md-12">
          <div class="plyr__video-embed" id="player">
            <iframe
              src="https://player.vimeo.com/video/76979871?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media"
              allowfullscreen
              allowtransparency
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
