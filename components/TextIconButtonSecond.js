import React from 'react'
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../constants'

const TextIconButtonSecond = ({
  label,
  labelStyle,
  // iconStyle,
  contentContainerStyle,
  icon,
  iconPosition,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...contentContainerStyle,
      }}
      onPress={onPress}
    >
      {iconPosition === 'LEFT' && (
        <Image
          source={icon}
          style={{
            ...styles.image,
            // ...iconStyle,
          }}
        />
      )}
      <Text style={{ ...FONTS.body3, ...labelStyle }}>{label}</Text>
      {iconPosition === 'RIGHT' && (
        <Image
          source={icon}
          style={{
            ...styles.image,
            // ...iconStyle,
          }}
        />
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: { marginLeft: 5, width: 20, height: 20 },
})

export default TextIconButtonSecond
