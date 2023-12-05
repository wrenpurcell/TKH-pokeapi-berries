import axios from "axios";

export async function getBerries() {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/berry-flavor/1/"
    );
    if (response.status !== 200) {
      throw new Error();
    }
    return response.data
  } catch (err) {
    console.error("Uh oh! " + err);
  }
}

// export async function getData(url){
//   const response = await axios.get(url)
//   return response.data
// }
