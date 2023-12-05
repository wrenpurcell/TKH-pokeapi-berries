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

