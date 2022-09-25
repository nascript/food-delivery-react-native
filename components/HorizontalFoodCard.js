import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import { COLORS, FONTS, SIZES, icons, dummyData, constants } from '../constants'

const HorizontalFoodCard = ({ containerStyle, imageStyle, item, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        borderradius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}
    >
      {/* Card Image */}
      <Image source={item.image} style={imageStyle} />

      {/* Card  Info*/}
      <View style={{ flex: 1 }}>
        {/* Food Name */}
        <Text style={{ ...FONTS.h3, fontSize: 17 }}>{item.name}</Text>
        {/* Food Description */}
        <Text style={{ color: COLORS.darkGray, ...FONTS.body4, fontSize: 17 }}>
          {item.description}
        </Text>
        {/* Food Price */}
        <Text
          style={{ color: COLORS.black, marginTop: SIZES.base, ...FONTS.h2 }}
        >
          Rp {item.price}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          top: 5,
          right: SIZES.radius,
        }}
      >
        <Image source={icons.calories} style={{ width: 30, height: 30 }} />
        <Text style={{ calor: COLORS.darkGray2, ...FONTS.body5 }}>
          {item.calories} Calories
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default HorizontalFoodCard
