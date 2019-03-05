import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Main from './components/Main';
import QuestionList from './components/QuestionList';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="main">
        <Scene
          key="main_menu"
          component={Main}
          title="Main Menu"
        />
        <Scene key="questionList" component={QuestionList} title="Quiz Questions" />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
