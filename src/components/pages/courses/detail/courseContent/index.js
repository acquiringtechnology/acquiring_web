import { NormalAccordion } from "../../../../common";
import { CourseCard } from "@/components/pages";
import styles from "./courseDetailContent.module.scss";
import { useState } from "react";

export const CourseDetailContent = ({
  courseDetails = {},
  sendSelectedTopic,
}) => {
  const [selectTopicIndex, SetselectTopicIndex] = useState(0);
  const [selectSyllabusIndex, SetselectSyllabusIndex] = useState(0);

  

  const handleSelectTopic = (topicIndex, syllabusIndex) => {
    try {
      SetselectTopicIndex(topicIndex);
      SetselectSyllabusIndex(syllabusIndex);
      const selectedTopic =
        courseDetails?.syllabusList[syllabusIndex]?.topics[topicIndex];
      sendSelectedTopic(selectedTopic);
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <div className={`${styles.courseDetailContiner}`}>
      {/* <h4 className={`mb-lg-2 mb-3 ${styles.couseTitle}`}>Course content</h4> */}
      <div className="row">
        <div className="col-md-12">
          {/* <CourseCard courseData={{}}/> */}
          {courseDetails?.syllabusList?.map((syllabus, i) => (
            <div className="card mb-4" key={i}>
              <div className="card-header">
                <h4 className={`${styles.titleCourseList}`}>
                  {syllabus?.syllabusName}
                </h4>
                <label className={`${styles.subtitleCourseList}`}>
                  Each One Teach One - 1/{syllabus.topics.length}
                </label>
              </div>
              <ul className="list-group list-group-flush">
                {syllabus?.topics.map((topic, j) => (
                  <li
                    className={`list-group-item `}
                    onClick={() => handleSelectTopic(j, i)}
                    key={j}
                  >
                    <a href="#" className={`${styles.listGroupIteam} ${selectTopicIndex === j && selectSyllabusIndex === i && 'active' } `}>
                      {topic?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* <NormalAccordion
            data={couseContent}
            renderItem={(item = []) => (
              <ul className="list-group list-group-flush">
                {item?.data?.map((data, i) => (
                  <li key={i} className="list-group-item border-0">
                    {data.name}
                  </li>
                ))}
              </ul>
            )}
          /> */}
{courseDetails?.syllabusList.length ===0 && <h4>syllabus not yet added</h4> }
          
        </div>
      </div>
    </div>
  );
};
