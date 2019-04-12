import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtCalendar } from "taro-ui"
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '杰宝签到'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <AtCalendar />
      </View>
    )
  }
}
