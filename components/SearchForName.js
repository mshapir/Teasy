import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

class SearchForName extends Component {

  state={
    query: ''
  }

  handleChange = (query) => {
    this.setState({
      query
    }, () => this.props.filter(this.state.query))

  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
            placeholder="Type here to search!"
            onChangeText={this.handleChange}
            value={this.state.query}
          />
        </View>
    );
  }

}

export default SearchForName;
