/* eslint-disable @next/next/no-img-element */
import styles from "./liveClassesCard.module.scss";
import { NormalButton } from "@/components/common";
import { useRouter } from "next/router";
import { liveClasssList } from "@/services/data/liveClasses";
import { useEffect } from "react";
export const LiveClassesCard = (props) => {
  const router = useRouter();

  useEffect(() => {
    const colors = [
      "#FFECD6",
      "#CDE7FF",
      "#FFFBD6",
      "#CDF3FF",
      "#CDDBFF",
      "#CFF0CC",
      "#DEE5DD",
      "#A4E78D",
    ];
    const listItems = document.querySelectorAll("#courseTopic li");

    // listItems.forEach(item => {
    //   const randomColor = colors[Math.floor(Math.random() * colors.length)];
    //   item.style.backgroundColor = randomColor;
    // });
    listItems.forEach((item, i) => {
      // const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomColor = colors[i];
      item.style.backgroundColor = randomColor; // The background will have opacity 1 by default.
    });
  }, []);
  return (
    <section>
      <div className="container mb-5">
        <div className={styles.liveClassesCardContiner}>
          <h4 className={`text-center ${styles.liveClassTitle}`}>
            OUR PROGRAM
          </h4>
          <h4 className={`text-center`}>
            Discover Our Premier, Top-Rated Learning Program
          </h4>

          {/*  */}
          <div className="row mt-5 justify-content-center">
            <div className="col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <img
                        src="./img/fullstack-icon.png"
                        alt="fullstack-icon"
                        className={styles.fullstackIconImg}
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5
                        className={`card-title w-100 text-truncate ${styles.liveClassCardTitle}`}
                      >
                        Full Stack Web Development Bootcamp
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex  align-items-center">
                    <p className={`${styles.liveClassCardSubTitle}`}>
                      Industry-led Full Stack Training designed to help you
                      transition to the next phase of your career with a proven
                      track record of success.
                    </p>
                  </div>
                  <hr />
                  <ul
                    className="mt-4 d-flex flex-wrap gap-2 nav mb-4"
                    id="courseTopic"
                  >
                    <li className="p-2 fw-semibold px-4 rounded bg-opacity-50">
                      HTML
                    </li>
                    <li className="p-2 fw-semibold px-4 rounded bg-opacity-50">
                      CSS
                    </li>
                    <li className="p-2 fw-semibold px-4 rounded bg-opacity-50">
                      JavaScript
                    </li>
                    <li className="p-2 fw-semibold px-4 rounded bg-opacity-50">
                      Bootstrap
                    </li>
                    <li className="p-2 fw-semibold px-4 rounded bg-opacity-50">
                      ReactJS
                    </li>
                    <li className="p-2 fw-semibold px-4 rounded bg-opacity-50">
                      NodeJS
                    </li>
                    <li className="p-2 fw-semibold px-4 rounded bg-opacity-50">
                      ExpressJS
                    </li>
                    <li className="p-2 fw-semibold px-4 rounded bg-opacity-50">
                      MongoDB
                    </li>
                  </ul>

                  <ul className="nav gap-4 mb-4 d-flex align-items-center">
                    <li className="nav-item text-muted">
                      <i className="fa-solid fa-chalkboard-user"></i> Online
                    </li>
                    <li className="nav-item text-muted">
                    <i className="fa-regular fa-clock"></i> 3 Months
                    </li>
                    <li className="nav-item text-muted">
                    <i className="fa-solid fa-briefcase"></i> Placement Assistance
                    </li>
                    <li className="nav-item text-muted">
                    <i className="fa-regular fa-address-card"></i> Live Mentor Support
                    </li>
                    <li className="nav-item text-muted ms-auto">
                    <NormalButton
                      title="KNOW MORE"
                      onClick={() => router.push(`/liveClasses/detail/d5eb2822-507c-11ee-be56-0242ac120002`)}
                    />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* {liveClasssList.map((data, i) => (
              <div className="col-md-3 col-sm-6 mb-4" key={i}>
                <div className={`card ${styles.liveClassCard}`}>
                  <img
                    src={data.img}
                    className="card-img-top"
                    alt="courseName"
                  />
                  <div className="card-body">
                    <h5
                      title={data.name}
                      className={`card-title w-100 text-truncate ${styles.liveClassCardTitle}`}
                    >
                      {data.name}
                    </h5>
                    <p className={`card-text ${styles.liveClassCardDisc}`}>
                      {data.dis}
                    </p>
                    <div className="d-grid gap-2">
                      <NormalButton
                        title="KNOW MORE"
                        onClick={() =>
                          router.push(`/liveClasses/detail/${data.id}`)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};
