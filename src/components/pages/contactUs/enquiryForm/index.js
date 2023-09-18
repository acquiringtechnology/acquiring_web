const { useRef, useState, useEffect } = require("react");
import styles from "./enquiryForm.module.scss";
import { NormalInput, NormalSelect, NormalButton } from "@/components/common";
import { COURSE_LIST } from "@/services/constants";
import { liveClasssList } from "@/services/data/liveClasses";
import SimpleReactValidator from "simple-react-validator";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseEnquiryAction from "@/redux/action/courseEnquiry";
import {OtpVerifyModel} from './otpVerifyModel'

const EnquiryForm = ({ fromPage = false, courseEnquiryCreate,courseEnquiryOtpVerify }) => {
  const validator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState(0);
  const [isFormLoder, setIsFormLoder] = useState(false);
  const [isOtpModelOpen, setIsOtpModelOpen] = useState(false);
  const [courseEnquiryData, setCourseEnquiryData] = useState({});
  const [courseEnquiryFormObj, setCourseEnquiryFormObj] = useState({
    name: "JayaShree",
    email: "azxy@gmail.com",
    phone: "9943631660",
    liveClassId: "",
    status: 0,
    comments: "",
  });

  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
  
    const resList = liveClasssList.map(({ name, id }) => ({
      value: id,
      label: name,
    }));
    setCourseList(resList);
  }, []);

  const handleInputChange = (event,selectName) => {
    if (!event?.target) {
      event.target = {
        ...event,
        name:selectName
      };
    }
    console.log("event----------->", event);
    const {
      target: { value, checked, type, name },
    } = event;
    console.log("event----------->", name,value);
    setCourseEnquiryFormObj({
      ...courseEnquiryFormObj,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFormSubmit = async () => {
    try {
      
      const formValid = validator.current.allValid();
      console.log('courseEnquiryFormObj---------->',courseEnquiryFormObj)
      if (formValid) {
        
        setIsFormLoder(true);
       
        const courseEnquiryReq = await courseEnquiryCreate(courseEnquiryFormObj);
        console.log('fom')
        setIsFormLoder(false);
        const { status,data:{courseEnquiryData }} = courseEnquiryReq;
       
        if (status) {
          console.log('courseEnquiryData---------->',courseEnquiryData)
          setIsOtpModelOpen(true);
          setCourseEnquiryData(courseEnquiryData)
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (e) {
      // setIsFormLoder(false);
      console.log(e)
    }
  };

  const handleCloseOtpModel = () => {
    setIsOtpModelOpen(!isOtpModelOpen);
  };

  const handlOtpVerifySucess=()=>{
    handleCloseOtpModel();
    setCourseEnquiryData({})
    setCourseEnquiryFormObj({
      name: "",
      email: "",
      phone: "",
      liveClassId: "",
      status: 1,
      comments: "",
    })

  }
 

  return (
    <div className={` mb-5 ${styles.enquiryFormontainer}`}>
      <div className="card border-0 shadow">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <h4 className={`mb-3 ${styles.title}`}>Start Your Career Now</h4>
            </div>
            <div className="col-md-12">
              <NormalInput
                title="Name"
                onChange={handleInputChange}
                name="name"
                value={courseEnquiryFormObj.name}
                errorMessage={validator.current.message(
                  "Name",
                  courseEnquiryFormObj.name,
                  "required"
                )}
              />
            </div>
            <div className="col-md-12">
              <NormalInput
                title="Email Address"
                onChange={handleInputChange}
                name="email"
                value={courseEnquiryFormObj.email}
                errorMessage={validator.current.message(
                  "Email",
                  courseEnquiryFormObj.email,
                  "required|email"
                )}
              />
            </div>
            <div className="col-md-12">
              <NormalInput
                title="Mobile Number"
                onChange={handleInputChange}
                name="phone"
                errorMessage={validator.current.message(
                  "Phone",
                  courseEnquiryFormObj.phone,
                  "required|phone"
                )}
                value={courseEnquiryFormObj.phone}
              />
            </div>
            {fromPage !== "liveClass" && (
              <div className="col-md-12 mb-2">
                <NormalSelect
                  title="Course Preference"
                  options={courseList}
                  onChange={(e)=>handleInputChange(e,'liveClassId')}
                  name="liveClassId"
                  value={
                    courseList?.find(
                      ({ value }) => value === courseEnquiryFormObj.liveClassId
                    )
                  }
                  errorMessage={validator.current.message(
                    "Course",
                    courseEnquiryFormObj.liveClassId,
                    "required"
                  )}
                />
              </div>
            )}
            <div className="col-md-12">
              {/* <button type="button" className="btn btn-primary">Submit</button> */}
              <NormalButton
                className="btn btn-primary px-4"
                type="submit"
                title="Submit"
                isLoader={isFormLoder}
                onClick={handleFormSubmit}
              />
            </div>
          </div>
        </div>

        
      </div>

      <OtpVerifyModel isOpen={isOtpModelOpen} courseEnquiryData={courseEnquiryData} otpVerifySucess={handlOtpVerifySucess} courseEnquiryOtpVerify={courseEnquiryOtpVerify} toggle={handleCloseOtpModel}/>
    </div>
  );
};

const mapStatesToProps = ({
  courseEnquiry: { isCourseEnquiryLoader = false ,isCourseEnquiryOtpVerifyLoader=false},
}) => {
  return { isCourseEnquiryLoader ,isCourseEnquiryOtpVerifyLoader};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      ...courseEnquiryAction,
    },
    dispatch
  );
};
export default connect(mapStatesToProps, mapDispatchToProps)(EnquiryForm);
