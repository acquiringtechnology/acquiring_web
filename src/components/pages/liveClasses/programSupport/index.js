import styles from "./bootcampOverView.module.scss";
import {NormalButton} from "@/components/common";
import { useState } from "react";
import { EnquiryForm } from "@/components/pages";
import { Modal } from "reactstrap"
export function ProgramSupport({ liveClassDetail }) {
    const [isSyllabusDownloadModal, setIsSyllabusDownloadModal] = useState(false);

  const handleCloseModel = () => {
    setIsSyllabusDownloadModal(false);
  };
  const bootcampOverViewLis = [
    {
      img: "/icons/interview.png",
      title: "1-on-1 Mock Interviews with Industry Experts",
    },
    {
      img: "https://www.errormakesclever.com/_next/static/media/live.e8bca7be.png",
      title: "Live online classes with 1-year access to recorded sessions.",
    },
    {
      img: "https://www.errormakesclever.com/_next/static/media/career.21c8f454.png",
      title: "Placement Assistance Includes, Resume LinkedIn & Naukri.",
    },
  ];

  return (
    <div className={`container mb-5 ${styles.bootcampOverViewContainer}`}>
      <div className="row">
        <div className="col-12">
          <h2 className={`mb-4 ${styles.bootcampOverTitle}`}>Bootcamp Overview</h2>
        </div>
        <div className="col-md-7 col-sm-12">
          {bootcampOverViewLis.map((item, index) => (
            <div
              className={`card mb-3 ${styles.bootcampOverViewCard}`}
              key={index}
            >
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <img
                      className={styles.bootcampOverViewCardImg}
                      src={item.img}
                      alt={item.title}
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h4 className={styles.bootcampOverViewCardTitle}>
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-5 col-sm-12">
          <div className="card mb-3">
            <div className="card-body">
              <ul class="list-group list-group-borderless border-0">
                <li class="list-group-item px-0 border-0 d-flex justify-content-between">
                  <span class="h6 fw-light mb-0">
                    <i class="fas fa-fw fa-clock text-primary me-2"></i>Duration
                  </span>
                  <span>90 {`Day's`}</span>
                </li>
                <li class="list-group-item px-0 border-0 d-flex justify-content-between">
                  <span class="h6 fw-light mb-0">
                    <i class="fas fa-fw fa-signal text-primary me-2"></i>Format
                  </span>
                  <span>Online</span>
                </li>
                <li class="list-group-item px-0 border-0 d-flex justify-content-between">
                  <span class="h6 fw-light mb-0">
                    <i class="fas fa-fw fa-user text-primary me-2"></i>Mentors
                  </span>
                  <span>1X1 Mentor Support</span>
                </li>
                <li class="list-group-item px-0  border-0 d-flex justify-content-between">
                  <span class="h6 fw-light mb-0">
                    <i class="fas fa-fw fa-tv text-primary me-2"></i>Course
                  </span>
                  <span >
                    Live Online Classes with Access to Recorded Sessions
                  </span>
                </li>
                 <li class="list-group-item px-0  border-0 d-flex justify-content-between">
                 <NormalButton className='w-100 btn-outline-primary ' onClick={()=>setIsSyllabusDownloadModal(true)} title='Download Syllabus' />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

       <Modal
        isOpen={isSyllabusDownloadModal}
        toggle={() => setIsSyllabusDownloadModal(!isSyllabusDownloadModal)}
        className="modal-dialog-centered"
      >
        <EnquiryForm
          liveClassDetail={liveClassDetail}
          isSyllabusModal={true}
          fromPage={"liveClass"}
          liveClassId={liveClassDetail?.id}
          isFromSyllabus={true}
          oncloseSyllabusEnquiryFrom={() => handleCloseModel()}
        />
      </Modal>
    </div>
  );
}
