import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const API_URL =
  "https://api.clarifai.com/v2/models/eeed0b6733a644cea07cf4c60f87ebb7/outputs";

const headers = {
  Authorization: `Key ${API_KEY}`,
  "Content-Type": "application/json",
};

export interface ImageSource {
  url: string;
  base64?: string;
}

export async function fetchColors(
  imageSource: ImageSource,
  setUploadProgress: (progress: number) => void
) {
  const isBase64 = Boolean(imageSource.base64);
  const key = isBase64 ? "base64" : "url";

  const data = {
    inputs: [
      {
        data: {
          image: {
            [key]: isBase64 ? imageSource.base64 : imageSource.url,
          },
        },
      },
    ],
  };

  if (isBase64) {
    setUploadProgress(0);
  }

  function onUploadProgress({ loaded, total }: ProgressEvent) {
    const percentCompleted = Math.round((loaded * 100) / total);
    setUploadProgress(percentCompleted);
  }

  try {
    const response = await axios.post(API_URL, data, {
      headers,
      onUploadProgress,
    });
    return response.data.outputs[0].data.colors;
  } catch (error) {
    throw error;
  }
}
