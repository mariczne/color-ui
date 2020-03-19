import Clarifai from "clarifai";

const clarifaiApp = new Clarifai.App({
  apiKey: process.env.REACT_APP_API_KEY
});

export async function fetchColors(config) {
  try {
    const response = await clarifaiApp.models.predict(
      Clarifai.COLOR_MODEL,
      config
    );
    if (response.status.code !== 10000) throw response;
    return response.outputs[0].data.colors;
  } catch (error) {
    throw error;
  }
}
