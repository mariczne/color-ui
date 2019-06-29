# color-ui
color-ui is a simple web interface written in React for [Clarifai's](https://clarifai.com/) ['Color' model](https://clarifai.com/models/color-image-recognition-model-eeed0b6733a644cea07cf4c60f87ebb7) which analyzes the provided image and returns its main, dominant colors along with their hex values and closest W3C color names.

### Testing the app
Right now it's available at <https://mariczne.github.io/color-ui/>. 

### Testing the app locally
1. Clone the repository
2. Install dependencies via `npm install`
3. In the main directory create a file `.env.local`, inside the file add line `REACT_APP_API_KEY='YOUR_API_KEY'`, substituting `YOUR_API_KEY` placeholder for your own API key provided by Clarifai
4. Run the app via `npm start`

### To do
* More refactoring
* (Proper) Error handling
* Tests
* Perhaps dropping Semantic UI or at least its React implementation
