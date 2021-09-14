import axios from "axios";

const API_KEY = "23262406-c7298f4dbbc93d98b496e6608";

function fetchImages(name, page) {
  const API = `https://pixabay.com/api/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return axios.get(API).then((images) => {
    return images;
  });
}

export default fetchImages;
