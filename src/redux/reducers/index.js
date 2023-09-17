import { combineReducers } from "redux";
import { authenticateReducer } from "./authenticate";
import { syllabusreducer } from "./syllabus";
import { coursereducer } from "./course";
import { courseEnquiryReducer } from "./courseEnquiry";

const reducers = combineReducers({
  authenticate: authenticateReducer,
  syllabus: syllabusreducer,
  course: coursereducer,
  courseEnquiry: courseEnquiryReducer,
});

export default reducers;
