import { NormalAccordion } from "@/components/common";
import styles from "./faq.module.scss";
const Faq = (props) => {
  const couseContent = [
    {
      title: "Do I get a certificate?",
      data: [
        {
          name: "Providing you complete the course and meet the prerequisites, yes.",
        },
      ],
    },
    {
      title: "Can I get in-person help from my teacher?",

      data: [
        {
          name: "Yes you do. We assist students in learning and adapting to current industry requirements, we allso provide 1 on 1 coaching",
        },
      ],
    },
    {
      title: "I have more questions. Who do I reach out to?",
      data: [
        {
          name: "You can reach us @ +91-9042771660",
        },
      ],
    },
    {
        title: "Is course X not available in language Y?",
        data: [
          {
            name: "Unfortunately, we do not offer courses in all regional languages, but we are making our best effort to do so.  My team will look into this and let me know what they find. In the future, it will be available.",
          },
        ],
      },
    {
        title: "What is your refund policy? / I want refund for my course.",
        data: [
          {
            name: "You can cancel any purchase you made with our courses within the first 7 days if you’re not satisfied. And the refund will be credited to your account in 3 business from the day we refund.",
          },
        ],
      },
  ];

  return (
    <div className={`container mt-5 mb-5`}>
      <div className={styles.faqContiner}>
        <div className="row">
          <div className="col-md-12 text-center mb-4">
            <h4 className={styles.faqTitle}>Frequently Asked Questions</h4>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mb-4">
            <NormalAccordion
              data={couseContent}
        
              className={styles.liveClassAccordion}
              titleClassName={styles.faqAccordionTitle}
              subTitleClassName={styles.liveClassAccordionSubTitle}
              renderItem={(item = []) => (
                <ul className="list-group list-group-flush">
                  {item?.data?.map((data, i) => (
                    <li key={i} className="list-group-item border-0">
                      {data.name}
                    </li>
                  ))}
                </ul>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
