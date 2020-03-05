import countriesJson from '../components/data/countries.json'

// Reads the JSON file and obtains only the country names, and stores the end result to an array
const countryNames = countriesJson.map(item => item.name)

// Draws a random country name and returns it as a String
export const drawRandCountry = () => {
  const randIdx = Math.floor(Math.random() * countryNames.length)
  const name = countryNames[randIdx]
  return name
}

// Draws the desired number of country names and returns the items as String array
export const drawRandCountries = (number) => {
  const countries = []
  for (let index = 0; index < number; index++) {
    const country = drawRandCountry()
    countries.push(country)
  }
  return countries
}

// Shuffles the array items
export const shuffleArray = (arr) => {
  return arr.sort(() => Math.random() - 0.5)
}