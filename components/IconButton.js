import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { COLORS } from '../constants'

const IconButton = ({ containerStyle, icon, iconStyle, onPress }) => {
  return (
    <TouchableOpacity style={{ ...containerStyle }} onPress={onPress}>
      <Image
        source={icon}
        style={{ width: 30, height: 30, ...iconStyle, tintColor: COLORS.gray2 }}
      />
    </TouchableOpacity>
  )
}

export default IconButton
