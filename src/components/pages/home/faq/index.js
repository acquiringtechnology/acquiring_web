import { NormalAccordion } from "@/components/common";
import styles from "./faq.module.scss";
import { useState } from "react";
const Faq = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  // ✅ MUST be inside component
  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
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
          name: "You can cancel any purchase you made with our courses within the first 7 days if you’re not satisfied. And the refund will be credited to your account in 7 business days from the day we refund.",
        },
      ],
    },
  ];

  return (
    <section className={styles.faq_wrapper}>
      <div className="container py-5">
        {/* ✅ TOP TITLE ROW */}

        <div className="row">
          <div className="col-md-12 mb-5 text-start">
            <div className={styles.titleWrapper}>
              <span className={styles.line}></span>
              <p className={styles.topTitle}>GOT QUESTIONS?</p>
            </div>
          </div>
        </div>

        {/* ✅ MAIN CONTENT ROW */}
        <div className="row align-items-start">
          {/* LEFT SIDE */}
          <div className="col-lg-4 mb-4">
            <div className={styles.left}>
              <h2 className={styles.heading}>
                Asked & <br />
                <span>Answered</span>
              </h2>

              <p className={styles.desc}>
                Everything you need to know before enrolling. Can't find your
                answer? Reach out directly.
              </p>

              <button className={styles.primaryBtn}>✉ Ask Us Directly</button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-8">
            <div className={styles.faqBox}>
              <NormalAccordion
                data={couseContent}
                className={styles.faqItem}
                titleClassName={styles.faqTitleRow}
                subTitleClassName={styles.subTitle}
                renderItem={(item, index) => (
                  <div className={styles.answer}>
                    {item.data?.map((d, i) => (
                      <p key={i}>{d.name}</p>
                    ))}
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
