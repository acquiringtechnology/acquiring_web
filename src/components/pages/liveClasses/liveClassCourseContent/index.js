import { NormalAccordion } from "@/components/common";

import styles from "./liveClassCourseContent.module.scss";

export const LiveClassCourseContent = ({liveClassDetail}) => {
  const couseContent = [
    {
      title: "Front-End Development",
      subTitle:
        "Get a deeper understanding of Client Side Programming or in other words the front end development by developing highly responsive web pages across languages.",
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
      title: "Back-End Development",
      subTitle:
        "Learn the industry leading ways to design back end development with least response time, which in turn helps in the fast loading of web applications. You’ll learn to connect databases with servers.",
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
      title: "Build your Portfolio",
      subTitle:
      "Build your Full stack developer Portfolio and demonstrate your knowledge by developing an end-to-end Full-stack Application.",
      data: [
        {
          name: "Portfolio of 5+ Projects",
        },
        {
          name: "Build your GitHub profile.",
        },
       
      ],
    },
  ];

  return (
    <div className={`${styles.courseDetailContiner}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-6 col-12">
            <h4 className={`mb-lg-2 mb-3 ${styles.couseTitle}`}>
              Course content
            </h4>
            <div className="row">
              <div className="col-md-12">

                <NormalAccordion
                  data={liveClassDetail?.courseContent}
                  className={styles.liveClassAccordion}
                  titleClassName={styles.liveClassAccordionTitle}
                  subTitleClassName={styles.liveClassAccordionSubTitle}
                  renderItem={(item = []) => (
                    <ul className="list-group list-group-flush">
                      {item?.syllabus?.map((data, i) => (
                        <li key={i} className="list-group-item border-0">
                          {data}
                        </li>
                      ))}
                    </ul>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-12">
          {/* <EnquiryForm isDetailBanner={true} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
