import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        condition={item.day.condition.text}
        dt_txt={item.date}
        min={item.day.mintemp_c}
        max={item.day.maxtemp_c}
      />
    )
  }

  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={image}
        source={require('../../assets/upcoming-background.jpg')}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.date_epoch}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  image: {
    flex: 1
  }
})

export default UpcomingWeather
