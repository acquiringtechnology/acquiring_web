// .module.scss

import styles from "./OurCoursesCard.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { NormalButton } from "../../../common";
import { CourseCard } from "../../../pages";
import { useRouter } from "next/router";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseAction from '@/redux/action/course';
import * as syllabusAction from '@/redux/action/syllabus';
import { useEffect,useState } from 'react';

const OurCoursesCard = (props) => {
  const router = useRouter();

  let { isSwiper = true, isViewAllBtn = true,getAllCoures,courseList=[] } = props;
  const [allCourseList, setAllCourseList] = useState([...courseList]);
  const [allSyllabusList, setSyllabusList] = useState([]);

  useEffect(() => {
    // console.log('props-------------->',props)
    if(courseList?.length ===0 ){
        handleGetCouseList();
    }
  
  }, []);

  const handleGetCouseList = async () => {
    try {
      const resCourseList = await getAllCoures();
      const { data, status } = resCourseList;
      console.log("data---------->", data);
      if (status) {
        setAllCourseList(data);
      }
    } catch (e) {
      console.log(e);
    }
  };



  return (
    <div
      className={`${
        !isSwiper ? "container" : "container-fluid "
      } container-fluid mt-5 mb-5`}
    >
      <div className={styles.OurCoursesCardContiner}>
        {
          <div className="row">
            <div className="col-md-12 text-center mb-4">
              <h4 className={styles.ourServicesTitle}>Our Online Courses</h4>
              <p className={styles.ourServicesSubTitle}>
                We are focused on understanding client’s business first, and
                dedicated to solve their business problems.
              </p>
            </div>
          </div>
        }
        {isSwiper ? (
       allCourseList.length > 0 ?  <Swiper
            spaceBetween={30}
            slidesPerView={4.5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {allCourseList?.map((data, i) => (
              <SwiperSlide key={i}>
                <h4>{ allCourseList.length}</h4>
                <CourseCard />
              </SwiperSlide>
            ))}
          </Swiper>:<h4 className="text-center">No Course yet</h4>
        ) : (
          allCourseList.length > 0 ?   <div className="row">
            {allCourseList?.map((data, i) => (
              <div className="col-md-4 mb-3" key={i}>
                <CourseCard courseData={data} />
              </div>
            ))}
          </div>:<h4 className="text-center">No Course yet</h4>
        )}

        {isViewAllBtn && allCourseList.length >0 && (
          <div className="row">
            <div className="col-md-12 text-center mb-4">
              <NormalButton
                onClick={() => router.push("/courses")}
                className={`btn-primary ${styles.viewMoreBtn}`}
                title={
                  <span>
                    View All Courses{" "}
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </span>
                }
              />
            </div>
          </div>
        )}
      </div>
    </div>
    // </div>
  );
};

const mapStatesToProps = ({
  course: {
    isCourseListLoader = false,
    courseList = [],
    isCourseCreateLoader = false,
    isCourseDeleteLoader = false,
  },
  syllabus: { isSyllabusListLoader = false, syllabusList = [] },
}) => {
  return {
    isCourseListLoader,
    courseList,
    isSyllabusListLoader,
    syllabusList,
    isCourseCreateLoader,
    isCourseDeleteLoader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      ...courseAction,
      ...syllabusAction,
    },
    dispatch
  );
};

export default connect(mapStatesToProps, mapDispatchToProps)(OurCoursesCard);
