import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?q=${lat},${lon}&key=${WEATHER_API_KEY}&lang=pt&days=5`
      )
      const data = await res.json()
      setWeather(data)
    } catch (err) {
      this.fetchWeatherData()
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        setError('permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      await setLat(location.coords.latitude)
      await setLon(location.coords.longitude)
      if (lat && lon) {
        await fetchWeatherData()
      }
    })()
  }, [lat, lon])
  return [loading, error, weather]
}
