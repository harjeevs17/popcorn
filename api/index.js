import axios from "axios";
const development = "http://localhost:8008/";
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
    items.map((data, key) => {
      var d = {};
      d.id = data.id;
      (d.title = data.volumeInfo.title),
        (d.imageLinks = data.volumeInfo.imageLinks),
        (d.averageRating = data.volumeInfo.averageRating),
        (d.authors = data.volumeInfo.authors),
        (d.description = data.volumeInfo.description),
        (d.infoLink = data.volumeInfo.infoLink),
        (d.date = data.volumeInfo.publishedDate),
        final.push(d);
    });
    return final;
  } catch (err) {
    console.log(err);
  }
};

export const ReturnTv = async () => {
  try {
    const { data } = await axios.get(`${development}fetch-tv`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const ReturnBook = async () => {
  try {
    const { data } = await axios.get(`${development}fetch-books`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const ReturnMovies = async () => {
  try {
    const { data } = await axios.get(`${development}fetch-movies`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const ReturnData = (type) => {
  let data = [];
  if (type === "movies") {
    data = ReturnMovies();
  }
  if (type === "Tvshows") {
    data = ReturnTv();
  }
  if (type === "books") {
    data = ReturnBook();
  }
  return data;
};

export const InsertData = (data) => {
  let url = "";
  console.log("API", data);
  if (data.type == "movies") {
    url = `${development}insert-movie`;
  }
  if (data.type == "books") {
    url = `${development}insert-book`;
  }
  if (data.type == "Tvshows") {
    url = `${development}insert-tv`;
  }
  console.log("target", url);
  axios.post(url, data).then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
};

export const getRating = async (type, id) => {
  let url = "";
  if (type == "movies") {
    url = `${development}fetch-movie-rating/${id}`;
  }
  if (type == "books") {
    url = `${development}fetch-book-rating/${id}`;
  }
  if (type == "Tvshows") {
    url = `${development}fetch-tv-rating/${id}`;
  }
  try {
    console.log("url", url);
    const { data } = await axios.get(url);
    if (data[0]) {
      return data[0].rating;
    } else {
      return 0;
    }
  } catch (err) {
    console.log(err);
  }
};
