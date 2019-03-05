import React, { Component } from 'react';
import { Picker, View } from 'react-native';
import { connect } from 'react-redux';
import { categoryChanged } from '../actions';

class CatPick extends Component {

  updateCategory = (itemValue, itemPosition) => {
    const { categoryChanged: change } = this.props;
    const category = { name: itemValue, id: itemPosition };
    change(category);
  }

  renderCategories() {
    return this.props.categories.map((item) => (
      <Picker.Item label={item.name} value={item.name} key={item.id} />)
   );
  }

   render() {
      return (
        <View>
          <Picker
            selectedValue={this.props.Placeholder}
            onValueChange={this.updateCategory.bind(this)}
          >
            {this.renderCategories()}
          </Picker>
        </View>
      );
   }
}

const mapStateToProps = (state) => ({
    Placeholder: state.cat.Placeholder,
    PlaceholderId: state.cat.PlaceholderId
  });

export default connect(mapStateToProps, { categoryChanged })(CatPick);
