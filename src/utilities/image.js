import axios from "axios";

export async function convertImageToBase64(image) {
  const localUrl = URL.createObjectURL(image);
  const imageBlob = await axios({
    method: "get",
    url: localUrl,
    responseType: "blob"
  });

  return new Promise((resolve, reject) => {
    let base64 = "";
    const reader = new FileReader();
    reader.readAsDataURL(imageBlob.data);
    reader.onloadend = () => {
      const base64data = reader.result.toString();
      base64 = reader.result.toString().substr(base64data.indexOf(",") + 1);
      resolve(base64);
    };
    reader.onerror = err => {
      reject(err);
    };
  });
}
