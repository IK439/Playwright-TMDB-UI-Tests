import * as Type from "../types/movies.types";

export const popularMoviesConfig: Type.MoviesPageType = {
  path: "/movie",
  defaultSortText: "Popularity Descending",
  sortOption: "Rating Descending",
  genre: "Action",
  certification: "12",
  keyword: "action packed",
};

export const topRatedMoviesConfig: Type.MoviesPageType = {
  path: "/movie/top-rated",
  defaultSortText: "Rating Descending",
  sortOption: "Release Date Descending",
  genre: "Mystery",
  certification: "12",
  keyword: "sequel",
};

export const nowPlayingMoviesConfig: Type.MoviesPageType = {
  path: "/movie/now-playing",
  defaultSortText: "Popularity Descending",
  sortOption: "Rating Descending",
  genre: "Animation",
  certification: "12",
  keyword: "",
};

export const upcomingMoviesConfig: Type.MoviesPageType = {
  path: "/movie/upcoming",
  defaultSortText: "Popularity Descending",
  sortOption: "Release Date Descending",
  genre: "Comedy",
  certification: "12",
  keyword: "",
};

export const popularAwardsConfig: Type.AwardsPageType = {
  path: "/award",
  defaultSortText: "Popularity Descending",
  sortOption: "Popularity Ascending",
};

export const upcomingAwardsConfig: Type.AwardsPageType = {
  path: "/award/upcoming",
  defaultSortText: "Latest Ceremony Ascending",
  sortOption: "Popularity Descending",
};
