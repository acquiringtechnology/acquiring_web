import { NormalAccordion } from "../../../../common";
import styles from "./courseDetailContent.module.scss";

export const CourseDetailContent = () => {
  const couseContent = [
    {
      title: "HTML & CSS",
      data: [
        {
          name: "An item",
        },
        {
          name: "A second item",
        },
        {
          name: "A third item 33",
        },
      ],
    },
    {
      title: "HTML & CSS",
      data: [
        {
          name: "An item",
        },
        {
          name: "A second item",
        },
        {
          name: "A third item 33",
        },
      ],
    },
  ];

  return (
    <div className={`${styles.courseDetailContiner}`}>
      {/* <h4 className={`mb-lg-2 mb-3 ${styles.couseTitle}`}>Course content</h4> */}
      <div className="row">
        <div className="col-md-12">
          <div className="card" >
            <div className="card-header">
                <h4 className={`${styles.titleCourseList}`}>Featured</h4>
                <label className={`${styles.subtitleCourseList}`}>Each One Teach One - 1/20</label>
            </div>
            <ul className="list-group list-group-flush">
              <li className={`list-group-item `}>
                <a href="#"  className={`${styles.listGroupIteam} active`}>Cras justo odio</a>
              </li>
              <li className={`list-group-item `}>
                <a href="#"  className={`${styles.listGroupIteam}`}>Cras justo odio</a>
              </li>
              <li className={`list-group-item `}>
                <a href="#" className={`${styles.listGroupIteam}`}>Cras justo odio</a>
              </li>
            </ul>
          </div>
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
        </div>
      </div>
    </div>
  );
};
