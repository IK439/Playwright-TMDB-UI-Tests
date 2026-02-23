import * as Type from "../types/movies.types";

export const popularMoviesConfig: Type.MoviesPageType = {
  path: "/movie",
  defaultSortText: "Popularity Descending",
  sortOption: "Rating Descending",
  genre: "Action",
  keyword: "action packed",
};

export const topRatedMoviesConfig: Type.MoviesPageType = {
  path: "/movie/top-rated",
  defaultSortText: "Rating Descending",
  sortOption: "Release Date Descending",
  genre: "Mystery",
  keyword: "sequel",
};

export const nowPlayingMoviesConfig: Type.MoviesPageType = {
  path: "/movie/now-playing",
  defaultSortText: "Popularity Descending",
  sortOption: "Rating Descending",
  genre: "Animation",
  keyword: "",
};

export const upcomingMoviesConfig: Type.MoviesPageType = {
  path: "/movie/upcoming",
  defaultSortText: "Popularity Descending",
  sortOption: "Release Date Descending",
  genre: "Comedy",
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
