import './style.css'
import {getBerries} from "./api-call.js"
import axios from 'axios'

const berryData = await getBerries()
const berriesArray = await berryData.berries
// console.log(berriesArray)

const arrayOfpromises = berriesArray.map(async (berryObj)=>{
  const response =await axios.get(berryObj.berry.url)
  return response.data
})

const newArrayOfBerryData = await Promise.all(arrayOfpromises)
// console.log(newArrayOfBerryData)

const hardBerries = newArrayOfBerryData
//keep only berry objects that the firmness property set to hard
.filter((berryObj)=>berryObj.firmness.name === "hard")
console.log(hardBerries)



//creates an array of objects, instead of an array of arrays of objects
const arrayOfflavorObjects = newArrayOfBerryData.flatMap(berry => berry.flavors)

console.log(arrayOfflavorObjects); 




