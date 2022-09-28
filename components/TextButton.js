import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { COLORS, SIZES, FONTS } from '../constants'

const TextButton = ({
  label,
  labelStyle,
  buttonContainerStyle,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        marginTop: 10,
        ...buttonContainerStyle,
      }}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.white, ...FONTS.h3, ...labelStyle }}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default TextButton
