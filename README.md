# color-ui
color-ui is a simple web interface written in React for [Clarifai's](https://clarifai.com/) ['Color' model](https://clarifai.com/models/color-image-recognition-model-eeed0b6733a644cea07cf4c60f87ebb7) which analyzes the provided image and returns its main, dominant colors along with their hex values and closest W3C color names.

### Testing the app
Right now it's available at <https://color-ui.herokuapp.com/>. Because of Heroku hosting it may take a few seconds to wake up at first.

### Testing the app locally
1. Clone the repository
2. Install dependencies via `npm install`
3. In the main directory create a file `.env.local`, inside the file add line `REACT_APP_API_KEY='YOUR_API_KEY'`, substituting `YOUR_API_KEY` placeholder for your own API key provided by Clarifai
4. Run the app via `npm start`

### To do
Users should have the possibility to upload images straight from their device. Since I want color-ui to remain front-end only, this will most likely have to be done with an external image sharing website.