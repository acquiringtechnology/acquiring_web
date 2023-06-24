import styles from "./coursesCard.module.scss";
import { useRouter } from "next/router";
import { Normaltabs } from "@/components/common";
export const CourseCard = (props) => {
  let { isDetailBanner = false } = props;

  const router = useRouter();

  const tabDataList = [
    {
      label: "Personal",
      value: 0,
    },
    {
      label: "Team",
      value: 1,
    },
  ];

  const handleRouteDetail = (e, path) => {
    router.push("/courses/detail");
  };

  return (
    <div
      style={isDetailBanner ? { position: "absolute" } : {}}
      className={`card shadow border-0 ${styles.servicesCard}`}
    >
      <img
        class={`card-img-top ${styles.servicesCardImage}`}
        src="/img/coading.avif"
        alt="Card image cap"
      />
      <div className={`card-body ${styles.servicesCardBody}`}>
        {/* <img className='mb-3' src='https://certontech.com/assets/images/element/online.svg' /> */}
       
        <h4 className={styles.OurCoursesCardTitle}>UI/UX & DESIGN THINKING</h4>
        <p className={styles.OurCoursesCardSubText}>
          Our unparalleled group of professionals{" "}
        </p>
        <Normaltabs data={tabDataList} className="nav-fill" />
        <button
          onClick={handleRouteDetail}
          type="button"
          className={`btn btn-primary btn-lg btn-block w-100 ${styles.servicesCardButton}`}
        >
          View Detail
        </button>
      </div>
    </div>
  );
};
