import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { loadCategories, requestToken, resetScore, startTimer } from '../actions';
import { Button } from './common';
import CategorySelect from './CategorySelect';


class Main extends Component {
  componentWillMount() {
    this.props.loadCategories();
    if (this.props.token === '') {
      this.props.requestToken();
    }
  }

  onButtonPress() {
    Actions.questionList();
    this.props.startTimer();
    this.props.resetScore();
  }

  render() {
    if (this.props.loadingCategories) {
      return (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    return (
      <View style={styles.MainContainer}>
        <CategorySelect categories={this.props.categories} />
        <View style={{ flex: 1 }} />
        <Button onPress={this.onButtonPress.bind(this)}>
          Start Quiz
        </Button>
      </View>
    );
  }
}

const styles = {
  MainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10
  },
  imageView: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  buttonView: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    backgroundColor: '#FFF',
  },
  indicatorContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center'
  }
};

const mapStateToProps = (state) => ({
  loadingCategories: state.cat.loadingCategories,
  categories: state.cat.categories,
  token: state.token.token,
  score: state.ans.score
});

export default connect(mapStateToProps, { loadCategories, requestToken, resetScore, startTimer })(Main);
