import axios from "axios";
export const FetchMovieData = async (query) => {
  try {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=2204cced80820283f656cf9088708ab7&query=${query}&page=1&include_adult=true`
    );
    return results;
  } catch (err) {
    console.log(err);
  }
};

export const FetchTvData = async (query) => {
  try {
    //const  pageNumber=1;
    const tvurl = `https://api.themoviedb.org/3/search/tv?api_key=2204cced80820283f656cf9088708ab7&language=en-US&page=1&query=${query}&include_adult=false`;
    const {
      data: { results },
    } = await axios.get(tvurl);
    return results;
  } catch (err) {
    console.log("This is the error");
  }
};

export const FetchBookData = async (query) => {
  try {
    const bookurl = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
    const {
      data: { items },
    } = await axios.get(bookurl);
    var final = [];
    items.map(({ volumeInfo }, key) => {
      var data = {};
      (data.title = volumeInfo.title),
        (data.imageLinks = volumeInfo.imageLinks),
        (data.averageRating = volumeInfo.averageRating),
        (data.authors = volumeInfo.authors),
        (data.description = volumeInfo.description),
        (data.infoLink = volumeInfo.infoLink),
        (data.date = volumeInfo.publishedDate),
        final.push(data);
    });
    return final;
  } catch (err) {
    console.log(err);
  }
};
