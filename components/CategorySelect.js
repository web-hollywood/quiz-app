import React from 'react';
import { View, Text } from 'react-native';
import CatPick from './CatPick';

const CategorySelect = ({ categories }) => (
  <View style={styles.containerStyle}>
    <View style={styles.labelStyle}>
      <Text style={styles.textStyle}>
        Choose Category
      </Text>
    </View>
    <View style={styles.pickerStyle}>
      <CatPick categories={categories} />
    </View>
  </View>
);

const styles = {
  containerStyle: {
    margin: 10,
    padding: 0,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    borderRadius: 0,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    position: 'relative'
  },
  labelStyle: {
    padding: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderBottomWidth: 2,
    borderColor: '#000',
  },
  pickerStyle: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
    borderColor: '#000',
  },
  textStyle: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold'
  }
};

export default CategorySelect;
