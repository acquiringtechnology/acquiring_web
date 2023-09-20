import styles from "./syllabusAction.module.scss";
import { NormalButton } from "@/components/common";
import { EnquiryForm } from "@/components/pages";
import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
export const SyllabusAction = ({liveClassDetail}) => {
  const [isSyllabusDownloadModal,setIsSyllabusDownloadModal] =useState(false);

  const handleCloseModel=()=>{
    setIsSyllabusDownloadModal(false)
  }
  
  return (
    <div className={`${styles.syllabusActionCard} mb-5`}>
      <div className="container">
        <div className="row">
          <div className="col-9 py-4">
            <h4>Syllabus</h4>
            <p>
              Get a peek through on the entire curriculum designed that ensures
              Job Placement Support
            </p>
          </div>
          <div className="col-3 py-4">
            <NormalButton
              className="btn-primary mt-4"
              title="Download syllabus"
              onClick={()=>setIsSyllabusDownloadModal(true)}
            />
          </div>
        </div>
      </div>

      <Modal isOpen={isSyllabusDownloadModal} toggle={() => setIsSyllabusDownloadModal(!isSyllabusDownloadModal)} className="modal-dialog-centered">
        <ModalHeader toggle={() => setIsSyllabusDownloadModal(!isSyllabusDownloadModal)}>Fill the below form to download the syllabus</ModalHeader>
        {/* <ModalBody> */}
        <EnquiryForm fromPage={"liveClass"} liveClassId={liveClassDetail?.id} isFromSyllabus={true} oncloseSyllabusEnquiryFrom={()=>handleCloseModel()}/>
        {/* </ModalBody> */}
      </Modal>
    </div>
  );
};
