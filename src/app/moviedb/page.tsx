import Image from "next/image";
import Link from "next/link";

import { getTopMovies } from "@/actions/movie";
import MovieCard from "@/components/MovieCard";
import { Input } from "@/components/ui/input";

export default async function MovieDB() {
  const data = await getTopMovies();

  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-between mt-4 lg:px-24 px-4">
        <h1 className="text-5xl font-bold">The MovieDB</h1>
        <Input className="w-1/4" />
      </div>

      <div className="mt-16 lg:px-24 px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-bold">Featured Movies</h2>

          <Link href="/" className="text-lg text-[#BE123C]">
            See More
          </Link>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-20 lg:grid-cols-4">
          {data.results.map((movie: any) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              image={movie.poster_path}
              name={movie.title}
              rating={movie.vote_average}
              genreIds={movie.genre_ids}
              releaseDate={movie.release_date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
