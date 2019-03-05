import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  ANSWER_OPTIONS,
  ANSWER_OPTION_1_CHANGED,
  ANSWER_OPTION_2_CHANGED,
  ANSWER_OPTION_3_CHANGED,
  ANSWER_OPTION_4_CHANGED,
  ANSWER_OPTION_5_CHANGED,
  ANSWER_OPTION_6_CHANGED,
  ANSWER_OPTION_7_CHANGED,
  ANSWER_OPTION_8_CHANGED,
  ANSWER_OPTION_9_CHANGED,
  ANSWER_OPTION_10_CHANGED,
  CALCULATE_RESULT,
  CALCULATE_SUCCESS,
  RESET_SCORE,
  START_TIMER
} from './types';

export const answerChanged = (index, value, questionIndex) => {
  switch (questionIndex) {
    case 0:
      return {
        type: ANSWER_OPTION_1_CHANGED,
        payload: {
          answerIndex: index,
          answer: value
        }
      };
    case 1:
      return {
        type: ANSWER_OPTION_2_CHANGED,
        payload: {
          answerIndex: index,
          answer: value
        }
      };
    case 2:
      return {
        type: ANSWER_OPTION_3_CHANGED,
        payload: {
          answerIndex: index,
          answer: value
        }
      };
    case 3:
      return {
        type: ANSWER_OPTION_4_CHANGED,
        payload: {
          answerIndex: index,
          answer: value
        }
      };
    case 4:
      return {
        type: ANSWER_OPTION_5_CHANGED,
        payload: {
          answerIndex: index,
          answer: value
        }
      };
    case 5:
      return {
        type: ANSWER_OPTION_6_CHANGED,
        payload: {
          answerIndex: index,
          answer: value
        }
      };
    case 6:
      return {
        type: ANSWER_OPTION_7_CHANGED,
        payload: {
          answerIndex: index,
          answer: value
        }
      };
    case 7:
      return {
        type: ANSWER_OPTION_8_CHANGED,
        payload: {
          answerIndex: index,
          answer: value
        }
      };
    case 8:
      return {
        type: ANSWER_OPTION_9_CHANGED,
        payload: {
          answerIndex: index,
          answer: value
        }
      };
    case 9:
      return {
        type: ANSWER_OPTION_10_CHANGED,
        payload: {
          answerIndex: index,
          answer: value
        }
      };
    default:
      return;
  }
};

export const answerOptions = (correctAnswer, incorrectAnswers) => {
  const answers = incorrectAnswers.map((item, index) => ({
    label: item,
    value: index
  }));
  answers.push({
    label: correctAnswer,
    value: 3
  });

  return {
    type: ANSWER_OPTIONS,
    payload: answers
  };
};

export const calculateResult = (userAnswers, questions, startTime) => {
  return (dispatch) => {
    dispatch({
      type: CALCULATE_RESULT
    });

    let score = 0;

    const correctAnswers = questions.map(
      (item, index) => ({
        correctAnswer: item.correct_answer,
        correctIndex: index
      })
    );

    if (correctAnswers[0].correctAnswer === userAnswers.answer1.answer) {
      score += 1;
    }

    if (correctAnswers[1].correctAnswer === userAnswers.answer2.answer) {
      score += 1;
    }

    if (correctAnswers[2].correctAnswer === userAnswers.answer3.answer) {
      score += 1;
    }

    if (correctAnswers[3].correctAnswer === userAnswers.answer4.answer) {
      score += 1;
    }

    if (correctAnswers[4].correctAnswer === userAnswers.answer5.answer) {
      score += 1;
    }

    if (correctAnswers[5].correctAnswer === userAnswers.answer6.answer) {
      score += 1;
    }

    if (correctAnswers[6].correctAnswer === userAnswers.answer7.answer) {
      score += 1;
    }

    if (correctAnswers[7].correctAnswer === userAnswers.answer8.answer) {
      score += 1;
    }

    if (correctAnswers[8].correctAnswer === userAnswers.answer9.answer) {
      score += 1;
    }

    if (correctAnswers[9].correctAnswer === userAnswers.answer10.answer) {
      score += 1;
    }

    calculateSuccess(dispatch, score);

    const timeDiff = (new Date() - startTime) / 1000;

    Alert.alert(
      'Great job!',
      `Your result is: ${score} points and you have spent ${timeDiff} seconds to answer the questions!`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Restart Quiz', onPress: () => {
          Actions.main();
        }}
      ],
      {cancelable: false},
    );
  };
};

export const calculateSuccess = (dispatch, score) => {
  dispatch({
    type: CALCULATE_SUCCESS,
    payload: score
  });
};

export const resetScore = () => ({
  type: RESET_SCORE
});

export const startTimer = () => ({
  type: START_TIMER
});
