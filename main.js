import './style.css'
import {getBerries} from "./api-call.js"

const berryData = await getBerries()
const berriesArray = await berryData.berries
console.log(berriesArray)


  










// const arrayOfpromises = berriesArray.map((berryObj)=>{
//   const response = 
//   return berryObj.berry.url
// })