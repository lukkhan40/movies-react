import React from "react";
import { List, Avatar, Button } from "antd";
import Link from "next/link";
import Loading from "./Loading";
import { RightOutlined } from "@ant-design/icons";

export default function MovieList(props) {
  const { title, movies } = props;
  const { results } = movies;

  return (
    <List
      className="movie-list"
      size="default"
      header={<h2>{title}</h2>}
      bordered
      dataSource={results}
      renderItem={(movie) => <RenderMovie movie={movie} />}
    />
  );
}

function RenderMovie(props) {
  const {
    movie: { id, title, poster_path },
  } = props;
  const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <List.Item className="movie-list__movie">
      <List.Item.Meta
        avatar={<Avatar src={posterPath} />}
        title={
          <Link href={`/movie/${id}`}>
            <a>{title}</a>
          </Link>
        }
      />
      <Link href={`/movie/${id}`}>
        <a>
          <Button type="primary" shape="circle">
            <RightOutlined />
          </Button>
        </a>
      </Link>
    </List.Item>
  );
}
