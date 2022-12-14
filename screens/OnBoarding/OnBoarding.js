import React, { useRef, useState } from 'react'
import { View, Text, ImageBackground, Image, Animated } from 'react-native'
import { constants, images, FONTS, SIZES, COLORS } from '../../constants'
import { TextButton } from '../../components'

const OnBoarding = ({ navigation }) => {
  const scrolX = useRef(new Animated.Value(0)).current
  const flatListRef = useRef(0)

  const [currentIndex, setCurrentIndex] = useState(0)

  const onViewChangeRef = useRef(({ viewableItems, changed }) => {
    setCurrentIndex(viewableItems[0].index)
  })

  function renderHeaderLogo() {
    return (
      <View
        style={{
          position: 'absolute',
          top: SIZES.height > 800 ? 50 : 25,
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={images.logo_02}
          resizeMode='contain'
          style={{ width: SIZES.width * 0.5, height: 100 }}
        />
      </View>
    )
  }

  const Dots = () => {
    const dotPosition = Animated.divide(scrolX, SIZES.width)

    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {constants.onboarding_screens.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [
              COLORS.lightOrange,
              COLORS.primary,
              COLORS.lightOrange,
            ],
            extrapolate: 'clamp',
          })

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 30, 10],
            extrapolate: 'clamp',
          })

          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: dotWidth,
                height: 10,
                backgroundColor: dotColor,
              }}
            />
          )
        })}
      </View>
    )
  }

  function renderFooter() {
    return (
      <View style={{ height: 160, width: '100%' }}>
        {/* Paginations / Dots */}
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Dots />
        </View>

        {/* Buttons */}
        {currentIndex < constants.onboarding_screens.length - 1 && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}
          >
            <TextButton
              label='Skip'
              buttonContainerStyle={{ backgroundColor: null }}
              labelStyle={{ color: COLORS.darkGray2 }}
              onPress={() => navigation.replace('SignIn')}
            />
            <TextButton
              label='Next'
              buttonContainerStyle={{
                height: 60,
                width: 200,
                borderRadius: SIZES.radius,
              }}
              onPress={() => {
                flatListRef?.current?.scrollToIndex({
                  index: currentIndex + 1,
                  animated: true,
                })
              }}
            />
          </View>
        )}
        {currentIndex == constants.onboarding_screens.length - 1 && (
          <View
            style={{
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}
          >
            <TextButton
              label="Let's Get Started"
              buttonContainerStyle={{ height: 60, borderRadius: SIZES.radius }}
              onPress={() => navigation.replace('SignIn')}
            />
          </View>
        )}
      </View>
    )
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Logo App */}
      {renderHeaderLogo()}

      {/* Content Splashscreen */}
      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={constants.onboarding_screens}
        scrollEventThrottle={16}
        snapToAlligment='center'
        showHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrolX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={onViewChangeRef.current}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <View style={{ width: SIZES.width }}>
              {/* Header Title Splashscreen */}
              <View style={{ flex: 3 }}>
                <ImageBackground
                  source={item.backgroundImage}
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    height: index == 1 ? '92%' : '100%',
                    width: '100%',
                  }}
                >
                  <Image
                    source={item.bannerImage}
                    resizeMode='contain'
                    style={{
                      width: SIZES.width * 0.6,
                      height: SIZES.height * 0.6,
                      marginBottom: -150,
                    }}
                  />
                </ImageBackground>
              </View>

              {/* Description Splashscreen */}
              <View
                style={{
                  flex: 1,
                  marginTop: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: SIZES.radius,
                }}
              >
                <Text style={{ ...FONTS.h1, fontSize: 25 }}>{item.title}</Text>
                <Text
                  style={{
                    marginTop: SIZES.radius,
                    textAlign: 'center',
                    color: SIZES.darkGray,
                    paddingHorizontal: SIZES.padding,
                    ...FONTS.body3,
                  }}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          )
        }}
      />

      {renderFooter()}
    </View>
  )
}

export default OnBoarding
