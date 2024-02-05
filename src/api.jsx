import axios from "axios";

const SearchImage = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID inuFsdDOUGMXz07wwG96fce0EexlziTr62RMoMBHouA",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default SearchImage;
