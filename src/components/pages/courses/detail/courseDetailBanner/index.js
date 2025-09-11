/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import styles from "./courseDetailBanner.module.scss";
import { CourseCard, EnquiryForm } from "@/components/pages";
import { NormalButton } from "@/components/common";
import Swal from "sweetalert2";
import { useEffect } from "react";

export const CourseDetailBanner = ({ fromPage = "", liveClassDetail = null }) => {
  const router = useRouter();

  const handleRedirectQuiz = () => {
    router.push("/quiztest");
  };

  useEffect(() => {
    const deadline = new Date("2025-04-28");
    const today = new Date();

    if (today <= deadline) {
      Swal.fire({
        title: "🎓 From Zero to Hero Full Stack Web Developer",
        html: `
          🗓️ <b>Don't miss out! Application Deadline: 28th April</b><br>
          Secure your spot and join our exciting live class with lifetime support!
        `,
        icon: "info",
        confirmButtonText: "Continue",
      });
    }
  }, []);

  return (
    <div className={` ${styles.courseDetailContiner}`}>
      <div className="grid-overlay"></div>
      <div className="container">
        <div className="row mb-4">
          {/* Left Column */}
          <div className="col-lg-8 col-md-6 col-12">
            <h1 className={`mb-lg-2 mb-3 ${styles.couseTitle}`}>
              {liveClassDetail?.name}
            </h1>

            <p className={styles.mentorFrom}>
              Mentorship from Industry Experts at{" "}
              <img width={75} src="/Disney_logo_white.png" alt="Disney Logo" />,{" "}
              <img width={75} src="/adobe-Logo.png" alt="Adobe Logo" /> & more!
            </p>

            <p className={styles.mentorFrom}>
              Build a successful career in Full Stack Development with real-time
              project experience and Zen-Class placement guidance — now available in தமிழ்!
            </p>

            {fromPage !== "liveClass" && (
              <NormalButton title="Start Quiz!" onClick={handleRedirectQuiz} />
            )}
          </div>

          {/* Right Column */}
          <div className="col-lg-4 col-md-6 col-12 d-md-block d-none">
            {fromPage !== "liveClass" ? (
              <CourseCard isDetailBanner />
            ) : (
              <EnquiryForm
                liveClassDetail={liveClassDetail}
                isFromSyllabus
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
