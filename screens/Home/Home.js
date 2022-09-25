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
import { HorizontalFoodCard, VerticalFoodCard } from '../../components'

const Section = ({ title, onPress, children }) => {
  return (
    <View>
      {/* Header Of Section */}
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        <Text style={{ flex: 1, ...FONTS.h3 }}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
            Show All
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content fo Section */}
      {children}
    </View>
  )
}

const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1)
  const [selectedMenuType, setSelectedMenuType] = useState(1)
  const [popular, setPopular] = useState([])
  const [recommends, setRecommends] = useState([])
  const [menuList, setMenuList] = useState([])

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType)
  }, [])

  // Handler
  function handleChangeCategory(categoryId, menuTypeId) {
    // Retrive Popular menu
    let selectedPopular = dummyData.menu.find((a) => a.name == 'Popular')
    // Set the popular menu based on the categoryId
    setPopular(
      selectedPopular?.list.filter((a) => a.categories.includes(categoryId))
    )

    // Retrive the recomends menu data the
    let selectedRecomend = dummyData.menu.find((a) => a.name == 'Recommended')
    // Set the recomended menu based on categoryId
    setRecommends(
      selectedRecomend?.list.filter((a) => a.categories.includes(categoryId))
    )

    // Find menu based on the menu type
    let selectedMenu = dummyData?.menu?.find((a) => a?.id == menuTypeId)
    // set the menu based on the caloriId
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

  function renderRecomendedSection() {
    return (
      <Section
        title='Recomended'
        onPress={() => console.log('Show All Recommends')}
      >
        <FlatList
          data={recommends}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <HorizontalFoodCard
              containerStyle={{
                height: 180,
                width: SIZES.width * 0.85,
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
                padding: 18,
                paddingRight: SIZES.radius,
                alignItems: 'center',
              }}
              imageStyle={{ marginTop: 35, height: 150, width: 150 }}
              item={item}
              onPress={() => console.log('Horizontal card food')}
            />
          )}
        />
      </Section>
    )
  }

  function renderPopularSection() {
    return (
      <Section
        title='Popular Near You'
        onPress={() => console.log('Popular Near You')}
      >
        <FlatList
          data={popular}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <VerticalFoodCard
              containerStyle={{
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight: index == popular.length - 1 ? SIZES.padding : 0,
                padding: 18,
              }}
              item={item}
              onPress={() => console.log('Vertical Food Card')}
            />
          )}
        />
      </Section>
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
            {/* Popular Section */}
            {renderPopularSection()}

            {/* Recomended Section */}
            {renderRecomendedSection()}

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
