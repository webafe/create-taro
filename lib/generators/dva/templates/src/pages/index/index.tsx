import React, { FC } from 'react';
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

const Index: FC = () => {
  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  )
};

export default Index;
