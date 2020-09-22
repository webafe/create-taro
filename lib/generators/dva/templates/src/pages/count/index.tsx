import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

import './index.scss'

function useCount() {
  const dispatch = useDispatch();
  const value = useSelector((state: any) => state.count);

  const add = () => dispatch({ type: 'count/+' });
  const minus = () => dispatch({ type: 'count/-' });

  return {
    value,
    add,
    minus,
  };
}

const Count: FC = () => {
  const count = useCount();

  return (
    <View className='index'>
      <View className="content">
        <Text className="value">{count.value}</Text>
      </View>
      <View className="actions">
        <View className="item add" onClick={count.add}>
          <Text>+</Text>
        </View>
        <View className="item minus" onClick={count.minus}>
          <Text>-</Text>
        </View>
      </View>
    </View>
  );
};

export default Count;
