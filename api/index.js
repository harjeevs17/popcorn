import axios from "axios";
import noimage from "../assets/no-image.png";
const development = "http://52.66.196.224/";
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

export const ReturnTv = async (status) => {
  try {
    const { data } = await axios.get(`${development}fetch-tv/${status}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const ReturnBook = async (status) => {
  try {
    const { data } = await axios.get(`${development}fetch-books/${status}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const ReturnMovies = async (status) => {
  try {
    const { data } = await axios.get(`${development}fetch-movies/${status}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const ReturnData = (type, status) => {
  let data = [];
  if (type === "movies") {
    data = ReturnMovies(status);
  }
  if (type === "Tvshows") {
    data = ReturnTv(status);
  }
  if (type === "books") {
    data = ReturnBook(status);
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
export const fetchRelatedMoviesAndTv = async (id, type) => {
  var url = "";
  if (type === "movies") {
    url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=2204cced80820283f656cf9088708ab7&language=en-US&page=1`;
  } else if (type === "Tvshows") {
    url = `https://api.themoviedb.org/3/tv/${id}/similar?api_key=2204cced80820283f656cf9088708ab7&language=en-US&page=1`;
  }

  try {
    const {
      data: { results },
    } = await axios.get(url);
    var final = [];
    results.map((item) => {
      var d = {};
      (d.title = item.original_title),
        (d.description = item.overview),
        (d.f_image = `https://image.tmdb.org/t/p/w500${item.poster_path}`),
        (d.b_image =
          item.backdrop_path !== null
            ? `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
            : noimage),
        (d.id = item.id),
        (d.date = item.release_date),
        (d.type = type),
        final.push(d);
    });
    return final;
  } catch (err) {
    console.log(err);
  }
};

export const fetchRelatedData = (type, id) => {
  if (type === "movies" || type === "Tvshows") {
    const data = fetchRelatedMoviesAndTv(id, type);
    return data;
  }
};
