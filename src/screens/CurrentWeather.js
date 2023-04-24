import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const { current, weather, forecast } = weatherData
  const weatherCondition = weather

  const {
    wrapper,
    container,
    temperature,
    feels,
    hiLowWrapper,
    hiLow,
    bodyWrapper,
    description,
    message
  } = styles

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor }
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[current.condition.code]?.icon}
          size={100}
          color="white"
        />
        <Text style={temperature}>{`${current?.temp_c}°`}</Text>
        <Text style={feels}>{`Sensação: ${current?.feelslike_c}°`}</Text>
        <RowText
          messageOne={`Máximo: ${forecast?.forecastday[0].day.maxtemp_c}° `}
          messageTwo={`Minimo: ${forecast?.forecastday[0].day.mintemp_c}°`}
          containerStyles={hiLowWrapper}
          messageOneStyles={hiLow}
          messageTwoStyles={hiLow}
        />
      </View>
      <RowText
        messageTwo={current?.condition?.text}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temperature: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  hiLow: {
    color: 'black',
    fontSize: 20
  },
  hiLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 43
  },
  message: {
    fontSize: 25
  }
})
export default CurrentWeather
