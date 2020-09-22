import Taro from '@tarojs/taro';
import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { connect } from 'react-redux';
import './index.scss'

export interface State {

}

export interface Props {
  value: number;
  add(): void;
  minus(): void;
}

const mapState = (state: any) => {
  return {
    value: state.count,
  };
};

const mapActions = (dispatch: (action: Action) => void) => ({
  add: () => {
    dispatch({ type: 'count/+' })
  },
  minus: () => {
    dispatch({ type: 'count/-' })
  },
});

@connect(mapState, mapActions)
export default class Index extends Component<Props, State> {
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { value, add, minus } = this.props;

    return (
      <View className='index'>
        <View className="content">
          <Text className="value">{value}</Text>
        </View>
        <View className="actions">
          <View className="item add" onClick={this.props.add.bind(this)}>+</View>
          <View className="item minus" onClick={this.props.minus.bind(this)}>-</View>
        </View>
      </View>
    )
  }
}
