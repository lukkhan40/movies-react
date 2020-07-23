import React from "react";
import { Carousel, Button } from "antd";
import Link from "next/link";
import Loading from "./Loading";

export default function SliderMovies(props) {
  const { movies } = props;
  const { results } = movies;

  return (
    <Carousel autoplay className="slider-movies">
      {results.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Carousel>
  );
}

function Movie(props) {
  const {
    movie: { id, backdrop_path, title, overview },
  } = props;
  const backdropPath = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;

  return (
    <div
      className="slider-movies__movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="slider-movies__movie-info">
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
          <Link href={"/movie/[id]"} as={`/movie/${id}`}>
            <a>
              <Button type="primary">Ver mas</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
