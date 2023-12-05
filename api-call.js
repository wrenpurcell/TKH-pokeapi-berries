import axios from "axios";

export async function getBerries(){
  const response = await axios.get("https://pokeapi.co/api/v2/berry-flavor/1/")
  return response.data
}
export async function getData(url){
  const response = await axios.get(url)
  return response.data
}