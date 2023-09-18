import { GenresResponse } from "@/types";

const token = process.env.NEXT_PUBLIC_API_KEY;

export async function getTopMovies() {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

  const res = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + token,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getGenresList(): Promise<GenresResponse> {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const res = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + token,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
