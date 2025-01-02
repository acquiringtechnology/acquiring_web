/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import StarRatings from "react-star-ratings";
import styles from "./courseDetailBanner.module.scss";
import { CourseCard, EnquiryForm } from "@/components/pages";
import { NormalButton } from "@/components/common";
import Swal from "sweetalert2";
import { useEffect } from "react";
export const CourseDetailBanner = ({
  fromPage = "",
  liveClassDetail = null,
}) => {
  const router = useRouter();

  const handleRedirectQuiz = () => {
    router.push("/quiztest");
  };

  useEffect(() => {
    Swal.fire({
      title: "🎓 100% Free Live Class!",
      html: `🗓️ <b>Don't miss out! Application Deadline: 15th January</b>
Secure your spot and join our exciting live class, completely FREE! Limited time only!`,
      icon: "info",
      confirmButtonText: "Continue",
    });
  }, []);

  return (
    <div className={` mb-5  ${styles.courseDetailContiner}`}>
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8 col-md-6 col-12">
            <h4 className={`mb-lg-2 mb-3 ${styles.couseTitle}`}>
              {liveClassDetail?.name}
            </h4>
            {liveClassDetail?.dis}
            <p>
              Live Classes available in <strong>English, தமிழ், ಕನ್ನಡ</strong>{" "}
            </p>
            {/* <div className="mb-4">
              <span className={`me-2 ${styles.ratingText}`}>4.6</span>
              <StarRatings
                rating={4}
                starRatedColor="#e59819"
                // changeRating={()}
                numberOfStars={5}
                name="rating"
                starWidthAndHeight={15}
                starDimension={15}
                starSpacing={1}
                className={styles.starRating}
              />
              <span className={`ms-2 ${styles.overRatingPerCount}`}>
                (12.5 rating)
              </span>
            </div> */}
            {fromPage !== "liveClass" && (
              <NormalButton title="Start Quiz!" onClick={handleRedirectQuiz} />
            )}

            {fromPage === "liveClass" && (
              <div className={`row mb-2 mt-4 ${styles.programOverViewSection}`}>
                <div className="col-md-12">
                  <div className={`row mb-2`}>
                    <h4 className={`${styles.programOverViewTitle}`}>
                      Program Overview
                    </h4>
                  </div>
                </div>
                <div className="col-md-4">
                  <h4 className={styles.programOverViewDetailTitle}>
                    Duration
                  </h4>
                  <label className={styles.programOverViewDetailValue}>
                    {liveClassDetail?.prgOverView?.dur}
                  </label>
                </div>
                <div className="col-md-4">
                  <h4 className={styles.programOverViewDetailTitle}>Format</h4>
                  <label className={styles.programOverViewDetailValue}>
                    {liveClassDetail?.prgOverView?.classType}
                  </label>
                </div>
                {/* <div className="col-md-3">
                <h4 className={styles.programOverViewDetailTitle}>
                  Hiring Partners
                </h4>
                <label className={styles.programOverViewDetailValue}>
                  100+ companies
                </label>
              </div> */}
                <div className="col-md-4">
                  <h4 className={styles.programOverViewDetailTitle}>
                    Max CTC upto
                  </h4>
                  <label className={styles.programOverViewDetailValue}>
                    {liveClassDetail?.prgOverView?.maxCtc}
                  </label>
                </div>
              </div>
            )}
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-md-block d-none">
            {fromPage !== "liveClass" ? (
              <CourseCard isDetailBanner={true} />
            ) : (
              <EnquiryForm
                liveClassDetail={liveClassDetail}
                isFromSyllabus={true}
                liveClassId={liveClassDetail?.id}
                fromPage={fromPage}
              />
            )}
          </div>
        </div>
      </div>

    </div>
  );
};
