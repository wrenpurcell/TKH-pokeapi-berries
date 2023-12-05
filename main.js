import './style.css'
import {getBerries} from "./api-call.js"
import axios from 'axios'

const berryData = await getBerries()
const berriesArray = await berryData.berries
// console.log(berriesArray)

const arrayOfpromises = berriesArray.map(async (berryObj)=>{
  const response =await axios.get(berryObj.berry.url)
  return response 
})

const newArrayOfBerryData = await Promise.all(arrayOfpromises)
console.log(newArrayOfBerryData)

const hardBerries = newArrayOfBerryData
//keep only berry objects that the firmness property set to hard
.filter((berryObj)=>berryObj.data.firmness.name === "hard")
//turn each hard berry object into just the data part of the object
.map((firmBerryObj)=>firmBerryObj.data)

console.log(hardBerries)
