import styles from "./coursesCard.module.scss";
import { useRouter } from "next/router";
import { EXIST_LOCAL_STORAGE } from "@/services/constants";
import { setStorage } from "@/services/helperFunctions";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const CourseCard = (props) => {
  let { isDetailBanner = false, courseData } = props;

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

  const handleRouteDetail = (data) => {
    setStorage(EXIST_LOCAL_STORAGE.COURSE_DETAIL, data);
    router.push("/courses/detail");
  };

  return (
    <div
      style={isDetailBanner ? { position: "absolute" } : {}}
      className={`card shadow border-0 ${styles.servicesCard}`}
    >
      <LazyLoadImage
        alt={courseData?.name}
        // height={image.height}
        src={courseData?.img} // use normal <img> attributes as props
        class={`card-img-top ${styles.servicesCardImage}`}
      />
      {/* <img
       
        src="/img/coading.avif"
        alt="Card image cap"
      /> */}
      <div className={`card-body ${styles.servicesCardBody}`}>
        {/* <img className='mb-3' src='https://certontech.com/assets/images/element/online.svg' /> */}

        <h4 className={styles.OurCoursesCardTitle}>{courseData.name}</h4>
        <p className={styles.OurCoursesCardSubText}>{courseData?.desc}</p>
        {/* <Normaltabs data={tabDataList} className="nav-fill" /> */}
        <button
          onClick={() => handleRouteDetail(courseData)}
          type="button"
          className={`btn btn-primary btn-lg btn-block w-100 ${styles.servicesCardButton}`}
        >
          View Detail
        </button>
      </div>
    </div>
  );
};
