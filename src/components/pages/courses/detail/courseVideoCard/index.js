import styles from "./courseVideoCard.module.scss";
import { useEffect } from "react";
import Plyr from "plyr";
export const CourseVideoCard = ({courseDetails,sendSelectedTopic={}}) => {
  useEffect(() => {
    const player = new Plyr("#player");
  }, [sendSelectedTopic]);

  return (
    <div className={`${styles.courseVideoCardContiner}`}>
      <div className="row">
        <div className="col-md-12">
          <div class="plyr__video-embed" id="player">
            <iframe
              src={sendSelectedTopic?.videoUrl}
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
