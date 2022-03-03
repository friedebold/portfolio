import { ClientLocation, Dimensions } from './model'

export const fetchGeo = async () => {
  return fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=1a92c0ba6cdc489eb748bd34324eb85f')
    .then((res) => res.json())
    .then((res) => {
      const geoData: { location: ClientLocation } = {
        location: {
          country: res.country,
          region: res.region,
          city: res.city,
          flag: res.flag.emoji
        },
      }
      return geoData
    })
    .catch((err) => console.log(err))
}

export const getBodyData = (country: string, region: string, flag: string, city: string, windowDimensions: Dimensions) => {
  return {
    "fields": {
      "location": {
        "mapValue": {
          "fields": {
            "country": {
              "stringValue": country
            },
            "city": {
              "stringValue": city
            },
            "region": {
              "stringValue": region
            },
            "flag": {
              "stringValue": flag
            }
          }
        }
      },
      "dimensions": {
        "mapValue": {
          "fields": {
            "width": {
              "integerValue": windowDimensions.width
            },
            "height": {
              "integerValue": windowDimensions.height
            }
          }
        }
      },
      "timestamp": {
        "timestampValue": new Date()
      },
    }
  }
}