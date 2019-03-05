import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import he from 'he';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { answerChanged } from '../actions';

class Question extends Component {

  shuffle(answers) {
    const newArray = answers;
    let currentIndex = newArray.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = newArray[currentIndex];
      newArray[currentIndex] = newArray[randomIndex];
      newArray[randomIndex] = temporaryValue;
      return newArray;
    }
  }

  renderRadioButtons() {
  const answers = this.props.incorrect_answers.map(
    (item, index) => ({ label: he.decode(item), value: index })
  );
  answers.push({ label: he.decode(this.props.correct_answer), value: 3 });
  return this.shuffle(answers).map((item) => (
        <RadioButton key={item.label} value={item.label} >
          <Text>{item.label}</Text>
        </RadioButton>
      )
    );
  }

  render() {
    const question = he.decode(this.props.question.question);
    return (
      <View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>Question {this.props.index + 1}</Text>
          <Text style={styles.questionStyle}>
            {question}
          </Text>
        </View>
        <View style={styles.containerStyle2}>
          <RadioGroup
            onSelect={(index, value) => this.props.answerChanged(index, value, this.props.index)}
          >
            {this.renderRadioButtons()}
          </RadioGroup>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    margin: 10,
    marginBottom: 1,
    padding: 10,
    backgroundColor: '#FFF',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 0,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 2,
    position: 'relative'
  },
  containerStyle2: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    position: 'relative'
  },
  labelStyle: {
    padding: 10,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18
  },
  questionStyle: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center'
  },
  answerStyle: {
    color: '#000',
    fontSize: 14,
  }
};

const mapStateToProps = (state) => ({
  selected: state.ans.selected
});

export default connect(mapStateToProps, { answerChanged })(Question);
