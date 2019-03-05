import React, { Component } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { loadQuestions, calculateResult } from '../actions';
import Question from './Question';
import { Button } from './common';

class QuestionList extends Component {
  componentWillMount() {
    this.props.loadQuestions(this.props.categoryId, this.props.token);
  }

  onSubmitButtonPress() {
    const { answers, questions, startTime } = this.props;
    this.props.calculateResult(answers, questions, startTime);
  }

  renderQuestions() {
    return this.props.questions.map((question, index) => (
      <Question
        key={question.question}
        question={question}
        index={index}
        correct_answer={question.correct_answer}
        incorrect_answers={question.incorrect_answers}
      />
    ));
  }

  renderButton() {
    return (
      <Button onPress={this.onSubmitButtonPress.bind(this)}>
        Submit
      </Button>
    );
  }

  render() {
    if (this.props.loadingQuestions) {
      return (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    return (
      <ScrollView style={styles.mainContainer}>
        {this.renderQuestions()}
        {this.renderButton()}
      </ScrollView>
    );
  }
}

const styles = {
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  indicatorContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center'
  }
};

const mapStateToProps = (state) => ({
  questions: state.quest.questions,
  loadingQuestions: state.quest.loadingQuestions,
  categoryId: state.cat.PlaceholderId,
  answers: state.ans,
  result: state.ans.score,
  startTime: state.ans.startTime,
  calculating: state.ans.calculating,
  token: state.token.token,
  submitClicked: state.ans.buttonClicked
});

export default connect(mapStateToProps, { loadQuestions, calculateResult })(QuestionList);
