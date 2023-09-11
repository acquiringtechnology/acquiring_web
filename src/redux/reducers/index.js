import { combineReducers } from 'redux';
import { authenticateReducer } from './authenticate';
import { syllabusreducer } from './syllabus';
import { coursereducer } from './course';

const reducers = combineReducers({
  authenticate: authenticateReducer,
  syllabus: syllabusreducer,
  course: coursereducer
});

export default reducers;
