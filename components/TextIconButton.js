import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, SIZES, FONTS } from '../constants'

const TextIconButton = ({
  label,
  labelStyle,
  icon,
  iconStyle,
  containerStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Text style={{ ...FONTS.body3, ...labelStyle }}>{label}</Text>
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          marginLeft: 5,
          tintColor: COLORS.black,
          ...iconStyle,
        }}
      />
    </TouchableOpacity>
  )
}

export default TextIconButton
