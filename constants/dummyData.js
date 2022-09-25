import { icons, images } from './'

const myProfile = {
  name: 'Nasution',
  profile_image: images.profile,
  address: 'KM 14.5, Jln Kaliurang, Yogyakarta',
}

const categories = [
  {
    id: 1,
    name: 'Fast Food',
    icon: icons.burger,
  },
  {
    id: 2,
    name: 'Fruit Item',
    icon: icons.cherry,
  },
  {
    id: 3,
    name: 'Rice Item',
    icon: icons.rice,
  },
]

const hamburger = {
  id: 1,
  name: 'Hamburger',
  description: 'Chicken patty hamburger',
  categories: [1, 2, 4],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require('../assets/dummyData/hamburger.png'),
}

const hotTacos = {
  id: 2,
  name: 'Hot Tacos',
  description: 'Mexican tortilla & tacos',
  categories: [3, 2],
  price: 10.99,
  calories: 78,
  isFavourite: false,
  image: require('../assets/dummyData/hot_tacos.png'),
}

const vegBiryani = {
  id: 3,
  name: 'Veg Biryani',
  description: 'Indian Vegetable Biryani',
  categories: [1, 2, 3],
  price: 10.99,
  calories: 78,
  isFavourite: false,
  image: require('../assets/dummyData/veg_biryani.png'),
}

const wrapSandwich = {
  id: 4,
  name: 'Wrap Sandwich',
  description: 'Grilled vegetables sandwich',
  categories: [1, 2, 3],
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: require('../assets/dummyData/wrap_sandwich.png'),
}

const menu = [
  {
    id: 1,
    name: 'Featured',
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 2,
    name: 'Nearby you',
    list: [hotTacos, vegBiryani, wrapSandwich],
  },
  {
    id: 3,
    name: 'Popular',
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 4,
    name: 'Newest',
    list: [wrapSandwich, hamburger, vegBiryani],
  },
  {
    id: 5,
    name: 'Trending',
    list: [hotTacos, vegBiryani, hamburger],
  },
  {
    id: 6,
    name: 'Recommended',
    list: [hotTacos, wrapSandwich, vegBiryani],
  },
]

export default {
  myProfile,
  categories,
  menu,
}
