import PageContainer from "components/PageContainer";
import useFetch from "hooks/useFetch";
import { Row, Col } from "antd";
import { URL_API, API } from "../utils/contants";
import SliderMovies from "../components/SliderMovies";
import MovieList from "../components/MovieList";

export default function Home(props) {
  const { newMovies, popularMovies, topMovies } = props;

  return (
    <PageContainer>
      <SliderMovies movies={newMovies} />
      <Row>
        <Col span={12}>
          <MovieList title="Películas Populares" movies={popularMovies} />
        </Col>
        <Col span={12}>
          <MovieList title="Mejores Películas Puntuadas" movies={topMovies} />
        </Col>
      </Row>
    </PageContainer>
  );
}

export async function getStaticProps() {
  const resNew = await fetch(
    `${URL_API}/movie/now_playing?api_key=${API}&language=en-US&page=1`
  );
  const resPopular = await fetch(
    `${URL_API}/movie/popular?api_key=${API}&language=en-US&page=1`
  );
  const resTop = await fetch(
    `${URL_API}/movie/top_rated?api_key=${API}&language=en-US&page=1`
  );

  const newMovies = await resNew.json();
  const popularMovies = await resPopular.json();
  const topMovies = await resTop.json();

  return {
    props: {
      newMovies,
      popularMovies,
      topMovies,
    },
  };
}
