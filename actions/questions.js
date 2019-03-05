import {
  QUESTIONS_LOADING_SUCCESS,
  QUESTIONS_LOADING_FAIL,
  QUESTIONS_LOADING,
} from './types';

export const loadQuestions = (categoryId, userToken) => (dispatch) => {
  dispatch({
    type: QUESTIONS_LOADING
  });

  const params = {
    amount: 10,
    category: categoryId + 9,
    type: 'multiple',
    token: userToken
  };
  let url = 'https://opentdb.com/api.php?';

  const esc = encodeURIComponent;
  const query = Object.keys(params)
    .map(k => `${esc(k)}=${esc(params[k])}`)
    .join('&');

  url += query;

  fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    })
    .then((responseData) => loadingQuestionsSuccess(dispatch, responseData))
    .catch((error) => {
      console.log(error);
      loadingQuestionsFail(dispatch);
    });
};

export const loadingQuestionsSuccess = (dispatch, questions) => {
  dispatch({
    type: QUESTIONS_LOADING_SUCCESS,
    payload: questions
  });
};

export const loadingQuestionsFail = (dispatch) => {
  dispatch({
    type: QUESTIONS_LOADING_FAIL
  });
};
