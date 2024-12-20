import { useRef, useState, useEffect, useCallback } from 'react';
import styles from './enquiryForm.module.scss';
import { NormalInput, NormalSelect, NormalButton } from '@/components/common';
import { COURSE_LIST } from '@/services/constants';
import { liveClasssList } from '@/services/data/liveClasses';
import SimpleReactValidator from 'simple-react-validator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseEnquiryAction from '@/redux/action/courseEnquiry';
import { OtpVerifyModel } from './otpVerifyModel';
import { createDocument } from '@/api';
import { Toast } from '@/services/toast';

const EnquiryForm = ({
  fromPage = false,
  courseEnquiryCreate,
  courseEnquiryOtpVerify,
  liveClassId,
  isFromSyllabus = false,
  isSyllabusModal = false,
  liveClassDetail = {},
  resendOtpCourseEnquiry,
  oncloseSyllabusEnquiryFrom = () => {}
}) => {
  const validator = useRef(new SimpleReactValidator());
  const [isFormLoader, setIsFormLoader] = useState(false);
  const [isOtpModelOpen, setIsOtpModelOpen] = useState(false);
  const [courseEnquiryData, setCourseEnquiryData] = useState({});
  const [courseEnquiryFormObj, setCourseEnquiryFormObj] = useState({
    name: '',
    email: '',
    phone: '',
    liveClassId:  'd5eb2822-507c-11ee-be56-0242ac120002',
    status: 0,
    comments: ''
  });
  const [courseList, setCourseList] = useState([]);
  const [, forceUpdate] = useState(0);

  // useEffect(() => {
  //   setCourseEnquiryFormObj(prevState => ({
  //     ...prevState,
  //     liveClassId
  //   }));
  // }, [liveClassId]);

  useEffect(() => {
    const resList = liveClasssList.map(({ name, id }) => ({
      value: id,
      label: name
    }));
    setCourseList(resList);
  }, []);

  const handleInputChange = useCallback((event, selectName) => {
    if (!event?.target) {
      event.target = { ...event, name: selectName };
    }

    const { value, checked, type, name } = event.target;

    setCourseEnquiryFormObj(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  }, []);

  const handleFormSubmit = async () => {
    const formValid = validator.current.allValid();
    console.log('formValid----',validator.current)

    if (formValid) {
      validator.current.hideMessages();
      setIsFormLoader(true);
      try {
        const courseEnquiryReq = await createDocument('courseEnquiry', courseEnquiryFormObj);

        setIsFormLoader(false);
        console.log('courseEnquiryReq----',courseEnquiryReq)

        if (courseEnquiryReq.status) {
          Toast({ message: 'Thank you. Our team will contact you soon.' });
          setCourseEnquiryData(courseEnquiryReq); // Save response data if needed
          handleOtpVerifySuccess()
        }
      } catch (e) {
        setIsFormLoader(false);
        Toast({ message: 'Something went wrong. Please try again later.' });
        console.error(e);
      }
    } else {
      validator.current.showMessages();
      forceUpdate(1)
    }
  };

  const handleCloseOtpModel = () => setIsOtpModelOpen(prev => !prev);

  const handleOtpVerifySuccess = () => {
    // handleCloseOtpModel();
    debugger
    setCourseEnquiryData({});
    setCourseEnquiryFormObj({
      name: '',
      email: '',
      phone: '',
      liveClassId:  'd5eb2822-507c-11ee-be56-0242ac120002',
      status:0,
      comments: ''
    });

    if (isFromSyllabus) {
      oncloseSyllabusEnquiryFrom();
      handleDownloadSyllabus();
    }

  };

  const handleDownloadSyllabus = () => {
    console.log(liveClassDetail,'------liveClassDetail.syllabusUrl--');
    let link = document.createElement("a");
    link.download = liveClassDetail.name;
    link.href = liveClassDetail.syllabusUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // delete link;
  };

  return (
    <div className={`${!isFromSyllabus && 'mb-5'} ${styles.enquiryFormontainer}`}>
      <div className="card border-0 shadow">
        <div className="card-body">
          <div className="row">
            {!isFromSyllabus && (
              <div className="col-md-12">
                <h4 className={`mb-3 ${styles.title}`}>Start Your Career Now</h4>
              </div>
            )}
            <div className="col-md-12">
              <NormalInput
                title="Name"
                onChange={handleInputChange}
                name="name"
                value={courseEnquiryFormObj.name}
                errorMessage={validator.current.message('Name', courseEnquiryFormObj.name, 'required')}
              />
            </div>
            <div className="col-md-12">
              <NormalInput
                title="Email Address"
                onChange={handleInputChange}
                name="email"
                value={courseEnquiryFormObj.email}
                errorMessage={validator.current.message('Email', courseEnquiryFormObj.email, 'required|email')}
              />
            </div>
            <div className="col-md-12">
              <NormalInput
                title="Mobile Number"
                onChange={handleInputChange}
                name="phone"
                value={courseEnquiryFormObj.phone}
                errorMessage={validator.current.message('Phone', courseEnquiryFormObj.phone, 'required|phone')}
              />
            </div>

            {/* {fromPage !== 'liveClass' && (
              <div className="col-md-12 mb-2">
                <NormalSelect
                  title="Course Preference"
                  options={courseList}
                  onChange={(e) => handleInputChange(e, 'liveClassId')}
                  name="liveClassId"
                  value={courseList.find(({ value }) => value === courseEnquiryFormObj.liveClassId)}
                  errorMessage={validator.current.message('Course', courseEnquiryFormObj.liveClassId, 'required')}
                />
              </div>
            )} */}

            <div className="col-md-12">
              <NormalButton
                className="btn btn-primary px-4"
                type="submit"
                title="Submit"
                isLoader={isFormLoader}
                onClick={handleFormSubmit}
              />
            </div>
          </div>
        </div>
      </div>

      <OtpVerifyModel
        isOpen={isOtpModelOpen}
        liveClassDetail={liveClassDetail}
        isSyllabusModal={isSyllabusModal}
        courseEnquiryData={courseEnquiryData}
        otpVerifySucess={handleOtpVerifySuccess}
        courseEnquiryOtpVerify={courseEnquiryOtpVerify}
        resendOtpCourseEnquiry={resendOtpCourseEnquiry}
        courseEnquiryFormObj={courseEnquiryFormObj}
        toggle={handleCloseOtpModel}
      />
    </div>
  );
};

const mapStatesToProps = ({ courseEnquiry }) => ({
  isCourseEnquiryLoader: courseEnquiry.isCourseEnquiryLoader || false,
  isCourseEnquiryOtpVerifyLoader: courseEnquiry.isCourseEnquiryOtpVerifyLoader || false
});

const mapDispatchToProps = (dispatch) => bindActionCreators(courseEnquiryAction, dispatch);

export default connect(mapStatesToProps, mapDispatchToProps)(EnquiryForm);
