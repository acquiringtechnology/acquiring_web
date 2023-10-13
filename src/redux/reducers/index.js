import { combineReducers } from "redux";
import { authenticateReducer } from "./authenticate";
import { syllabusreducer } from "./syllabus";
import { coursereducer } from "./course";
import { courseEnquiryReducer } from "./courseEnquiry";
import { subscribeReducer } from "./subscribe";
import { candidatereducer } from "./candidate";
import { WebinarReducer } from "./webinars";

const reducers = combineReducers({
  authenticate: authenticateReducer,
  syllabus: syllabusreducer,
  course: coursereducer,
  courseEnquiry: courseEnquiryReducer,
  subscribe: subscribeReducer,
  candidate:candidatereducer,
  webinar:WebinarReducer
});

export default reducers;
