import axios from "axios"
export default async function () {
  try {
    const response = await axios.get("https://panjs.com/ywc18.json")
    return { status: "success", data: response.data }
  } catch (error) {
    return { status: "fail" }
  }
}
