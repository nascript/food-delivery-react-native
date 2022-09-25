import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import { COLORS, FONTS, SIZES, icons, dummyData, constants } from '../constants'

const VerticalFoodCard = ({ containerStyle, imageStyle, item, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: 200,
        padding: SIZES.radius,
        alignItems: 'center',
        borderradius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}
    >
      {/* Calories and Favourite */}
      <View style={{ flexDirection: 'row' }}>
        {/* Calories */}
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <Image source={icons.calories} style={{ width: 30, height: 30 }} />
          <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}>
            {item.calories} Calories
          </Text>
        </View>
        {/* Favourite */}
        <Image
          source={icons.love}
          style={{ width: 20, height: 20 }}
          tintColor={item.isFavourite ? COLORS.primary : COLORS.gray2}
        />
      </View>

      {/* Card Image */}
      <View style={{ height: 150, width: 150, alignItems: 'center' }}>
        <Image source={item.image} style={{ height: '100%', width: '100%' }} />
      </View>

      {/* Info Section */}
      <View style={{ alignItems: 'center', marginTop: -20 }}>
        <Text style={{ ...FONTS.h3 }}>{item.name}</Text>
        <Text
          style={{
            color: COLORS.darkGray2,
            textAlign: 'center',
            ...FONTS.body5,
          }}
        >
          {item.description}
        </Text>
        <Text style={{ marginTop: SIZES.radius, ...FONTS.h2 }}>
          Rp {item.price}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default VerticalFoodCard
