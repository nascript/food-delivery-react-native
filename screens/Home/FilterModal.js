import React, { useEffect, useRef, useState } from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native'
import Animated from 'react-native-reanimated'
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  dummyData,
  constants,
} from '../../constants'
import {
  IconButton,
  TwoPointSlider,
  TextButton,
  TextIconButton,
} from '../../components'

const FilterModal = ({ isVisible, onClose }) => {
  const [showFilterModal, setShowFilterModal] = useState(isVisible)
  const [deliveryTime, setDeliveryTime] = useState('')
  const [ratings, setRatings] = useState('')
  const [tags, setTags] = useState('')
  // const modalAnimatedValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    // if (showFilterModal) {
    //   Animated.timing(modalAnimatedValue, {
    //     toValue: 1,
    //     duration: 500,
    //     useNativeDriver: false,
    //   }).start()
    // } else {
    //   Animated.timing(modalAnimatedValue, {
    //     toValue: 0,
    //     duration: 500,
    //     useNativeDriver: false,
    //   }).start(() => onClose())
    // }
    if (!showFilterModal) {
      onClose()
    }
  }, [showFilterModal])

  // const modalY = modalAnimatedValue?.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, 26],
  // })

  const Section = ({ containerStyle, title, children }) => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          ...containerStyle,
        }}
      >
        <Text style={{ ...FONTS.h3 }}>{title}</Text>

        {children}
      </View>
    )
  }

  function renderDistance() {
    return (
      <Section title='Distance'>
        <View style={{ alignItems: 'center' }}>
          <TwoPointSlider
            value={[3, 10]}
            min={1}
            max={20}
            postfix='km'
            onValueChange={(value) => console.log('change slider', value)}
          />
        </View>
      </Section>
    )
  }
  function renderDeliveryTime() {
    return (
      <Section title='Delivere Time' containerStyle={{ marginTop: 40 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {constants.delivery_time.map((item, index) => {
            return (
              <TextButton
                key={`delivery_time-${index}`}
                label={item.label}
                labelStyle={{
                  color: item.id == deliveryTime ? COLORS.white : COLORS.gray,
                  ...FONTS.body3,
                }}
                buttonContainerStyle={{
                  width: '30%',
                  height: 50,
                  margin: 5,
                  alignItems: 'center',
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id == deliveryTime
                      ? COLORS.primary
                      : COLORS.lightGray2,
                }}
                onPress={() => setDeliveryTime(item.id)}
              />
            )
          })}
        </View>
      </Section>
    )
  }

  function renderPricingRange() {
    return (
      <Section title='Price Range (Rupiah)'>
        <View style={{ justifyContent: 'center' }}>
          <TwoPointSlider
            value={[10, 75]}
            min={1}
            max={100}
            postfix='K'
            prefix=''
            onValueChange={(value) => console.log('change slider', value)}
          />
        </View>
      </Section>
    )
  }

  function renderRatings() {
    return (
      <Section title='Ratings' containerStyle={{ marginTop: 40 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {constants.ratings.map((item, index) => {
            return (
              <TextIconButton
                key={`Ratings-${index}`}
                containerStyle={{
                  flex: 1,
                  height: 50,
                  margin: 5,
                  alignItems: 'center',
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id == ratings ? COLORS.primary : COLORS.lightGray2,
                }}
                label={item.label}
                labelStyle={{
                  color: item.id == ratings ? COLORS.white : COLORS.gray,
                }}
                icon={icons.star}
                iconStyle={{
                  tintColor: item.id == ratings ? COLORS.white : COLORS.gray,
                }}
                onPress={() => setRatings(item.id)}
              />
            )
          })}
        </View>
      </Section>
    )
  }

  function renderTags() {
    return (
      <Section title='Tags' containerStyle={{ marginTop: 40 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {constants.tags.map((item, index) => {
            return (
              <TextButton
                key={`tags-${index}`}
                label={item.label}
                labelStyle={{
                  color: item.id == tags ? COLORS.white : COLORS.gray,
                  ...FONTS.body3,
                }}
                buttonContainerStyle={{
                  width: '30%',
                  height: 50,
                  margin: 5,
                  alignItems: 'center',
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id == tags ? COLORS.primary : COLORS.lightGray2,
                }}
                onPress={() => setTags(item.id)}
              />
            )
          })}
        </View>
      </Section>
    )
  }

  return (
    <Modal animationType='fade' transparent={true} visible={isVisible}>
      <View style={{ flex: 1, backgroundColor: COLORS.transparentBlack7 }}>
        {/* Transparent Background */}
        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </TouchableWithoutFeedback>

        <Animated.View
          style={{
            position: 'absolute',
            left: 0,
            top: 160,
            width: '100%',
            height: '100%',
            padding: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
            borderTopLeftRadius: SIZES.padding,
            backgroundColor: COLORS.white,
          }}
        >
          {/* Header */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ flex: 1, ...FONTS.h3, fontSize: 18 }}>
              Filter Your Search
            </Text>
            <IconButton
              containerStyle={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: COLORS.gray2,
              }}
              icon={icons.cross}
              iconStyle={{ tintColor: COLORS.gray2 }}
              onPress={() => setShowFilterModal(false)}
            />
          </View>
          <ScrollView
            showVerticalScrollBar={false}
            showScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 250 }}
          >
            {/* Distance Section */}
            {renderDistance()}

            {/* Delivered Time */}
            {renderDeliveryTime()}

            {/* Pricing Range */}
            {renderPricingRange()}

            {/* Rating */}
            {renderRatings()}

            {/* Tags */}
            {renderTags()}
          </ScrollView>

          {/* Apply Button */}
          <View
            style={{
              position: 'absolute',
              bottom: 150,
              left: 0,
              right: 0,
              height: 110,
              paddingHorizontal: SIZES.padding,
              paddingVertical: SIZES.radius,
              backgroundColor: COLORS.white,
            }}
          >
            <TextButton
              label='Apply Filters'
              buttonContainerStyle={{
                height: 50,
                borderRadius: SIZES.base,
                backgroundColor: COLORS.primary,
              }}
              onPress={() => console.log('Apply Filters')}
            />
          </View>
        </Animated.View>
      </View>
    </Modal>
  )
}

export default FilterModal
