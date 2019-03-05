import { combineReducers } from 'redux';
import CategoryReducer from './categories';
import QuestionReducer from './questions';
import AnswerReducer from './answers';
import TokenReducer from './tokens';

export default combineReducers({
  cat: CategoryReducer,
  quest: QuestionReducer,
  ans: AnswerReducer,
  token: TokenReducer,
});
