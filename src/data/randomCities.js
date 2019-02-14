// import cityList from "./city.list.json"

// function randomCitiesGetter(cityList) {
//  let randomCities = []
//  for (let i = 0; i < 10; i++) {
//    let randomIndex = Math.floor(Math.random() * cityList.length)
//    let item = cityList.splice(randomIndex, 1)
//    randomCities.push(item[0])
//  }

//  return randomCities
// }
// const randomCities = randomCitiesGetter(cityList)

const randomCities = [
  {
    id: 5809844,
    name: "Seattle",
    country: "US",
    coord: {
      lon: -122.332069,
      lat: 47.606209,
    },
  },

  {
    id: 2968815,
    name: "Paris",
    country: "FR",
    coord: {
      lon: 2.3486,
      lat: 48.853401,
    },
  },

  {
    id: 1581130,
    name: "Ha Noi",
    country: "VN",
    coord: {
      lon: 105.841171,
      lat: 21.0245,
    },
  },

  {
    id: 1583477,
    name: "Dien Bien Phu",
    country: "VN",
    coord: {
      lon: 103.01667,
      lat: 21.383329,
    },
  },

  {
    id: 4887398,
    name: "Chicago",
    country: "US",
    coord: {
      lon: -87.650047,
      lat: 41.850029,
    },
  },

  {
    id: 1153671,
    name: "Chiang Mai",
    country: "TH",
    coord: {
      lon: 98.98468,
      lat: 18.79038,
    },
  },

  {
    id: 1580240,
    name: "Hue",
    country: "VN",
    coord: {
      lon: 107.599998,
      lat: 16.466669,
    },
  },

  {
    id: 1850147,
    name: "Tokyo",
    country: "JP",
    coord: {
      lon: 139.691711,
      lat: 35.689499,
    },
  },

  {
    id: 1880252,
    name: "Singapore",
    country: "SG",
    coord: {
      lon: 103.850067,
      lat: 1.28967,
    },
  },

  {
    id: 4391354,
    name: "Houston",
    country: "US",
    coord: {
      lon: -91.955994,
      lat: 37.32616,
    },
  },
]

export default randomCities
