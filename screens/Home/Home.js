import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native'

import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  dummyData,
  constants,
} from '../../constants'

import { HorizontalFoodCard } from '../../components'

const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1)
  const [selectedMenuType, setSelectedMenuType] = useState(1)
  const [menuList, setMenuList] = useState([])

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType)
  }, [])

  // Handler
  function handleChangeCategory(categoryId, menuTypeId) {
    let selectedMenu = dummyData?.menu?.find((a) => a?.id == menuTypeId)
    setMenuList(
      selectedMenu?.list?.filter((a) => a?.categories?.includes(categoryId))
    )
  }

  const renderSearch = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 55,
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray2,
        }}
      >
        {/* Icon */}
        <Image
          source={icons.search}
          style={{ height: 20, width: 20, tintColor: COLORS.black }}
        />
        {/* Text Input */}
        <TextInput
          style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.body3 }}
          placeholder='Search Food'
        />
        {/* Filter Button */}
        <TouchableOpacity>
          <Image
            source={icons.filter}
            style={{ height: 20, width: 20, tintColor: COLORS.black }}
          />
        </TouchableOpacity>
      </View>
    )
  }

  function renderMenuTypes() {
    return (
      <FlatList
        horizontal
        data={dummyData.menu}
        keyExtractor={(item) => `${item.id}`}
        showHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 30, marginBottom: 20 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              marginLeft: SIZES.padding,
              marginRight:
                index == dummyData.menu.length - 1 ? SIZES.padding : 0,
            }}
            onPress={() => {
              setSelectedMenuType(item.id)
              handleChangeCategory(selectedCategoryId, item.id)
            }}
          >
            <Text
              style={{
                color:
                  selectedMenuType == item.id ? COLORS.primary : COLORS.black,
                ...FONTS.h3,
              }}
            >
              {item?.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    )
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Search Section */}
      {renderSearch()}
      {/* List Section */}
      <FlatList
        data={menuList}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Menu Type */}
            {renderMenuTypes()}
          </View>
        }
        renderItem={({ item, index }) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                height: 130,
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
              }}
              imageStyle={{
                marginTop: 20,
                height: 110,
                width: 110,
              }}
              item={item}
              onPress={() => console.log('Press HorizontalFoodCard')}
            />
          )
        }}
      />
    </View>
  )
}

export default Home
