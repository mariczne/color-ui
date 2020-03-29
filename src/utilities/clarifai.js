import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL =
  "https://api.clarifai.om/v2/models/eeed0b6733a644cea07cf4c60f87ebb7/outputs";

export async function fetchColors(imageSource) {
  const headers = {
    Authorization: `Key ${API_KEY}`,
    "Content-Type": "application/json"
  };
  const data = {
    inputs: [
      {
        data: {
          image: {
            ...imageSource
          }
        }
      }
    ]
  };

  try {
    const response = await axios.post(API_URL, data, { headers });
    return response.data.outputs[0].data.colors;
  } catch (error) {
    throw error;
  }
}
